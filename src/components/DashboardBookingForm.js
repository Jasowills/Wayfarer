import { useEffect } from 'react';
import '../Dashboard.css';
import axios from 'axios';
import cogoToast from 'cogo-toast';
import { Button } from 'react-bootstrap';
import MySpinner from './MySpinner';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createBooking } from '../redux/actions/bookingActions';
import BookingTicket from './BookingTicket';
import Container from './Container';


function BookingForm() {
 const dispatch = useDispatch();
const [isLoading, setIsLoading] = useState(false);
const tripType = useSelector(state => state.booking.tripType);
const origin = useSelector(state => state.booking.origin);
const destination = useSelector(state => state.booking.destination);
const departureDate = useSelector(state => state.booking.departureDate);
const returnDate = useSelector(state => state.booking.returnDate);
const numberOfSeats = useSelector(state => state.booking.numberOfSeats);
const tripId = useSelector(state => state.booking.id);

const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserId(user.id);
    }
  }, []);

  
const bookingData = {
  tripId: tripId,
  userId: userId,
  numberOfSeats: numberOfSeats,
};

const handleTripTypeChange = event => {
  dispatch({ type: 'SET_TRIP_TYPE', payload: event.target.value });
};

const handleOriginChange = event => {
  dispatch({ type: 'SET_ORIGIN', payload: event.target.value });
};

const handleDestinationChange = event => {
  dispatch({ type: 'SET_DESTINATION', payload: event.target.value });
};

const handleDepartureDateChange = event => {
  dispatch({ type: 'SET_DEPARTURE_DATE', payload: event.target.value });
};

const handleReturnDateChange = event => {
  dispatch({ type: 'SET_RETURN_DATE', payload: event.target.value });
};

const handleNumberOfSeatsChange = event => {
  dispatch({ type: 'SET_NUMBER_OF_SEATS', payload: event.target.value });
};

const HandleSubmit = event => {
  event.preventDefault();
  setIsLoading(true)
  dispatch(createBooking(bookingData)).finally(() => {
    setIsLoading(false);
  });
  const container = document.querySelector('.ticket')
  container.style.display = "block"
};

  return (
    
    <form onSubmit={HandleSubmit} className="glassy-form">
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
       <select name="Origin" required value={destination} onChange={handleDestinationChange}>
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
     
     {isLoading ? (
          <MySpinner />
        ) : (
           <button block="true" type="submit">Book Now</button>
      )}
      
 </form>
    
  );
}

export default BookingForm;