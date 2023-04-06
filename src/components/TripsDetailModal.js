import React from "react";
import "../Dashboard.css";

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
}

const TripDetailsModal = ({ trip, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="flex">
          <h4 className="center">{trip.name}</h4>
          <span className="close" onClick={onClose}>
            &times;
          </span>
        </div>

        <p>Status: <span className="green">On-going</span></p>
        <p>Trip Id:  <span className="details">{trip.id}</span></p>
        <p>Origin: <span className="details">{trip.origin}</span></p>
        <p>Destination: <span className="details">{trip.destination}</span></p>
        <p>Fare: <span className="green">#{trip.fare}</span></p>
        <p>Start Date: <span className="details">{formatDate(trip.startDate)}</span></p>
        <p>End Date:  <span className="details">{formatDate(trip.endDate)}</span></p>
        <p>Current Capacity: <span className="details">{trip.currentCapacity}</span></p>
        <p>Maximum Capacity : <span className="details">{trip.maximumCapacity}</span></p>
      </div>
    </div>
  );
};

export default TripDetailsModal;
