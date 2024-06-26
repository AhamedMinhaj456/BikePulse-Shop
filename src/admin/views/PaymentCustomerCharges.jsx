import React, { useState } from 'react';
import './PaymentCustomerCharges.css'; 
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';
import Navbar from '../../components/navbar';
import Footer from '../../components/Footer';

const PaymentCustomerCharges = () => {

  return (
    <div className="payment-charge-main">
      <LeftSidebar />
      <div className="payment-charge-management">
        <h2>Payment</h2>
        <h2>Customer Charges</h2>

      <div className="payment-charge-management-content">
      <div className="group-x">
          <p className="text-7">01.) ReservationID</p> 
        </div>
      <div className="category-1">
        <div className="title-1">
        <p className="text-1">Registration Fee: 12$</p>
        
        </div>
        <div className="group-1">
          <p className="text-2">Payment Date</p>
          <p className="text-3">XXXXXXXXXXXX</p>
        </div>
        <div className="group-2">
          <p className="text-4">Payment Time</p>
          <p className="text-5">XXXXXXXXXXXX</p>
        </div>
        </div>              
      
    </div>
    </div>
      <RightSidebar />
    </div>
  );
};

export default PaymentCustomerCharges;



