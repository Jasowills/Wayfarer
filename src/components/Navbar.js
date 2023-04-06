import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
import logo from '../images/logo-removebg-preview(1).png'
import { Link } from 'react-router-dom';
// function navbarToggler() {
  
// const navbarToggler = document.querySelector(".navbar-toggler");

//   // Get the navbar collapse element
//   const navbarCollapse = document.querySelector(".navbar-collapse");

//   // Add a click event listener to the navbar toggle button
//   navbarToggler.addEventListener("click", () => {
//     // Toggle the "show" class on the navbar collapse element
//     navbarCollapse.classList.toggle("show");
//   });
// }
// navbarToggler()
const Navbar = () => {
  const navbarToggler = document.querySelector(".navbar-toggler");

//   // Get the navbar collapse element
//   const navbarCollapse = document.querySelector(".navbar-collapse");

//   // Add a click event listener to the navbar toggle button
//   navbarToggler.addEventListener("click", () => {
//     // Toggle the "show" class on the navbar collapse element
//     navbarCollapse.classList.toggle("show");
//   });
    return (
  <nav className="navbar navbar-expand-lg bg-light rounded align-items-center justify-content-center" aria-label="Thirteenth navbar example">
        <div className="container-fluid">
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="navbar-brand col-lg-3 me-0" to="/"><img className="logo" src={logo} alt="logo"/></Link>
   
    <div className="collapse navbar-collapse d-lg-flex justify-content-center" id="navbarsExample11">
      <ul className="navbar-nav col-lg-6 justify-content-lg-center">
        <li className="nav-item">
          <Link className="nav-link" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="mm">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="k">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="k">Contact</a>
        </li>
      </ul>
    </div>
    <div className="d-lg-flex col-lg-3 justify-content-lg-end">
      <Link to="/login" className="btn btn-primary">Log In</Link>
    </div>
  </div>
</nav>



  )
}
export default Navbar