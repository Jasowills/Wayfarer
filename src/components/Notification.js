import React, { useState } from "react";
import { AiOutlineBell } from "react-icons/ai";

const Notification = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    const num = document.querySelector('.num')
    num.style.display = 'none'
  };

  return (
    <div className="notification">
      <a href="#" onClick={toggleNotifications}>
        <AiOutlineBell />
        {showNotifications && (
          <div className="dropdown">
            <ul className="notification-list">
              <li className="cogo-toast-success notification-item"><div className="border"></div> Login successful <i className="fa fa-check"></i></li>
             
            </ul>
          </div>
        )}
        <span className="num">1</span>
      </a>
    </div>
  );
};

export default Notification;
