import React, { useState, useEffect } from 'react';
import ShopOwnerFlowHorizontalbar from "./shopOwnerFlowHorizontalbar";
import Navbar from './navbar';
import './Congratulations.css';
import VerifiedAccount from '../assets/VerifiedAccount.png';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Congratulations = () => {
   
    const navigate = useNavigate();
  
    const [formData, setFormData] = useState({
        shopName: "",
        email: "",
        shopAddress: "",
        shopPassword: "",
        taxId: "",
        subscriptionPlan: "",
      });
    
      useEffect(() => {
        // Retrieve form data from local storage
        const storedData = localStorage.getItem("formData");
        
        if (storedData) {
          // Parse the JSON string back into a JavaScript object
          const parsedData = JSON.parse(storedData);
          // Set the state with the retrieved data
          setFormData(parsedData);
          console.log(formData.shopName);
        }
      }, []); 

    return (
        <div>
            <Navbar />
            <div className='congrat-1'>
                <div className='congrat-1-left'>
                    <h2>Grow Your Business with <br/> BikePulse</h2>
                </div>
                <div className='congrat-1-right'>
                    <div style={{ maxWidth: 800 }}> 
                                       
                            <div className='tt'>
                            <img src={VerifiedAccount} alt='' className='VerifiedAccount'/>
                                <h2>Congratulations </h2>
                                <h4>Your Shop Registration is Approved. </h4>
                            </div>
                            <div className='part'>
                               <p1>Dear {formData.shopName},</p1> 
                               
                             
                               <p2 >We're thrilled to inform you that your shop registration at BikePulse has been approved.
                                 Welcome aboard! Your commitment to quality bike services aligns perfectly with our platform.
                                 To complete the registration process, please proceed with the payment of the registration fee.
                                  Click the button below to make the payment securely.Thank you for choosing BikePulse.
                                   We look forward to a successful partnership!</p2>
                             
                             
                              <p3 >Best Regards. </p3> 
                              <p4 >BikePulse Team. </p4>
                            </div>

                            <div className="congratulations-button-container">
                                <button type="submit" onClick={()=> navigate("/Subscription")}>Complete Registration Payment</button>
                            </div>
                        
                    </div>
                </div>
            </div>
            <ShopOwnerFlowHorizontalbar />
            <Footer/>
        </div>
    )
}

export default Congratulations;

