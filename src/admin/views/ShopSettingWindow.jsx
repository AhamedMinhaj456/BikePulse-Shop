import React, { useState } from 'react';
import './ShopSettingWindow.css';
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';
import Navbar from '../../components/navbar';
import Footer from '../../components/Footer';

const ShopSettingWindow = () => {
  // State to manage account settings
  const [accountSettings, setAccountSettings] = useState({
    // Add your account settings fields here
    notification: true,
    darkMode: false,
    // ...
  });
  
    const [holiday, setHolidays] = useState('');
  
    const handleChange = (event) => {
      setHolidays(event.target.value);
    };

 

  const handleAccountSettingsUpdate = (e) => {
    e.preventDefault();
    // Implement logic to update account settings
    console.log('Account settings updated:', accountSettings);
  };

  return (
    <div className="shop-setting-window1">
    <Navbar/>
    <div className="shop-setting-window">
      <LeftSidebar />

      <div className="shop-setting-content">
        <h2>Shop Settings</h2>

        <form className="shop-setting-form" onSubmit={handleAccountSettingsUpdate}>
          <label>
            <input
              type="checkbox"
              checked={accountSettings.notification}
              onChange={(e) =>
                setAccountSettings({ ...accountSettings, notification: e.target.checked })
              }
            />
            Receive Notifications
          </label>

         {/* <label>
            <input
              type="checkbox"
              checked={accountSettings.darkMode}
              onChange={(e) => setAccountSettings({ ...accountSettings, darkMode: e.target.checked })}
            />
            Dark Mode
          </label>
            */}

          {/* Add more fields for account settings */}
        




 


    <div className="shop-date-picker-container">
      <label htmlFor="shop-holidays">Holidays/Shop Closing Dates
       <input 
                  type="checkbox"
                  style={{ marginLeft: '10px' }} 
                />
      </label>
      <input 
        type="date" 
        name="holiday" 
        id="holiday" 
        value={holiday} 
        onChange={handleChange} 
        required 
      />
    </div>
    <div className="shop-date-picker-container">
      <label htmlFor="shop-openings">Shop Opening time</label>
      <input 
        type="time" 
        name="opentime" 
        id="opentime" 
        value={holiday} 
        onChange={handleChange} 
        required 
      />
    </div>
    <div className="shop-date-picker-container">
      <label htmlFor="shop-closings">Shop closing time</label>
      <input 
        type="time" 
        name="closetime" 
        id="closetime" 
        value={holiday} 
        onChange={handleChange} 
        required 
      />
    </div>
    <div className="shop-feature-container">
      <label htmlFor="shop-features">Services of the shop</label>
      <input
     type="text"
    />
    </div>
    <div className="shop-description-container">
      <label htmlFor="shop-description">Description of the shop</label>
      <input
     type="text"
    />
    </div>
    


          <button type="submit">Save Settings</button>
        </form>
      </div>

      <RightSidebar />
    </div>
    <Footer/>
    </div>
  );
};

export default ShopSettingWindow;
