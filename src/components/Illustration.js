import React from "react";
import image from "../images/undraw_Destination_re_sr74(1).png";

const Illustration = () => {
  return (
    <div className="illustration ">
      <div className="arc top-left"></div>
      <div className="arc bottom-right"></div>
      <img src={image} alt="" className="illustration-images" />
      <p className="caption">
         Book Trips  and Enjoy the Comfort of Wayfarer, <br/> Unbeatable Prices guaranteed!😀
      </p>
    </div>
  );
};

export default Illustration;
