import { useState } from 'react';
import '../index.css'; // Import the CSS file
import { Link } from 'react-router-dom';

function BookingForm() {
  const [tripType, setTripType] = useState('single'); // single or return
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [numberOfSeats, setNumberOfSeats] = useState(1);

  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
  };

  const handleOriginChange = (event) => {
    setOrigin(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleDepartureDateChange = (event) => {
    setDepartureDate(event.target.value);
  };

  const handleReturnDateChange = (event) => {
    setReturnDate(event.target.value);
  };

  const handleNumberOfSeatsChange = (event) => {
    setNumberOfSeats(parseInt(event.target.value, 10));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <form onSubmit={handleSubmit} id="glassy-form" >
      <h3>Book A Trip</h3>
      <div className='flexdrive'>
        <label>
          <input
            type="radio"
          
            value="single"
            checked={tripType === 'single'}
            onChange={handleTripTypeChange}
          />
          Single trip
              </label>
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;

        <label>
          <input
            type="radio"
            value="return"
          

            checked={tripType === 'return'}
            onChange={handleTripTypeChange}
          />
          Return trip
        </label>
          </div>
          <div className='flexdrive'>
                <div>
        <label>
          Origin:
       <select name="Origin" required defaultValue={origin} onChange={handleOriginChange}>
      <option value="" disabled>Select Origin</option>
      <option value="lekki">Lekki</option>
      <option value="Iyana-Ipage">Iyana-Ipaja</option>
      <option value="Ajah">Ajah</option>
      <option value="Epe">Epe</option>
      <option value="Surulere">Surulere</option>
      <option value="Ikeja">Ikeja</option>
      <option value="Egbeda">Egbeda</option>
      <option value="Mushin">Mushin</option>
      <option value="Ikorodu">Ikorodu</option>
      <option value="Ikotun">Ikotun</option>
      <option  value="Isolo">Isolo</option>
      <option value="Jakande">Jakande(Gate)</option>
     <option value="Egbe">Egbe</option>
      <option value="Lasu-isheri">Lasu-Isheri</option>
      <option value="Ibadan">Ibadan</option>
      <option value="Apapa">Apapa</option>
      <option value="Agege">Agege</option>
    </select>
        
        </label>
      </div>
      <div>
          <label>
          Destination:
       <select name="Origin" required defaultValue={destination} onChange={handleDestinationChange}>
      <option value="" disabled>Select Destination</option>
      <option value="lekki">Lekki</option>
      <option value="Iyana-Ipage">Iyana-Ipaja</option>
      <option value="Ajah">Ajah</option>
      <option value="Epe">Epe</option>
      <option value="Surulere">Surulere</option>
      <option value="Ikeja">Ikeja</option>
      <option value="Egbeda">Egbeda</option>
      <option value="Mushin">Mushin</option>
      <option value="Ikorodu">Ikorodu</option>
      <option value="Ikotun">Ikotun</option>
      <option  value="Isolo">Isolo</option>
      <option value="Jakande">Jakande(Gate)</option>
     <option value="Egbe">Egbe</option>
      <option value="Lasu-isheri">Lasu-Isheri</option>
      <option value="Ibadan">Ibadan</option>
      <option value="Apapa">Apapa</option>
      <option value="Agege">Agege</option>

    </select>
        
        </label>
      </div>
          </div>
          <div className='flexdrive'>
               <div>
        <label>
          Departure date:
          <input
            type="date"
            value={departureDate}
            onChange={handleDepartureDateChange}
          />
        </label>
      </div>
      {tripType === 'return' && (
        <div>
          <label>
            Return date:
            <input
              type="date"
              value={returnDate}
              onChange={handleReturnDateChange}
            />
          </label>
        </div>
      )}
      <div>
        <label>
          Number of seats:
          <input
            type="number"
              min="1"
              max="20"
            value={numberOfSeats}
            onChange={handleNumberOfSeatsChange}
          />
        </label>
      </div>
     </div>
     
     <button block="true" type="submit">Book Now</button>
    </form>
  );
}

export default BookingForm;