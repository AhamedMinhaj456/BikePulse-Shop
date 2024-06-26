import React, { useState, useEffect } from "react";
import ShopOwnerFlowHorizontalbar from "./shopOwnerFlowHorizontalbar";
import Navbar from "./navbar";
import "./Subscription.css";
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer";


const Subscription = () => {

  const navigate = useNavigate();
  const [selectedSubscriptionPlan, setSelectedSubscriptionPlan] = useState('')   
  const [subscriptionPlan, setSubscriptionPlan] = useState([
    {
        subscriptionPlanId: 1,
        subscriptionPlanName: "Basic",
        subscriptionPlanPrice: 59,
        subscriptionPlanDescription: "Basic subscriptionPlan description",
        features: ["one feature", "second feature", "third feature", "fourth feature"]
    },
    {
        subscriptionPlanId: 2,
        subscriptionPlanName: "Advanced",
        subscriptionPlanPrice: 69,
        subscriptionPlanDescription: "Advanced subscriptionPlan description",
        features: ["one feature", "second feature", "third feature", "fourth feature"]
    },
    {
        subscriptionPlanId: 3,
        subscriptionPlanName: "Premium",
        subscriptionPlanPrice: 99,
        subscriptionPlanDescription: "Premium subscriptionPlan description",
        features: ["one feature", "second feature", "third feature", "fourth feature"]
    }
]);

const handleSelectsubscriptionPlan = (subscriptionPlanId, subscriptionPlanName, subscriptionPlanPrice,  subscriptionPlanDescription, features) => {
  // console.log(`Selected subscriptionPlan ID: ${subscriptionPlanId}, Name: ${subscriptionPlanName}, Price: $${subscriptionPlanPrice}/Month, Description: ${subscriptionPlanDescription}`);
  // console.log("Features:");
  // features.forEach((feature, index) => {
  //     console.log(`- ${feature}`);
  // });
  
  // Update state with selected subscriptionPlan details
  setSelectedSubscriptionPlan({
      subscriptionPlanId,
      subscriptionPlanName,
      subscriptionPlanPrice,
      subscriptionPlanDescription,
      features
  });
};



  // useEffect to upreservationDate local storage when acceptedReservations changes
  useEffect(() => {
   localStorage.setItem(
      "selectedSubscriptionPlan",
      JSON.stringify(selectedSubscriptionPlan)
    );
  }, [selectedSubscriptionPlan]);

  useEffect(() => {
    // Simulating fetching shop data (replace with actual API call)
    const fetchData = async () => {
      // Replace the following line with your actual API call or data fetching logic
       const data = await fetch('http://localhost:8096/subscriptionPlan/subscriptionPlan').then((response) => response.json(
        
       ));
       setSubscriptionPlan(data);
    };
    //console.log(acceptedReservations);

    
    fetchData();
  }, []);


  

  const handleSubmit = () => {
    localStorage.setItem("subscriptionPlan", JSON.stringify(subscriptionPlan));
    navigate("/SecurePayment");
  };

  return (
    <>
        <Navbar />
        <div className="subscription">
          <div className="subscription-left">
            <h2>
              Grow Your Business with <br /> BikePulse
            </h2>
          </div>
          <div className="subscription-right">
            <div style={{ maxWidth: 800 }}>
              <div className="title1">
                <h2>Subscription Selection </h2>
              </div>
              <div className="subscription-registrationform">
            {subscriptionPlan.map(subscriptionPlan => (
                <div key={subscriptionPlan.subscriptionPlanId} className={`${subscriptionPlan.subscriptionPlanName.toLowerCase()}subscriptionPlan`}>
                    <p className="tx-1">{subscriptionPlan.subscriptionPlanName}</p>
                    <p className="tx-2">${subscriptionPlan.subscriptionPlanPrice}/Month</p>
                    <p className="tx-3">{subscriptionPlan.subscriptionPlanDescription}</p>
                    {/* <div className="UL">
                        {subscriptionPlan.features.map((feature, index) => (
                            <p key={index} className="LI">{feature}</p>
                        ))}
                    </div> */}
                    <button className="buynowbutton" onClick={() => handleSelectsubscriptionPlan(subscriptionPlan.subscriptionPlanId, subscriptionPlan.subscriptionPlanName, subscriptionPlan.subscriptionPlanPrice, subscriptionPlan.subscriptionPlanDescription,subscriptionPlan.features)}>
                        <p className="tx-4">SELECT</p>
                    </button>
                </div>
            ))}
        </div>

              <div className="button-container">
                <button
                  type="submit"
                  onClick={handleSubmit}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
        <ShopOwnerFlowHorizontalbar />
        <Footer/>
    </>
  );
};

export default Subscription;
