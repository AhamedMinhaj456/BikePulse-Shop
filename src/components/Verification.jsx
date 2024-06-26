import React, { useState } from "react";
import ShopOwnerFlowHorizontalbar from "./shopOwnerFlowHorizontalbar";
import Navbar from "./navbar";
import "./Verification.css";
import Group from "../assets/Group.png";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Verification = () => {
  const navigate = useNavigate();
  const [phoneVerificationCode, setPhoneVerificationCode] = useState(
    Array(6).fill("")
  );
  const [emailVerificationCode, setEmailVerificationCode] = useState(
    Array(6).fill("")
  );

  const handlePhoneVerificationCodeChange = (index, value) => {
    const newCode = [...phoneVerificationCode];
    newCode[index] = value;
    setPhoneVerificationCode(newCode);
  };

  const handleEmailVerificationCodeChange = (index, value) => {
    const newCode = [...emailVerificationCode];
    newCode[index] = value;
    setEmailVerificationCode(newCode);
  };

  return (
    <div>
      <Navbar />
      <div className="verification">
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
              <b><h4>Verify your phone number</h4></b>
              <p>
                We sent you a 6-digit code to your mobile. Enter the code below
                to confirm your phone number.{" "}
              </p>
              <div className="verification-input">
                {phoneVerificationCode.map((digit, index) => (
                  <input
                    key={index}
                    className="verification-digit"
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) =>
                      handlePhoneVerificationCodeChange(index, e.target.value)
                    }
                  />
                ))}
              </div>
              <p>Didn’t receive a code? <a href="#">Resend</a></p>
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
                    className="verification-digit"
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) =>
                      handleEmailVerificationCodeChange(index, e.target.value)
                    }
                  />
                ))}
              </div>
              <p>Didn’t receive a code? <a href="#">Resend</a></p>
            </div>

            <div className="veri-button-container">
              <button
                type="submit"
                onClick={() =>
                    (emailVerificationCode && phoneVerificationCode) ? (
                        navigate(
                            "/RegistrationComplete",
                            localStorage.setItem(
                              "emailVerificationCode",
                              emailVerificationCode.join(''),
                            ),
                            localStorage.setItem(
                              "phoneVerificationCode",
                              phoneVerificationCode.join(''),
                            )
                          )
                    ) : (
                        navigate(
                            "/Verification",
                    ))
                  
                }
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
