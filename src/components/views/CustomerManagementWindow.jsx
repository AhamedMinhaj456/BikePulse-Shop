import React, { useState, useEffect } from 'react';
import './CustomerManagementWindow.css';
import LeftSidebar from '../../components/common/LeftSidebar';
import RightSidebar from '../../components/common/RightSidebar';
import Navbar from '../../components/ShopRegister/navbar';
import Footer from '../../components/ShopRegister/Footer';

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
