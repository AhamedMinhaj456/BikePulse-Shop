import React, { useState, useEffect } from 'react';
import './CustomerManagementWindow.css';
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';
import Navbar from '../../components/navbar';
import Footer from '../../components/Footer';

const CustomerManagementWindow = () => {
  const [acceptedReservations, setAcceptedReservations] = useState([]);

  useEffect(() => {
    // Retrieve acceptedReservations from local storage
    const storedAcceptedReservations = localStorage.getItem('acceptedReservations');
    if (storedAcceptedReservations) {
      setAcceptedReservations(JSON.parse(storedAcceptedReservations));
    }
  }, []);

  return (

    <div className="customer-management1">
    <Navbar/>  
    <div className="customer-management">
      <LeftSidebar />

      <div className="customer-management-content">
        <h2>Customer Management</h2>

        {acceptedReservations.length === 0 ? (
          <p>No accepted reservations found.</p>
        ) : (
          <div className="customer-list">
            {acceptedReservations.map((reservation) => (
              <div key={reservation.id} className="customer-item">
                <p>
                  <strong>Customer Name:</strong> {reservation.customerName}
                </p>
                <p>
                  <strong>Location:</strong> {reservation.location}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <RightSidebar />
    </div>
    <Footer/>
    </div>
  );
};

export default CustomerManagementWindow;
