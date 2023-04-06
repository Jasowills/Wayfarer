import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/index";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPrompt, setShowPrompt] = useState(false);

  const handleLogoutClick = () => {
    setShowPrompt(true);
  };

  const handleLogoutConfirm = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleLogoutCancel = () => {
    setShowPrompt(false);
  };

  const promptOptions = {
    title: 'Logout',
    message: 'Are you sure you want to logout?',
    buttons: [
      {
        label: 'Yes',
        onClick: handleLogoutConfirm
      },
      {
        label: 'No',
        onClick: handleLogoutCancel
      }
    ]
  };

  return (
    <>
      <a href="#" className="logout" onClick={handleLogoutClick}>
        &nbsp; &nbsp;
        <AiOutlineUser />
        &nbsp; &nbsp;
        <span className="text">Logout</span>
      </a>
      {showPrompt && (
        confirmAlert(promptOptions)
      )}
    </>
  );
};

export default Logout;
