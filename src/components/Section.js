import React, { useEffect, useState } from "react";
import { AiFillCar, AiFillCustomerService, AiFillHome, AiFillShop, AiOutlineAccountBook, AiOutlineCar, AiOutlineDashboard, AiOutlineDesktop, AiOutlineFile, AiOutlinePlus, AiOutlinePlusCircle, AiOutlineSetting, AiOutlineUser } from 'react-icons/ai';
import { AiFillGrid } from 'react-icons/ai';
import logo from '../images/logo-removebg-preview(1).png'
import Logout from "./Logout";
import { Link } from 'react-router-dom';
import "../Dashboard.css"
import CreateATrip from "./CreateATrip";

function Section() {
    const [showSearch, setShowSearch] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"));
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

    return (
        <section id="sidebar">
            <Link to="/" className="brand">
                <img src={logo} className="logo"/>
                <div className="pair">Wayfarer</div>
            </Link>
            <ul className="side-menu top">
                <li className="active">
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
                <li>
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
            )}
        </section>
    )
}

export default Section;
