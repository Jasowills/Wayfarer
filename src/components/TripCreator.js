import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTrip } from "../redux/actions/setTripsActions";

import "../Trip.css"
import MySpinner from "./MySpinner";
const TripCreator = () => {
    const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    origin: "",
    destination: "",
    fare: "",
    startDate: "",
    endDate: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
      event.preventDefault();
        setIsLoading(true)

    dispatch(createTrip(formData)).finally(() => {
    setIsLoading(false);
  });
    setFormData({
      name: "",
      origin: "",
      destination: "",
      fare: "",
      startDate: "",
      endDate: "",
    })
  };

    return (
        <div>
            <h3 className="shift">Create Trips <i className="fa fa-plus-circle"></i> </h3>
            <br/>
            <form className="trip" onSubmit={handleSubmit}>
            
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
                  id="name"
                  placeholder="e.g Trip 1"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="origin">Origin:</label>
        <input
          type="text"
          id="origin"
          name="origin"
          value={formData.origin}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="destination">Destination:</label>
        <input
          type="text"
          id="destination"
          name="destination"
          value={formData.destination}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="fare">Fare:</label>
        <input
          type="number"
          id="fare"
          name="fare"
          value={formData.fare}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={formData.endDate}
          onChange={handleInputChange}
        />
                </div>
                <div className="center">
                    {isLoading ? (
          <MySpinner />
        ) : (
            <button type="submit">Create Trip</button>
      )}
                </div>
                
    
      </form>
      </div>
        
      
  );
};

export default TripCreator;
