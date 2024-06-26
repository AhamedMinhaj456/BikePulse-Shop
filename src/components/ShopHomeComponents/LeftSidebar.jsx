import React from 'react';
import { Link } from 'react-router-dom';
import './LeftSidebar.css';
import bikePulseLogo from '../../assets/logo.png';
import ShopManagementIcon from '../../assets/Shop.svg';
import UserManagementIcon from '../../assets/UserManagement.svg';
import SubscriptionIcon from '../../assets/Subscription.svg';
import FaultIcon from '../../assets/Category.svg';
import Account_Setting_Icon from '../../assets/account_setting.svg';
import DropdownIcon from '../../assets/dropdown.svg';

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <div className="logo-container">
        <img src={bikePulseLogo} alt="BikePulse Logo" className="logo" />
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="divider"></div>
      <div className="white-box">
        <Link to="/shop-management" className="list-item">
          {/*<img src={ShopManagementIcon} alt="Shop" />*/}
          <span>Shop Management</span>
        </Link>

        <Link to="/user-management" className="list-item">
          {/*<img src={UserManagementIcon} alt="UserManagement" />*/}
          <span>User Management</span>
        </Link>

        <Link to="/subscription-plans" className="list-item">
          {/*<img src={SubscriptionIcon} alt="Subscription" />*/}
          <span>Subscription Plans Management</span>
        </Link>

        <Link to="/fault-management" className="list-item">
          {/*<img src={FaultIcon} alt="FaultCategory" />*/}
          <span>Fault Category Management</span>
        </Link>

        <div className="list-item dropdown">
          {/*<img src={Account_Setting_Icon} alt="Acount & Setting" />*/}
          <span>Account & Setting</span>
          {/*<img src={DropdownIcon} alt="Dropdown" className="dropdown-icon" />*/}
          <div className="dropdown-content">
            <Link to="/profile">
              <span>Profile</span>
            </Link>
            <Link to="/account-setting">
              <span>Account Setting</span>
            </Link>
            <Link to="/chat-setting">
              <span>Chat Setting</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
