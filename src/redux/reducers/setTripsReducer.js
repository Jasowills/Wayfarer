import { SET_TRIPS_REQUEST, SET_TRIPS_SUCCESS, SET_TRIPS_FAILURE, ADD_TRIP } from '../actionTypes';

const initialState = {
  trips: [],
  loading: true,
  error: null
};

export default function tripReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TRIPS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case SET_TRIPS_SUCCESS:
      return {
        ...state,
        trips: action.payload,
        loading: false,
        error: null
      };
    case ADD_TRIP:{
      return {
        ...state,
        trips: action.payload
      }
    }
    case SET_TRIPS_FAILURE:
      return {
        ...state,
        trips: [],
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

