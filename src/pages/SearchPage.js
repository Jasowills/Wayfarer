import { useState, useEffect } from 'react';
import "../searchpage.css"
import logo from '../images/logo-removebg-preview(1).png'

const TripSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [trips, setTrips] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState([]);

  const filterTrips = () => {
    const filtered = trips.filter(
      trip =>
        trip.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trip.destination.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTrips(filtered);
  };

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch('https://better-jodhpurs-newt.cyclic.app/api/v1/trips');
        const data = await response.json();
        setTrips(data.trips);
      } catch (error) {
        console.error('Failed to fetch trips', error);
      }
    };
    fetchTrips();
  }, []);

  useEffect(() => {
    filterTrips();
  }, [searchTerm, trips]);

  const handleChange = async event => {
    setSearchTerm(event.target.value);
    try {
      const response = await fetch('https://better-jodhpurs-newt.cyclic.app/api/v1/trips');
      const data = await response.json();
      setTrips(data.trips);
    } catch (error) {
      console.error('Failed to fetch trips', error);
    }
  };


  return (
      <div className='body'>
          <div className='navbar'></div>
          <form>
              <div id="form-input">
             <img class="logo" src={logo} alt="logo"/>

          <input
            type="search"
            placeholder="   Search..."
                      value={searchTerm}
                      id="input"
            onChange={handleChange}
          />
          <button type="submit" id="search-btn">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </form>
      <ul>
       {filteredTrips.length === 0 ? (
  <p>No trips found</p>
) : (
  <ul>
    {filteredTrips.map(trip => (
      <li key={trip.id} class='li'>
            <span>{trip.origin}</span> to <span>{trip.destination}</span>
      </li>
    ))}
  </ul>
)}

      </ul>
    </div>
  );
};

export default TripSearch;
