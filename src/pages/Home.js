import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'

import Main from "../components/Main"
import BookingForm from "../components/BookingForm";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import EmailSubscription from "../components/Subscribe";
import Footer from "../components/Footer";

const Home = () => {
  return (
    
    <div className="d-flex h-100 text-center text-white bg-light">
      <div className="cover-container d-flex w-100 h-100   mx-auto flex-column">
        <Navbar />
        <div className="px-3 background d-flex mt-5 p-15 d-flex flex-row flex-wrap justify-content-evenly align-items-center align" >
            <div className="one-side w-25" id="media">
            <h1>The modern way to commute across ...cities</h1>
          <p className="lead text-white" id="background">WayFarer is an African technology powered company, providing seamless mobility services to commuters across Africa</p>
          <p className="lead">
            <Link to="/SignUp" className="btn btn-lg btn-light fw-bold  bg-primary border-0 text-white">Get Started</Link>
          </p></div>
        <BookingForm></BookingForm>
        </div>
        
      </div>  
      <Main></Main>
        <EmailSubscription/>
      <Footer />
    </div>
   
   )
};

export default Home;
