import React, { startTransition, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { deleteBooking } from '../redux/actions/bookingActions';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import MySpinner from './MySpinner';

import logo from '../images/logo-removebg-preview(1).png';

const BookingTicket = ({ }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(true);
  const numberOfSeats = useSelector(state => state.booking.numberOfSeats);
  const origin = useSelector(state => state.booking.origin);
  const destination = useSelector(state => state.booking.destination);
  const bookingStatus = useSelector(state => state.booking.bookingStatus)
  const departureDate = useSelector(state => state.booking.departureDate);
  const id = useSelector(state => state.booking.bookings.id);
  const totalFare = useSelector(state => state.booking.bookings.totalFare);
  const tripType = useSelector(state => state.booking.tripType)
  const dispatch = useDispatch();
const now = new Date().getTime();
const expirationDate = now + (24 * 60 * 60 * 1000);
 

  const handleCancelBooking = () => {
    dispatch(deleteBooking(id));
     
  }

  const handleDownloadTicket = () => {
    const doc = new jsPDF();
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
     doc.addImage(logo, 'PNG', 150, 2, 50, 35);
    doc.text('Booking Confirmation', 20, 20);
  
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Booking Status: ${bookingStatus}`, 20, 60);
    doc.text(`TripType: ${tripType}`, 20, 70);
    doc.text(`Booking ID: ${id}`, 20, 80);
    doc.text(`Origin: ${origin}`, 20, 90);
    doc.text(`Destination: ${destination}`, 20, 100);
    doc.text(`Number of seats booked: ${numberOfSeats}`, 20, 110);
    doc.text(`Fare: ${totalFare}`, 20, 120);
    doc.text(`Departure Date: ${departureDate}`, 20, 130);
   doc.text(`Expiration Date: ${new Date(expirationDate).toLocaleString()}`, 20, 140);
    doc.save('booking_confirmation.pdf');
  }
  
  return (
    <div className='ticket'>
      <h4>Booking Confirmation</h4>
      <p>---------------------------------------------------------------------------------</p>
      <ul>
        <li><i className="fa fa-circle"></i> Booking Status:  <span className='green'>{bookingStatus}</span></li>
        <li><i className="fa fa-arrow-left"></i> TripType: {tripType}</li>  
        <li><i className="fa fa-id-card"></i> Booking ID: {id}</li>
        <li><i className="fa fa-map"></i> Origin: {origin}</li>
        <li><i className="fa fa-map"></i> Destination: {destination}</li>
        <li><i className="fa fa-chair"></i> Number of seats booked: {numberOfSeats}</li>
        <li><i className="fa fa-dollar-sign"></i> Fare: {totalFare}</li>
        <li><i className="fa fa-calendar"></i> Departure Date: {departureDate}</li>
      </ul>
      <div className='button-flex'>
        {isLoading ? (
          <MySpinner />
        ) : (
           <button className='button cancel' onClick={handleCancelBooking}>Cancel Booking</button>
      )}
        
        &nbsp;
        {isLoading ? (
          <MySpinner />
        ) : (
        <button className='button' onClick={handleDownloadTicket}>Download Ticket</button>
      )}
      </div>
    </div>
  );
};

export default BookingTicket;
