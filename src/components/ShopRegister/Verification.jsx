import React, { useState, useRef, useEffect } from "react";
import ShopOwnerFlowHorizontalbar from "./shopOwnerFlowHorizontalbar";
import Navbar from "./navbar";
import "./Verification.css";
import Group from "../../assets/Group.png";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addShopId } from '../../Slices/ShopSlice.js';
import { addShopStatus } from '../../Slices/ShopSlice.js';

const Verification = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [emailVerificationCode, setEmailVerificationCode] = useState(Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);

  const handleEmailVerificationCodeChange = (index, value) => {
    const newCode = [...emailVerificationCode];
    newCode[index] = value;
    setEmailVerificationCode(newCode);

    if (value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    } else if (value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const verifyEmailOTP = async () => {
    const otp = emailVerificationCode.join('');
    const emailOrPhone = JSON.parse(localStorage.getItem("formData")).email;
    console.log("Email or Phone:", emailOrPhone);
    try {
        const response = await axios.post(`http://localhost:8095/shop/verify-otp?emailOrPhone=${encodeURIComponent(emailOrPhone)}&otp=${encodeURIComponent(otp)}`);
        return response.data === 'OTP verified successfully';
    } catch (error) {
        alert('Invalid OTP');
        return false;
    }
  };


  const saveShop = async () => {
    try {
        const storedData = JSON.parse(localStorage.getItem("formData"));
        const response = await axios.post("http://localhost:8095/shop/save", {
            shopName: storedData.shopName,
            email: storedData.email,
            shopAddress: storedData.shopAddress,
            shopPassword: storedData.shopPassword,
            taxId: storedData.taxId,
            contactNumber: storedData.contactNumber,
            subscriptionPlan: storedData.subscriptionPlan,
        });
        

        if (response.data.status === true) {
          const loggedInShopId = response.data.shopId;
          const loggedInShopStatus = response.data.status;
          dispatch(addShopId(loggedInShopId));
          dispatch(addShopStatus(loggedInShopStatus));
          navigate('/RegistrationPending');
        } else if(response.data.status === false){
          alert(response.data.message);
        }
        alert("Shop Registration Successful");
    } catch (err) {
        alert(err);
    }
  };

  const handleDoneClick = async () => {
    setLoading(true);
    const isEmailOTPValid = await verifyEmailOTP();
    if (isEmailOTPValid) {
      await saveShop();
    } else {
      alert("Invalid OTP. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div>
      <Navbar />
      {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}
      <div className={`verification ${loading ? 'blurred' : ''}`}>
        <div className="verification-left">
          <h2>
            Grow Your Business with <br /> BikePulse
          </h2>
        </div>
        <div className="verification-right">
          <div style={{ maxWidth: 800 }}>
            <div className="title1">
              <img src={Group} alt="" className="Group" />
              <h2>Verification </h2>
            </div>

            <div className="verify-number">
              <br />
              <b><h4>Verify your email address</h4></b>
              <p>
                We sent you a 6-digit code to your email. Enter the code below
                to confirm your email address.{" "}
              </p>
              <div className="verification-input">
                {emailVerificationCode.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="verification-digit"
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) =>
                      handleEmailVerificationCodeChange(index, e.target.value)
                    }
                    onFocus={(e) => e.target.select()}
                  />
                ))}
              </div>
              <p>Didn’t receive a code? <a href="#">Resend</a></p>
            </div>

            <div className="veri-button-container">
              <button
                type="submit"
                onClick={handleDoneClick}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
      <ShopOwnerFlowHorizontalbar />
      <Footer/>
    </div>
  );
};

export default Verification;
