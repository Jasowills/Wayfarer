import {ADD_BOOKING, DELETE_BOOKING, UPDATE_BOOKING, BOOKING_ERROR, BOOKING_TICKET_GENERATED } from "../actionTypes"
import cogoToast from "cogo-toast";

export const createBooking = (bookingData) => async (dispatch) => {
  try {
    // First, query the trips API for a trip with the selected origin and destination
    const tripsResponse = await fetch(`https://better-jodhpurs-newt.cyclic.app/api/v1/trips?origin=${bookingData.origin}&destination=${bookingData.destination}`);
    if (!tripsResponse.ok) {
      throw new Error("Could not fetch trips.");
    }
    const tripsData = await tripsResponse.json();
    if (tripsData.length === 0) {
      throw new Error("No trip found with the selected origin and destination.");
    }
    
    // Store the tripId from the first matching trip in the bookingData object
    bookingData.tripId = tripsData.trips[0].id;
    // Now, send the booking data to the booking API
    const response = await fetch("https://better-jodhpurs-newt.cyclic.app/api/v1/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers here as needed
      },
      body: JSON.stringify(bookingData),
    });
        
    if (response.ok) {
      const data = await response.json();
      dispatch({
        type: ADD_BOOKING,
        payload: data,
      });
      cogoToast.success("Booking added successfully!");
      dispatch({
        type: BOOKING_TICKET_GENERATED,
        payload: data,
      });
    } else {
      const errorData = await response.json();
      dispatch({
        type: BOOKING_ERROR,
        payload: errorData.message || "Could not add booking. Please try again.",
      });
      cogoToast.error(errorData.message);
    }
  } catch (error) {
    console.error(error);
    dispatch({
      type: BOOKING_ERROR,
      payload: error.message || "Could not add booking. Please try again.",
    });
    cogoToast.error(error.message);
  }
};

export const deleteBooking = (bookingId) => async (dispatch) => {
  try {
    const response = await fetch(`https://better-jodhpurs-newt.cyclic.app/api/v1/booking/${bookingId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers here as needed
      },
    });
    if (response.ok) {
      dispatch({
        type: DELETE_BOOKING,
        payload: bookingId,
      });
      cogoToast.success("Booking removed successfully!");
    } else {
      const errorData = await response.json();
      dispatch({
        type: BOOKING_ERROR,
        payload:
          errorData.message || "Could not remove booking. Please try again.",
      });
      cogoToast.error("Could not remove booking. Please try again.");
    }
  } catch (error) {
    console.error(error);
    dispatch({
      type: BOOKING_ERROR,
      payload: "Could not remove booking. Please try again.",
    });
    cogoToast.error("Could not remove booking. Please try again.");
  }
};

