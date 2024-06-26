import React, { useState } from 'react';
import './PaymentSubscriptionPlanWindow.css'; 
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';
import Navbar from '../../components/navbar';
import Footer from '../../components/Footer';

const PaymentSubscriptionPlanWindow = () => {

  return (
    <div className="payment-subscription-main">
      <LeftSidebar />
      <div className="payment-subscription-management">
        <h2>Payment</h2>
        <h2>Subscription Plan</h2>

      <div className="payment-subscription-management-content">
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

        <div className="category-2">
        <div className="title-2">
        <p className="text-6">Month1</p>      
        </div>
        <select className="dropdownsubs">
              <option value="">Subscription Plan Type</option>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </select>
  
        <div className="group-3">
          <p className="text-7">Payment Date</p>
          <p className="text-8">XXXXXXXXXXXX</p>
        </div>
        <div className="group-4">
          <p className="text-9">Payment Time</p>
          <p className="text-10">XXXXXXXXXXXX</p>
        </div>

        
        </div>

        <div className="category-2">
        <div className="title-2">
        <p className="text-6">Month1</p>      
        </div>
        <select className="dropdownsubs">
              <option value="">Subscription Plan Type</option>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </select>
  
        <div className="group-3">
          <p className="text-7">Payment Date</p>
          <p className="text-8">waiting</p>
        </div>
        <div className="group-4">
          <p className="text-9">Payment Time</p>
          <p className="text-10">waiting</p>
        </div>

        
        </div>


        
      
    </div>
    </div>
      <RightSidebar />
    </div>
  );
};

export default PaymentSubscriptionPlanWindow;



