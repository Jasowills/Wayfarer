import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTrips } from "../redux/actions/setTripsActions";
import "../Dashboard.css";
import { useState } from "react";
import TripDetailsModal from "./TripsDetailModal";
import Spinner from "./MySpinner";

const OngoingTrips = () => {
  const dispatch = useDispatch();
  const trips = useSelector((state) =>
    state.setTripReducer ? state.setTripReducer.trips : []
  );

  const [selectedTrip, setSelectedTrip] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch(setTrips()).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  const handleTripClick = (trip) => {
    setSelectedTrip(trip);
  };

  const sortedTrips = trips?.trips?.slice(0, 6).reverse();

  return (
    <div className="flexs">
      {isLoading ? (
        <div className="justify">
          <Spinner text="Loading Trips" />
        </div>
      ) : sortedTrips ? (
        sortedTrips.map((tripItem, index) => (
          <div
            className="box"
            onClick={() => handleTripClick(tripItem)}
            key={index}
          >
            <div className="flex">
              <p className="grey">{tripItem.name}</p>
              <i className="fa fa-info"></i>
            </div>
            <h3>
              {tripItem.origin} ~ {tripItem.destination}
            </h3>
            <p className="green">#{tripItem.fare}</p>
          </div>
        ))
      ) : (
        <p>No trips available.</p>
      )}

      {selectedTrip && (
        <TripDetailsModal
          trip={selectedTrip}
          onClose={() => setSelectedTrip(null)}
        />
      )}
    </div>
  );
};

export default OngoingTrips;
