import React, { useState, useEffect } from 'react';
import './login.css';
import { FaUser, FaLock } from "react-icons/fa";
import LoginImage from '../assets/Login.png';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import CryptoJS from 'crypto-js';


const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        shopName: "",
        email: "",
        shopAddress: "",
        shopPassword: "",
        taxId: "",
        subscriptionPlan: "",
      });
      const [passwordData, setPasswordData] = useState("");
      
    const [email, setEmail] = useState("");
    const [shopPassword, setShopPassword] = useState("");

    useEffect(() => {
        // Retrieve form data from local storage
        const storedData = localStorage.getItem("formData");
        const hashedPassword = localStorage.getItem('hashedPassword');
        
        if (storedData) {
          // Parse the JSON string back into a JavaScript object
          const parsedData1 = JSON.parse(storedData);
          // Set the state with the retrieved data
          setFormData(parsedData1);
        }
        if (hashedPassword) {
            // Parse the JSON string back into a JavaScript object
            const parsedData2 = hashedPassword;
            // Set the state with the retrieved data
            setPasswordData(parsedData2);
          }
      }, []);
    
    async function loginShop(event) {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8095/shop/login", {
                email,
                shopPassword,
            });
            
            if (response.data.status === true) {
                alert(response.data.message);
                navigate('/home');
            } else if(response.data.status === false){
                alert(response.data.message);
            }
           
        } catch (error) {
           alert(error);
        }
    }

    // async function loginShop(event) {
    //     event.preventDefault();
    //     try {
    //         // Check if the entered email matches the stored email
    //         if (email === formData.email) {
    //             // Hash the entered password
    //             const hashedPassword = CryptoJS.SHA256(shopPassword).toString();
    //             console.log(passwordData);
    //             // Check if the hashed password matches the stored hashed password
    //             if (hashedPassword === passwordData) {
    //                 // Redirect to profile if both email and password match
    //                 window.location.href = 'http://localhost:3001/profile';
    //                 console.log(hashedPassword);
    //                 return;
    //             } else {
    //                 alert("Incorrect password");
    //                 console.log(formData.email);
    //                 // 9497fb50d891e2cd172046786c47180e240e0f038d66262f3f765f048e034ace
    //                 // 9497fb50d891e2cd172046786c47180e240e0f038d66262f3f765f048e034ace
    //                 // 9497fb50d891e2cd172046786c47180e240e0f038d66262f3f765f048e034ace
    //                 return;
    //             }
    //         } else {
    //             alert("Email not found");
    //             return;
    //         }
    //     } catch (error) {
    //         alert("An error occurred");
    //     }
    // }
    

    return (
        <div className='wrapper'>
            <form onSubmit={loginShop}>
                <img src={LoginImage} alt='' className='Login'/>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="email" placeholder='Email' required 
                        value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <FaUser  className='icon' />
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' required 
                        value={shopPassword}
                    onChange={(e) => setShopPassword(e.target.value)}
                    />
                    <FaLock className='icon'/>
                </div>

                <div className="remember-forgot">
                    <label><input type='checkbox' />Remember me</label>
                    <Link to="/ForgetPassword">Forgot password?</Link>
                </div>

                <button type='submit'>Login</button>

                <div className='register-link'>
                    <p>Don't have an account? <Link to="/">Register?</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
