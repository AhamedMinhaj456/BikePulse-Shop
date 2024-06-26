import React from 'react';
import './ShopMainWindow.css'; 
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';
import Navbar from '../../components/navbar';
import Footer from '../../components/Footer';

const ShopMainWindow = () => {
  return (
    <div className="shop-main-container">
      <Navbar/>
      <div className="shop-main">
        <LeftSidebar />
        <div className="shop-main-middle">
        <h1>Welcome to Shop Dashboard</h1>
        </div>
        <RightSidebar />
      </div>
      <Footer/>
    </div>
  );
};

export default ShopMainWindow;
