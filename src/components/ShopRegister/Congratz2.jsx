import React, { useEffect, useState } from "react";
import ShopOwnerFlowHorizontalbar from "./shopOwnerFlowHorizontalbar";
import Navbar from "./navbar";
import "./Congratz2.css";
import Logo from "../../assets/Logo-1.png";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Congratz2 = () => {
  const navigate = useNavigate();

  const [selectedSubscriptionPlan, setSelectedSubscriptionPlan] = useState(
    {
      subscriptionPlanId: 1,
      subscriptionPlanName: "Basic",
      subscriptionPlanPrice: 59,
      subscriptionPlanDescription: "Basic subscriptionPlan description",
      features: ["one feature", "second feature", "third feature", "fourth feature"]
  }
  );

  const transactionIdArr = [1, 2];

  useEffect(() => {
    // Retrieve form data from local storage
    const storedData = localStorage.getItem("selectedSubscriptionPlan");
    
    if (storedData) {
      // Parse the JSON string back into a JavaScript object
      const parsedData = JSON.parse(storedData);
      // Set the state with the retrieved data
      setSelectedSubscriptionPlan(parsedData);
    }
  }, []);

  const updateSubscriptionPlan = (newValue) => {
    setSelectedSubscriptionPlan(newValue); // Function to update state variable
  };

  return (
    <div>
      <Navbar />
      <div className="congratz2">
        <div className="congratz2-left">
          <h2>
            Grow Your Business with <br /> BikePulse
          </h2>
        </div>
        <div className="congratz2-right">
          <div style={{ maxWidth: 800 }}>
            <div className="descriptions">
              <img src={Logo} alt="" className="Logo" />
              <h2>Congratulations !!! </h2>
            </div>
            <div className="parts-des">
              <p1>Your registration fee has been successfully processed.</p1>
              {/* <p2>Transaction Details :</p2> */}
              {/* <div className="UnorderedList1">
                <p className="ListItem">
                  Transaction ID :{" "}
                  {transactionIdArr[transactionIdArr.length - 1]}
                </p>
                <p className="ListItem">
                  Amount Paid : {selectedSubscriptionPlan.subscriptionPlanPrice}
                </p>
                <p className="ListItem">Payment Method : {"Card"}</p>
              </div> */}
              <p3>
                Thank you for completing the payment. Your shop registration is
                now complete. Our team will review your details, and you will
                receive a confirmation once your shop is officially live on our
                platform. If you have any questions, feel free to contact our
                support team.{" "}
              </p3>
            </div>

            <div className="congratz-button-container">
              <button type="submit" onClick={() => navigate("/shop-setting-window")}>
                Continue
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

export default Congratz2;
