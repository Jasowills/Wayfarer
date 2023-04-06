import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
} from "../actionTypes";

const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
  token: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: null,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        token: null,
        error:
          action.payload || "Could not sign up. Please try again.",
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.role,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        token: null,
        error: "Invalid email or password",
      };
    case LOGOUT_SUCCESS:
      return {
        ...initialState,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        error:
          action.payload || "Could not log out. Please try again.",
      };
    default:
      return state;
  }
}