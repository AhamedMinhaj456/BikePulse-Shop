// AdminProfileWindow.js
import React, { useState, useEffect } from 'react';
import './ShopProfileWindow.css';
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';
import Navbar from '../../components/navbar';
import Footer from '../../components/Footer';

const ShopProfileWindow = () => {

    const [ipAddress, setIpAddress] = useState(' ');
    const [geoInfo, setGeoInfo] = useState({});

    useEffect(() => {
        getVisitorIp();
    }, []);

    //Get the IPAddress
    const getVisitorIp = async () => {
        try {
            const response = await fetch('https://api.ipify.org');
            const data = await response.text();
            //store IP in state
            setIpAddress(data);
        } catch (error) {
            console.error('Failed to fetch IP:', error);
        }
    }; 

//update IP address by user input
    const handleInputChange = (e) => {
        setIpAddress(e.target.value);
    };

    //use IP from state to get location info
    const fetchIPInfo = async () => {
        try {
           const response = await fetch('http://ip-api.com/json/${ipAddress}') 
           const data = await response.json();
           //store location info in state
           setGeoInfo(data);
        } catch (error) {
            console.error('Failed to location info:',error);
            
        }
    };


    const [profileData, setProfileData] = useState({
        profileImage: null, // Store the uploaded image URL
    });

    const handleProfileUpdate = (e) => {
        e.preventDefault();
        // Implement logic to update the user profile
        console.log('Profile updated:', profileData);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileData({
                    ...profileData,
                    profileImage: reader.result,
                });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="shop-profile-window1">
            <Navbar/>
        <div className="shop-profile-window">
            <LeftSidebar profileImage={profileData.profileImage} />
          
            <div className="shop-profile-content">
                <h2>Shop Profile</h2>
                <form className="shop-profile-form" onSubmit={handleProfileUpdate}>
                    <label>Profile image:</label>
                    {profileData.profileImage && (
                        <img src={profileData.profileImage} alt="Admin" className="shop-image" />
                    )}
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    <label>Shop Name:</label>
                    <input
                        type="text"
                        value={profileData.shopname}
                        onChange={(e) => setProfileData({ ...profileData, shopname: e.target.value })}
                    />
                    <label>Email:</label>
                    <input
                        type="email"
                        name="shopemail"
                        placeholder="shopemail@gmail.com"
                        value={profileData.email}
                        onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    />
                    <label>Telephone no.:</label>
                    <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                    />
                    <label>Shop Address:</label>
                    <input
                        type="text"
                        name="shopAddress"
                        placeholder="Shop Name, Street, City"
                        value={profileData.shopAddress}
                        onChange={(e) => setProfileData({ ...profileData, shopAddress: e.target.value })}
                    />
                    <label>Shop location:  <button1 onClick = {fetchIPInfo} >update info</button1> </label>
                    <input
                        type="text"
                        name = "shoplocation"
                        placeholder="IP address of the shop location"
                        value= {ipAddress}
                        onChange={handleInputChange}
                    />
                    <label>Shop mission:</label>
                    <input
                        type="text"
                        value={profileData.shopmission}
                        onChange={(e) => setProfileData({ ...profileData, shopmission: e.target.value })}
                    />
                    <label>Change password:  <button1 type="save">Save</button1></label>
                    <input
                        type="password"
                        placeholder="current password"                        
                    /><input
                    type="password"
                    name="shopNewPassword"
                    placeholder="new password"
                    value={profileData.shopNewPassword}
                    onChange={(e) => setProfileData({ ...profileData, shopNewPassword: e.target.value })}
                />
                 

                    
                    <button type="submit">Update Profile</button>
                </form>
            </div>
           
            <RightSidebar />
        </div>
        <Footer/>
        </div>
    );
};

export default ShopProfileWindow;
