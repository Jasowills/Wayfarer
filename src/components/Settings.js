import React from "react";
import Notification from "./Notification";
import Profile from "./Profile";
import SearchForm from "./SearchForm";
import { AiOutlineMenu, AiOutlinePlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Dashboard.css"
import logo from '../images/logo-removebg-preview(1).png'

import {  AiOutlineCar, AiOutlineDashboard, AiOutlineDesktop, AiOutlineSetting, } from 'react-icons/ai';
import Logout from "./Logout";
import Details from "./Details";

const Settings = () => {
      const user = JSON.parse(localStorage.getItem("user"));

     const [showSearch, setShowSearch] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 576) {
                setShowSearch(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSearchClick = (e) => {
        if (window.innerWidth < 576) {
            e.preventDefault();
            setShowSearch(!showSearch);
        }
    }
   
    const handleLogoutClick = () => {
        // handle logout logic here
        console.log("Logged out");
    };
    useEffect(() => {
	 
    const menuBar = document.querySelector("#bar");
    const sidebar = document.getElementById("sidebar");
    const searchButton = document.querySelector('#content nav form .form-input button');
    const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
    const searchForm = document.querySelector('#content nav form');
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
    const handleSearchClick = (e) => {
      if (window.innerWidth < 576) {
        e.preventDefault();
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
          searchButtonIcon.classList.replace('bx-search', 'bx-x');
        } else {
          searchButtonIcon.classList.replace('bx-x', 'bx-search');
        }
      }
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
    searchButton.addEventListener("click", handleSearchClick);

    return () => {
      menuBar.removeEventListener("click", handleClick);
      searchButton.removeEventListener("click", handleSearchClick);
    };
  }, []);
    return (
        <div>
  <section id="sidebar">
            <Link to="/dashboard" className="brand">
                <img src={logo} className="logo" alt="logo"/>
                <div className="pair">Wayfarer</div>
            </Link>
            <ul className="side-menu top">
                <li >
                    <Link to="/dashboard" onClick={handleSearchClick}>
                          &nbsp;
                        &nbsp;
                        <AiOutlineDashboard />
                          &nbsp;
                        &nbsp;
                        <span className="text">Dashboard</span>
                    </Link>
                </li>
            
                <li>
                    <Link to="/hireABus">  &nbsp;
                        &nbsp;
                        <AiOutlineCar />
                        &nbsp;
                        &nbsp;
                        <span className="text">Hire A Bus</span>
                    </Link>
            </li>
             {
                    user.isAdmin?  <li>
            <Link to="/create-a-trip">

                   &nbsp;
                   &nbsp;
                <AiOutlinePlusCircle />
                   &nbsp;   &nbsp;
                <span className="text">Create A Trip</span>
            </Link>
        </li>: ""
                }
               
            </ul>
            <ul className="side-menu">
                <li className="active">
                    <Link to="/settings">
                         &nbsp;
                        &nbsp;
                        <AiOutlineSetting />
                         &nbsp;
                        &nbsp;
                        <span className="text">Settings</span>
                      
                    </Link>
                </li>
                <li>
                    <Logout onClick={handleLogoutClick}/>
                </li>
            </ul>
            {showSearch && (
                <form>
                    <input type="text" placeholder="Search..."/>
                    <button type="submit">Search</button>
                </form>
                )} </section>
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
          <main className="host">
            <h2>Settings </h2>
            <Details/>
          </main>
                 </section>
        </div>
       
    )
}
export default Settings