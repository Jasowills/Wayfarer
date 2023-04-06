import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, LOGOUT_FAILURE } from "../actionTypes";
import cogoToast from "cogo-toast";

export const login = (data, navigate) => async (dispatch) => {
  const { email, password } = data;
  try {
    const response = await fetch(
      "https://better-jodhpurs-newt.cyclic.app/api/v1/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      });

      // Store user data in local storage
      localStorage.setItem("user", JSON.stringify(data.user));

      // Check if user is an admin
      if (data.user.isAdmin === true) {
        navigate("/dashboard"); // Redirect to admin dashboard
      } else {
        navigate("/dashboard"); // Redirect to regular user dashboard
      }

      cogoToast.success("LogIn successful!");
    } else {
      const errorData = await response.json();
      dispatch({
        type: LOGIN_FAILURE,
        payload:
          errorData.message ||
          "Could not sign up. Please try again.",
      });
      cogoToast.error("LogIN failure");
    }
  } catch (error) {
    console.error(error);
    dispatch({ type: LOGIN_FAILURE });
  }
};

export const logout = (navigate) => async (dispatch) => {
  try {
    // Remove user data from local storage  localStorage.removeItem("user");

    dispatch({ type: LOGOUT_SUCCESS });
    cogoToast.success("LogOut successful!");
   
  } catch (error) {
    console.error(error);
    dispatch({
      type: LOGOUT_FAILURE,
      payload:
        error.message || "Could not log out. Please try again.",
    });
    cogoToast.error("LogOut Failure!");
  }
};