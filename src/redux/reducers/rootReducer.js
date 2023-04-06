// reducers/rootReducer.js

import { combineReducers } from 'redux';
import authReducer from './authReducer';
import setTripReducer from "./setTripsReducer"
import bookingReducer from './bookingReducer';
// import other reducers

const rootReducer = combineReducers({
    auth: authReducer,
    booking: bookingReducer,
    setTripReducer: setTripReducer
  // other reducers...
});

export default rootReducer;
