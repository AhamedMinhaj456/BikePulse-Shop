import React, { useState } from 'react';
import ShopOwnerFlowHorizontalbar from "./shopOwnerFlowHorizontalbar";
import Navbar from './navbar';
import './ForgetPassword.css';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const ForgetPassword = () => {

    const navigate = useNavigate(); 

    return (
        <div>
            <Navbar />
            <div className='forget-password'>
                <div className='forget-password-left'>
                    <h2>Grow Your Business with <br/> BikePulse</h2>
                </div>
                <div className='forget-password-right'>
                    <div style={{ maxWidth: 600 }}>
                            <div className='title1'>
                                <h2>Forget Password </h2>
                               <p1> Enter your email address below and we’ll send you a link to reset your password</p1>
                            </div>

                            <div className='fields'>
                            <div className="form-control">
                                <label1>Email address</label1>
                                <input type='email' />
                                <label2>Phone number</label2>
                                <input type='tel' />
                               
                            </div>
                            
                            </div>
                          

                            
                            <div className="fp-button-container1">
                                <button type="submit"  onClick={()=> navigate("/Verification")}>Continue</button>
                            </div>                           

                            <div className="fp-button-container2">
                                <button type="submit"  onClick={()=> navigate("/ShopLogin")}>Go Back</button>
                            </div>
                      
                    </div>
                </div>
            </div>
            <ShopOwnerFlowHorizontalbar />
            <Footer/>
        </div>
    )
}

export default ForgetPassword;
