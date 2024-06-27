import React, { useState, useEffect } from 'react';
import ShopOwnerFlowHorizontalbar from "./shopOwnerFlowHorizontalbar";
import Navbar from './navbar';
import './SetPassword.css';
import Validation from '../../assets/Validation.png';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Footer from './Footer';

const SetPassword = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        shopPassword: '', 
        shopPassword2: '', 
        email: '' 
    });
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState('');
    const [otpMessage, setOtpMessage] = useState('');

    useEffect(() => {
        const storedData = localStorage.getItem("formData");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setFormData(parsedData);
        }
    }, []);

    const sendOTP = async () => {
        try {
            const email = formData.email;
            await axios.post(`http://localhost:8095/shop/send-email-otp?email=${encodeURIComponent(email)}`);
            setOtpMessage("OTP sent to email: " + email);
        } catch (err) {
            setError('Failed to send OTP. Please try again.');
        }
    };

    const saveShop = async () => {
        try {
            localStorage.setItem('formData', JSON.stringify(formData));
        } catch (err) {
            setError('Failed to save shop. Please try again.');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { shopPassword, shopPassword2 } = formData;

        const lengthRegex = /^.{8,20}$/;
        const uppercaseRegex = /[A-Z]/;
        const numberRegex = /\d/;
        const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?/~\-]/;

        let errorMessage = '';

        if (shopPassword !== shopPassword2) {
            errorMessage = 'The passwords do not match!';
        } else if (!lengthRegex.test(shopPassword)) {
            errorMessage = 'Password must be between 8 and 20 characters!';
        } else if (!uppercaseRegex.test(shopPassword)) {
            errorMessage = 'Password must contain at least one uppercase letter!';
        } else if (!numberRegex.test(shopPassword)) {
            errorMessage = 'Password must contain at least one number!';
        } else if (!specialCharRegex.test(shopPassword)) {
            errorMessage = 'Password must contain at least one special character!';
        }

        if (errorMessage) {
            setError(errorMessage);
        } else {
            setError('');
            setLoading(true); 
            await saveShop();
            await sendOTP();
            setLoading(false);
            navigate("/verification");
        }
    };

    return (
        <div>
            <Navbar />
            {loading && (
                <div className="loading-overlay">
                    <div className="spinner"></div>
                </div>
            )}
            <div className={`set-password ${loading ? 'blurred' : ''}`}>
                <div className='set-password-left'>
                    <h2>Grow Your Business with <br /> BikePulse</h2>
                </div>
                <div className='set-password-right'>
                    <div style={{ maxWidth: 600 }}>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        {otpMessage && <p style={{ color: 'green' }}>{otpMessage}</p>}
                        <form autoComplete="off" onSubmit={handleSubmit}>
                            <div className='title1'>
                                <img src={Validation} alt='' className='Validation' />
                                <h2>Set Your Password </h2>
                            </div>
                            <div className='middle'>
                                <label>Password :</label>
                                <input type="password" name="shopPassword" value={formData.shopPassword} onChange={handleChange} required />
                                <br />
                                <label>Confirm Password :</label>
                                <input type="password" name="shopPassword2" value={formData.shopPassword2} onChange={handleChange} required />
                                <br />
                                <div className='list-password'>
                                    <p>Your Password must contain</p>
                                </div>
                            </div>
                            <div className="UnorderedList">
                                <p className="ListItem">Between 8 and 20 characters</p>
                                <p className="ListItem">One uppercase letter</p>
                                <p className="ListItem">One or more numbers</p>
                                <p className="ListItem">One or more specific character</p>
                            </div>
                            <div className="sp-button-container">
                                <button type="submit">Done</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ShopOwnerFlowHorizontalbar />
            <Footer />
        </div>
    );
}

export default SetPassword;
