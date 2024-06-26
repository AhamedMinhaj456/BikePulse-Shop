import React, { useState } from 'react';
import './ShopFeedbackSettingWindow.css';
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';
import Navbar from '../../components/navbar';
import Footer from '../../components/Footer';

const ShopFeedbackSettingWindow = () => {
  // State to manage chat settings
  const [chatSettings, setChatSettings] = useState({
    // Add your chat settings fields here
    notifications: true,
    sound: true,
    // ...
  });

  const handleChatSettingsUpdate = (e) => {
    e.preventDefault();
    // Implement logic to update chat settings
    console.log('Chat settings updated:', chatSettings);
  };

  return (
    <div className="shop-feedback-setting-window1">
      <Navbar/>
    <div className="shop-feedback-setting-window">
      <LeftSidebar />

      <div className="shop-feedback-setting-content">
        <h2>Customer Feedbacks</h2>

        <form className="shop-feedback-setting-form" onSubmit={handleChatSettingsUpdate}>
          <label>
            <input
              type="checkbox"
              checked={chatSettings.notifications}
              onChange={(e) =>
                setChatSettings({ ...chatSettings, notifications: e.target.checked })
              }
            />
            Receive Notifications
          </label>

          <label>
            <input
              type="checkbox"
              checked={chatSettings.sound}
              onChange={(e) => setChatSettings({ ...chatSettings, sound: e.target.checked })}
            />
            Enable Sound
          </label>

          {/* Add more fields for chat settings */}
          
          <button type="submit">Save Settings</button>
        </form>
      </div>

      <RightSidebar />
    </div>
    <Footer/>
    </div>
  );
};

export default ShopFeedbackSettingWindow;
