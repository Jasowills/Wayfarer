import { SIGNUP_SUCCESS, SIGNUP_FAILURE,  } from "../actionTypes";
import cogoToast from "cogo-toast";
export const signup = (data, navigate) => async (dispatch) => {
  const { firstName, lastName, confirmPassword, email, password } = data;

  try {
    const response = await fetch(
      "https://better-jodhpurs-newt.cyclic.app/api/v1/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          confirmPassword,
          email,
          password,
        }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: data,
      });

      // Dispatch an action to save the user data
     

        console.log(data.userId)
      cogoToast.success("Account registration successful!");
      navigate("/login");
    } else {
      const errorData = await response.json();
      dispatch({
        type: SIGNUP_FAILURE,
        payload: errorData.message || "Could not sign up. Please try again.",
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({
      type: SIGNUP_FAILURE,
      payload: "Could not sign up. Please try again.",
    });
  }
};
