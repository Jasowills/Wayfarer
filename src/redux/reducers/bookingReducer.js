import {
  SET_TRIP_TYPE,
  SET_ORIGIN,
  SET_DESTINATION,
  SET_DEPARTURE_DATE,
  SET_RETURN_DATE,
  SET_NUMBER_OF_SEATS,
  SET_TRIP_ID,
  SET_USER_ID,
  BOOKING_ERROR,
  ADD_BOOKING,
  DELETE_BOOKING,
  UPDATE_BOOKING,
  BOOKING_TICKET_GENERATED
} from '../actionTypes';

const initialState = {
  tripType: 'single',
  origin: '',
  destination: '',
  departureDate: '',
  returnDate: '',
  numberOfSeats: 1,
  tripId: null,
  userId: null,
  isLoading: false,
  error: null,
  bookings: [
    
  ],
  bookingStatus: 'PENDING', // Add this line
 
};


// Define the Redux reducer function
const bookingReducer = (state = initialState, action,) => {
  switch (action.type) {
    case SET_TRIP_TYPE:
      return {
        ...state,
        tripType: action.payload
      };
    case SET_ORIGIN:
      return {
        ...state,
        origin: action.payload
      };
    case SET_DESTINATION:
      return {
        ...state,
        destination: action.payload
      };
    case SET_DEPARTURE_DATE:
      return {
        ...state,
        departureDate: action.payload
      };
    case BOOKING_TICKET_GENERATED: 
      return {
    ...state,
        bookingStatus: 'CONFIRMED',
        bookings: {
        id: action.payload.data.id,
        totalFare: action.payload.data.totalFare,
        }
 
  }

    case SET_RETURN_DATE:
      return {
        ...state,
        returnDate: action.payload
      };
    case SET_NUMBER_OF_SEATS:
      return {
        ...state,
        numberOfSeats: action.payload
      };
    case SET_TRIP_ID:
      return {
        ...state,
        tripId: action.payload
      };
    case SET_USER_ID:
      return {
        ...state,
        userId: action.payload
      };
   
    case BOOKING_ERROR:
      return {
        ...state,
        error: action.payload
      };
   case ADD_BOOKING:
  return {
    ...state,
    bookings: [...state.bookings, action.payload]
  };

    case DELETE_BOOKING:
      return {
        ...state,
      };
    case UPDATE_BOOKING:
      return {
        ...state,
        bookings: state.bookings.map(booking => {
          if (booking.id === action.payload.id) {
            return {
              ...booking,
              ...action.payload.updates
            };
          } else {
            return booking;
          }
        })
      };
    default:
      return state;
  }
};

export default bookingReducer;
