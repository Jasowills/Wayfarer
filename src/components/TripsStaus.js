import React, { useEffect, useState } from "react";
import "../Dashboard.css";

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
}

function TripStatus() {
  const [userId, setUserId] = useState(null);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUserId(storedUser.id);
    }
  }, []);

  useEffect(() => {
    if (userId) {
      fetch(`https://better-jodhpurs-newt.cyclic.app/api/v1/bookings/user/${userId}?sort=-createdAt`)
        .then(response => response.json())
        .then(data => {
          console.log(data); // log the data returned by the API
          setBookings(data.data);
        })
        .catch(error => console.log(error));
    }
  }, [userId]);

  const recentBookings = bookings.slice(-6).reverse();

  return (
    <div className="todo">  
      <div className="head">
        <h3>Recent Bookings</h3>
        <i className='fa fa-circle red' title='Declined'></i>
        <i className='fa fa-circle yellow' title='Pending'></i>
        <i className='fa fa-circle green' title='Approved'></i>
      </div>
      {recentBookings.length > 0 ? (
        <ul className="todo-list">
          {recentBookings.map(booking => (
            <li key={booking.id}>
              <div className="recents">
                <div className="dates">
                  <span>{booking.tripOrigin}</span> - 
                  <span> {booking.tripDestination}</span>
                </div>                  
                <span className="float">{formatDate(booking.date)}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recent bookings.</p>
      )}
    </div>
  );
}

export default TripStatus;

