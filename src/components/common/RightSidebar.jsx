import React from 'react';
import { Link } from 'react-router-dom';
import './RightSidebar.css';
import notificationIcon from '../../assets/notifications.svg';
import chatIcon from '../../assets/chat.svg';
import userIcon from '../../assets/User.svg';
import settingIcon from '../../assets/Settings.svg';
import logoutIcon from '../../assets/logout.svg';
import { useDispatch } from 'react-redux';
import { clearShopId } from '../../Slices/ShopSlice';
import { clearShopStatus } from '../../Slices/ShopSlice';

const RightSidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearShopId());
    dispatch(clearShopStatus());
  };

  return (
    <div className="right-sidebar">
      <Link to="/profile" className="icon-link">
        <img className="icon" src={userIcon} alt="User" />
      </Link>

      <Link to="/shop-feedback-setting" className="icon-link">
        <img className="icon" src={chatIcon} alt="Chat" />
      </Link>
      <Link to="/shop-setting-window" className="icon-link">
        <img className="icon" src={settingIcon} alt="Setting" />
      </Link> 
      <Link to="/shopLogin" className="icon-link" onClick={handleLogout}>
        <img className="icon" src={logoutIcon} alt="Logout" />
      </Link>
    </div>
  );
};

export default RightSidebar;
