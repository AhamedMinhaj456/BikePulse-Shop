import React, { useState } from 'react';
import ShopOwnerFlowHorizontalbar from "./shopOwnerFlowHorizontalbar";
import Navbar from './navbar';
import './SecurePayment.css';
import CardSecurity from '../assets/CardSecurity.png';
import Visa from '../assets/Visa.png';
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import Footer from './Footer';

const SecurePayment = () => {
    const [cardData, setCardData] = useState({
        cardNumber: '',
        cardHolderName: '',
        cvc: '',
        expireDate: '',
    });

    const [error, setError] = useState('');

    const navigate = useNavigate(); 

    const handleChange = (e) => {
        setCardData({ ...cardData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if any field is empty
        if (!cardData.cardNumber || !cardData.cardHolderName || !cardData.cvc || !cardData.expireDate) {
            setError('Please fill in all fields.');
            return;
        }

        // Check card number length
        if (cardData.cardNumber.length !== 16) {
            setError('Card number must have exactly 16 digits.');
            return;
        }

        // Check CVC length
        if (cardData.cvc.length !== 3) {
            setError('CVC must have exactly 3 digits.');
            return;
        }

        // Hash the CVC input using SHA-256
        const hashedCVC = CryptoJS.SHA256(cardData.cvc).toString();

        // Store the card details in localStorage, with hashed CVC
        localStorage.setItem('cardData', JSON.stringify({
            cardNumber: cardData.cardNumber,
            cardHolderName: cardData.cardHolderName,
            cvc: hashedCVC, // Store hashed CVC
            expireDate: cardData.expireDate,
        }));

        // Navigate to the next page
        navigate("/Congratz2");
    };

    return (
        <div>
            <Navbar />
            <div className='secure-payment'>
                <div className='secure-payment-left'>
                    <h2>Grow Your Business with <br/> BikePulse</h2>
                </div>
                <div className='secure-payment-right'>
                    <div style={{ maxWidth: 800 }}>
                        <div className='title1'>
                            <img src={CardSecurity} alt='' className='CardSecurity'/>
                            <h2>Secure Registration Payment </h2>
                        </div>
                        <div className='fields'>
                            <p>Your payment information is safe with us.</p>
                            <img src={Visa} alt='' className='Visa'/>
                            <div className="securepayment-form-control">
                                <label>Card number</label>
                                <input type='number' name="cardNumber" onChange={handleChange} minLength="16" maxLength="16" required />
                                <label>Cardholder's name</label>
                                <input type='text' name="cardHolderName" onChange={handleChange} required />
                                <label>CVC</label>
                                <input type='number' name="cvc" onChange={handleChange} minLength="3" maxLength="3" required />
                                <label>Expire Month/Year</label>
                                <input type='month' name="expireDate" onChange={handleChange} required />
                            </div>
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <div className='last-para'>
                            <p>By clicking "Pay Now," you agree to the terms and conditions. Your payment information is
                             secure and will not be stored.</p>
                        </div>
                        <div className="securepayment-button-container">
                            <button type="submit" onClick={handleSubmit}>Pay Now</button>
                        </div>                           
                    </div>
                </div>
            </div>
            <ShopOwnerFlowHorizontalbar />
            <Footer/>
        </div>
    )
}

export default SecurePayment;
