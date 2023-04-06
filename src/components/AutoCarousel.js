import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
import { Link } from "react-router-dom";

const AutoCarousel = ({ images, titles, descriptions }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 3) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex + images.length - 3) % images.length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 3) % images.length);
  };

  return (
    <div className="carousel d-flex h-100 flex-row flex-wrap justify-content-evenly max  m-auto p-5">
      {images.slice(index, index + 3).map((image, i) => (
        <div className="card w-auto" key={i}>
          <img src={image} alt="slide" />
          <div className="card-content bg-dark text-white">
            <h3>{titles[i + index]}</h3>

  <Link to="/SignUp" className="btn btn-lg btn-light fw-bold  bg-primary border-0 text-white">Book Now</Link>          </div>
        </div>
      ))}
          &nbsp;
      <button onClick={handlePrevious} className="controller previous btn btn-primary m-5">
        Previous
          </button>
          &nbsp;&nbsp;

      <button onClick={handleNext} className="controller next btn btn-primary">
        Next
      </button>
    </div>
  );
};

export default AutoCarousel;
