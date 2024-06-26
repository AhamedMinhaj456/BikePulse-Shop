import React, { useState } from 'react';
import './ShopDashboard.css';
import LeftSidebar from  './LeftSidebar';
import RightSidebar from './RightSidebar';

const ShopDashboard = () => {
  const [selectedOption, setSelectedOption] = useState('default');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="shop-dashboard">
      <LeftSidebar />

      <div className="shop-content">
        <h1>Welcome to Shop Dashboard</h1>
        

       
      </div>

      <RightSidebar />
    </div>
  );
};

export default ShopDashboard;
