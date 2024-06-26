import React, { useState, useEffect } from 'react';
import ShopOwnerFlowHorizontalbar from "./shopOwnerFlowHorizontalbar";
import Navbar from './navbar';
import './SetPassword.css';
import Validation from '../assets/Validation.png';
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import axios from "axios";
import Footer from './Footer';

const SetPassword = () => {
    // const [formData, setFormData] = useState({
    //     shopPassword: '', // Changed from password to shopPassword
    //     shopPassword2: '', // Changed from password2 to shopPassword2
    // });

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

    const [formData, setFormData] = useState({
        shopName: "",
        email: "",
        shopAddress: "",
        shopPassword: "",
        taxId: "",
        contactNumber:"",
        subscriptionPlan: "",
      });

      async function saveShop(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8095/shop/save", {
                shopName: formData.shopName,
                email: formData.email,
                shopAddress: formData.shopAddress,
                shopPassword: formData.shopPassword,
                taxId: formData.taxId,
                contactNumber: formData.contactNumber,
                subscriptionPlan: formData.subscriptionPlan,
            });
          alert("shop Registration Successful");
          //navigate("/shoplogin");

        } catch (err) {
          alert(err);
        }
      }

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { shopPassword, shopPassword2 } = formData;
    
        // Regular expressions for password validation
        const lengthRegex = /^.{8,20}$/;
        const uppercaseRegex = /[A-Z]/;
        const numberRegex = /\d/;
        const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?/~\-]/;
    
        let errorMessage = '';
    
        // Check if passwords match
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
            // Hash the password using SHA-256
            const hashedPassword = CryptoJS.SHA256(shopPassword).toString();
            // Store the hashed password in localStorage
            localStorage.setItem('hashedShopPassword', hashedPassword); // Changed from hashedPassword to hashedShopPassword
            //console.log('Form submitted:', formData);
            saveShop(e);
            navigate("/Verification"); // Navigate only if passwords match and meet requirements
           // window.location.href = 'http://localhost:3002/';
        }
    };

    const navigate = useNavigate(); 

    return (
        <div>
            <Navbar />
            <div className='set-password'>
                <div className='set-password-left'>
                    <h2>Grow Your Business with <br/> BikePulse</h2>
                </div>
                <div className='set-password-right'>
                    <div style={{ maxWidth: 600 }}>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <form autoComplete="off" onSubmit={handleSubmit}>
                            <div className='title1'>
                            <img src={Validation} alt='' className='Validation'/>
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
            <Footer/>
        </div>
    )
}

export default SetPassword;
