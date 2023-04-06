import React from "react";
import "../Dashboard.css"
import "../index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import MyComponent from "./Message";
import OngoingTrips from "./OngoingTrips";
import { useEffect } from "react";
import DashboardBookingForm from "./DashboardBookingForm";
import { AiFillCar, AiFillCustomerService, AiFillHome, AiFillShop, AiOutlineBell, AiOutlineCar, AiOutlineDashboard, AiOutlineDesktop, AiOutlineMenu, AiOutlineSetting, AiOutlineUser } from 'react-icons/ai';
import TripStatus from "./TripsStaus";
import SearchForm from "./SearchForm";
import Notification from "./Notification";
import Container from "./Container";
import Profile from "./Profile";
// import TripSearch from "./TripSearch";

function Content() {
	useEffect(() => {
	 
    const menuBar = document.querySelector("#bar");
    const sidebar = document.getElementById("sidebar");
    
		window.addEventListener('resize', function() {
  if (this.innerWidth <=1200) {
    console.log('hey1')
    sidebar.classList.add("hide");
  } else {
    console.log('hey2')
    sidebar.classList.remove("hide");
  }
});

    const handleClick = () => {
      sidebar.classList.toggle("hide");
	};
   
	  const switchMode = document.getElementById('switch-mode');
   
    switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	
	} else {
		document.body.classList.remove('dark');
	}
	})
	  

    menuBar.addEventListener("click", handleClick);

    return () => {
      menuBar.removeEventListener("click", handleClick);
    };
  }, []);
    return (
        <section id="content">
		<nav>
			&nbsp;
                         &nbsp;
                        <div id="bar"><AiOutlineMenu/></div>
			<SearchForm/>
			<input type="checkbox" id="switch-mode" hidden />
			<label htmlFor="switch-mode" className="switch-mode"></label>
		<Notification/>
			<Profile/>
		</nav>
		
		<main className="back">
			<div className="head-title">
				<div className="left">
<MyComponent/>
					<ul className="breadcrumb">
						<li>
							<a href="#">Dashboard</a>
						</li>
						<li><i className='fa fa-chevron-right' ></i></li>
						<li>
							<a className="active" href="#">On-going Trips</a>
						</li>
					</ul>
				</div>
				
			</div>

		       <OngoingTrips/>

          
			<div className="table-data">
					<DashboardBookingForm />
					  <Container/>

			<TripStatus/>
			</div>
		</main>
	</section>
    )
}
export default Content;