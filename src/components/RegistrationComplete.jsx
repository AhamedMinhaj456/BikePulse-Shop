import React, { useState } from 'react';
import ShopOwnerFlowHorizontalbar from "./shopOwnerFlowHorizontalbar";
import Navbar from './navbar';
import './RegistrationComplete.css';
import User from '../assets/User Male.png';
import Notification from '../assets/Notification.png';
import AccessTime from '../assets/Access time.png';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const RegistrationComplete = () => {
   
    const navigate = useNavigate();
  

    return (
        <div>
            <Navbar />
            <div className='reg-complete'>
                <div className='reg-complete-left'>
                    <h2>Grow Your Business with <br/> BikePulse</h2>
                </div>
                <div className='reg-complete-right'>
                    <div style={{ maxWidth: 800 }}> 
                                       
                            <div className='title1'>
                            <img src={User} alt='' className='User'/>
                                <h2>Registration Complete </h2>
                            </div>
                            <div className='part2'>
                               <p1>Thank you for registering with BikePulse! Your shop details are now under review by our team.</p1> 
                               <h3><img src={AccessTime} alt='' className='AccessTime'/>  Approval process</h3>
                             
                               <p2 >Please allow some time for our team to review your information.</p2>
                              <h3><img src={Notification} alt='' className='Notification'/>  Notification</h3> 
                             
                              <p3 >You will receive an email notification once your shop is approved. </p3> 
                              <p4 >We appreciate your patience. If you have any urgent inquiries, feel free to contact our support team. </p4>
                            </div>

                            <div className="rc-button-container">
                            
                            <button type="submit" onClick={()=> navigate("/RegistrationPending")}>Continue</button>
                            </div>
                            
                        
                    </div>
                </div>
            </div>
            <ShopOwnerFlowHorizontalbar />
            <Footer/>
        </div>
    )
}

export default RegistrationComplete;
