import { useState, useEffect } from 'react';

const TripSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [trips, setTrips] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState([]);

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
    const filterTrips = () => {
      const filtered = trips.filter(
        trip =>
          trip.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
          trip.destination.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTrips(filtered);
    };
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
    <div>
      <form>
        <div className="form-input">
          <input
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
          />
          <button type="submit" className="search-btn">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </form>
      <ul>
        {filteredTrips.map(trip => (
          <li key={trip.id}>
            <span>{trip.origin}</span> to <span>{trip.destination}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripSearch;
