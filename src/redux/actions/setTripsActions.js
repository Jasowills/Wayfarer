import cogoToast from "cogo-toast";
import { SET_TRIPS_SUCCESS, SET_TRIPS_FAILURE, ADD_TRIP } from "../actionTypes";


 export const createTrip = (tripData) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://better-jodhpurs-newt.cyclic.app/api/v1/trip",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tripData),
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data)
      dispatch({
        type: ADD_TRIP,
        payload: data,
      });
      cogoToast.success('Trip Created Successfully')
    } else {
      const errorData = await response.json();
      cogoToast.error(errorData.message)
      dispatch({
        type: SET_TRIPS_FAILURE,
        payload: errorData.message || "Could not create trip. Please try again.",
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({
      type: SET_TRIPS_FAILURE,
      payload: "Could not create trip. Please try again.",
    });
  }
};

export const setTrips = () => async (dispatch) => {
   try {
    const response = await fetch(
      "https://better-jodhpurs-newt.cyclic.app/api/v1/trips",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      const sortedTrips = data.trips.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      const recentTrips = sortedTrips.slice(0, 3);
      dispatch({
        type: SET_TRIPS_SUCCESS,
        payload: { trips: recentTrips },
      });
    } else {
      const errorData = await response.json();
      dispatch({
        type: SET_TRIPS_FAILURE,
        payload: errorData.message || "Could not set trips. Please try again.",
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({
      type: SET_TRIPS_FAILURE,
      payload: "Could not set trips. Please try again.",
    });
  }
};