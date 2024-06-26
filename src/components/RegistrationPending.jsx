import React, { useState, useEffect } from 'react';
import ShopOwnerFlowHorizontalbar from "./shopOwnerFlowHorizontalbar";
import Navbar from './navbar';
import './RegistrationPending.css';
import File from '../assets/File.png';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const RegistrationPending = () => {
   
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        shopName: "",
        email: "",
        shopAddress: "",
        shopPassword: "",
        taxId: "",
        contactNumber:"",
        subscriptionPlan: "",
      });

      const [Paraghraph,setParagraph] = useState("")
      const [pendingParaghraph,setPendingParagraph] = useState({
        pending: "Thank you for your interest in joining BikePulse. We have received your shop registration and it is currently pending review. Our team is carefully assessing your application to ensure it meets our standards and guidelines. We appreciate your patience during this process. If you have any questions or would like further information, please feel free to reach out to our support team. Thank you for considering BikePulse.",
        approved: "Congratulations! Your shop registration with BikePulse has been approved. We are thrilled to have you as part of our community. You can now enjoy the benefits of being a registered member and start exploring all that BikePulse has to offer. If you have any questions or need assistance, our support team is here to help. Thank you for choosing BikePulse, and we look forward to seeing your shop thrive on our platform.",
        rejected: "Thank you for your interest in joining BikePulse. After careful review, we regret to inform you that your shop registration has not been approved at this time. We appreciate your application and encourage you to review our registration guidelines. If you have any questions or would like further clarification, feel free to reach out to our support team.Thank you for considering BikePulse.",
             
      })

    
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

      // active status

    const [shopId, setShopId] = useState('4');
    const [approvedStatus, setApprovedStatus] = useState('');
    const [currentStatus, setCurrentStatus] = useState({approvedStatus: '' });
    

    useEffect(() => {
        if (shopId) {
            fetchUserStatus();
        }
    }, [shopId]);

    const fetchUserStatus = async () => {
        try {
            const response = await axios.get(`http://localhost:8095/shop/${shopId}`);
            const approvedStatus = response.data.approvedStatus;
            
            setApprovedStatus(approvedStatus);  
            setCurrentStatus({ approvedStatus });
           
    
            switch (approvedStatus) {
                case "pending":
                    setParagraph(pendingParaghraph.pending);
                    break;
                case "approved":
                    setParagraph(pendingParaghraph.approved);
                    break;
                case "rejected":
                    setParagraph(pendingParaghraph.rejected);
                    break;
                default:
                    console.error("Unknown approvedStatus:", approvedStatus);
            }
        } catch (error) {
            console.error("Error fetching user status:", error);
        }
    };

    const handleClick = () => {
        switch (approvedStatus) {
            case "pending":
                navigate('/home');
                break;
            case "approved":
                navigate("/Congratulations");
                break;
            case "rejected":
                navigate('/home');
                break;
            default:
                console.error("Unknown approvedStatus:", approvedStatus);
        }
    };
    
    
    return (
        <div>
            <Navbar />
            <div className='Reg-1'>
                <div className='Reg-1-left'>
                    <h2>Grow Your Business with <br/> BikePulse</h2>
                </div>
                <div className='Reg-1-right'>
                    <div style={{ maxWidth: 800 }}> 
                                       
                            <div className='ttt'>
                            <img src={File} alt='' className='File'/>
                                <h2>Registration Pending Review </h2>
                                <h4>Shop Registration is {approvedStatus}. </h4>
                            </div>
                            <div className='parts'>
                               <p1>Dear {formData.shopName},</p1> 
                               
                             
                               <p2 >{Paraghraph}</p2>
                             
                             
                              <p3 >Best Regards. </p3> 
                              <p4 >BikePulse Team. </p4>
                            </div>

                            <div className="rp-button-container">
                                <button type="submit" onClick={handleClick}>Continue</button>
                            </div>
                        
                    </div>
                </div>
            </div>
            <ShopOwnerFlowHorizontalbar />
            <Footer/>
        </div>
    )
}

export default RegistrationPending;

