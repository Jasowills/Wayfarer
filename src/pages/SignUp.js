import React, {useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import cogoToast from "cogo-toast"
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { signup } from "../redux/actions/authActions";
import MySpinner from "../components/MySpinner";
import logo from '../images/logo-removebg-preview(1).png'
import Illustration from "../components/IllustrationSignup";
import "../index.css"


const SignUp = () => {
  const [isLoading, setLoading] = useState(false)
  
  const [signupData, setData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: ""
  })

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {

  event.preventDefault();
    setLoading(true);
  const nameRegex = /^[a-zA-Z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nameRegex.test(signupData.firstName) || !nameRegex.test(signupData.lastName)) {
    cogoToast.error("First name and last name must contain only letters.");

    return;
  }

  if (!emailRegex.test(signupData.email)) {
    cogoToast.error("Please enter a valid email address.");
 
    return;
  }

  if (signupData.password !== signupData.confirmPassword) {
    cogoToast.error("Passwords do not match.");

    return;
  }


    dispatch(signup(signupData, navigate));
};

  return (
    <div className="body">
      <div className="login-container adjust text-white">
        <Illustration/>
        <Form onSubmit={handleSubmit} className="login-form">
          <h1 className="header text-primary"><img className="logo" src={logo} alt="logo"/></h1>

          <h3 className="float-left ">Sign Up</h3>
        <Form.Group className="width"  controlId="formBasicFirstName">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type="text"
            value={signupData.firstName}
            className="    form-input"
            onChange={(e) => setData({ ...signupData, firstName: e.target.value})}
            required
          />
        </Form.Group>

        <Form.Group className="width"  controlId="formBasicLastName">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            type="text"
            value={signupData.lastName}
            className="    form-input"
            onChange={(e) => setData({ ...signupData, lastName: e.target.value})}
            required
          />
        </Form.Group>

        <Form.Group className="width"  controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={signupData.email}
              className="    form-input"
            onChange={(e) => setData({...signupData, email: e.target.value})}
            required
          />
        </Form.Group>

        <Form.Group className="width"  controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            value={signupData.password}
              className="  mb-3  form-input"
            onChange={(e) => setData({...signupData, password: e.target.value})}
            required
          />
        </Form.Group>

        <Form.Group className="width"  controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password:</Form.Label>
          <Form.Control
            type="password"
              className="   form-input"
            value={signupData.confirmPassword}
            onChange={(e) => setData({...signupData, confirmPassword: e.target.value})}
            required
          />
        </Form.Group>

         <div className="width d-flex mt-5 justify-content-center align-items-center">
            {isLoading ? (
            <MySpinner />
          ) : (
            <Button
              variant="primary"
              type="submit"
              className="submit-btn bg-primary  w-100  form-btn form-input"
            >
             Sign Up
            </Button>
          )}
          </div>
                <span className="mt-1">Already Have an account <Link to="/login" className="text-decoration-none">Login</Link> </span>

      </Form>
    </div>
    </div>
  );
};


  export default SignUp;
