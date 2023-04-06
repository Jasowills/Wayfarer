import React, { useState} from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { login } from "../redux/actions/index";
import MySpinner from "../components/MySpinner";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import cogoToast from "cogo-toast"
import logo from '../images/logo-removebg-preview(1).png'

import Illustration from "../components/Illustration";
const Login = () => {
  const [isLoading, setLoading] = useState(false)
  const [loginData, setData] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(loginData.email)) {
      cogoToast.error("Please enter a valid email address.");
      return;
    } dispatch(login(loginData, navigate)).finally(() => {
    setLoading(false);
  });
     
  }
   

    return (
      <div className="body">
        <div className="login-container text-white">
        
        <Form onSubmit={handleSubmit} className="login-form ">
          <h1 className="header text-primary"><img className="logo" src={logo} alt="logo"/></h1>

          <h3 className="float-left ">Log In</h3>
          <Form.Group className="width" controlId="formBasicEmail">
            <Form.Label>E-mail:</Form.Label>
            <Form.Control
              type="email"
              value={loginData.email}
              className="  text-dark   form-input"
              onChange={(e) => setData({ ...loginData, email: e.target.value })}
              required
            />
          </Form.Group>

          <Form.Group className="width" controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={loginData.password}
              className=" text-dark mb-5 form-input"
              onChange={(e) => setData({ ...loginData, password: e.target.value })}
              required
            />
          </Form.Group>
          <div className="width d-flex mb-5 justify-content-center align-items-center">
            {isLoading ? (
            <MySpinner />
          ) : (
            <Button
              variant="primary"
              type="submit"
              className="submit-btn bg-primary  w-100  form-btn form-input"
            >
              Log In
            </Button>
          )}
      </div>
          
          <span className="">
          Don't have an account?{" "}
          <Link to="/signup" className="text-decoration-none">
            Sign Up
          </Link>
        </span>
        </Form>
        <Illustration/>
      </div>
      </div>
      
    );
  };


export default Login;