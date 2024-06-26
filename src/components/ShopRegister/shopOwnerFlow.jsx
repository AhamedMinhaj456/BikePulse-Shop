import React, { useState } from "react";
import "./shopOwnerFlow.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ShopOwnerFlow = () => {
  const [shopName, setShopName] = useState("");
  const [email, setEmail] = useState("");
  const [shopAddress, setShopAddress] = useState("");
  const [shopPassword, setShopPasswrod] = useState("");
  const [taxId, setTaxId] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [subscriptionPlan, setCustomerSubscriptionPlan] = useState("");

  const [editing, setEditing] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function saveShop(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8095/shop/save", {
        shopName: shopName,
        email: email,
        shopAddress: shopAddress,
        shopPassword: shopPassword,
        taxId: taxId,
        contactNumber: contactNumber,
        subscriptionPlan: subscriptionPlan,
      });
      alert("shop Registration Successful");
      navigate("/shoplogin");
    } catch (err) {
      alert(err);
    }
  }

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    //saveShop(e);
    saveFormDataToLocalStorage();
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const navigate = useNavigate();

  const saveFormDataToLocalStorage = () => {
    const formData = {
      shopName,
      email,
      shopAddress,
      shopPassword,
      taxId,
      contactNumber,
      subscriptionPlan,
    };
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  return (
    <div className="shopOwnerFlow">
      <div className="shopOwnerFlow-left">
        <h2>
          Grow Your Business with <br /> BikePulse
        </h2>
      </div>
      <div className="shopOwnerFlow-right">
        <form onSubmit={handleSubmit}>
          <h1>Get Started</h1>
          <p>Already have an account? <a href="http://localhost:3000/ShopLogin">Click here</a></p>
          <label>Shop Name</label>
          <input
            type="text"
            name="shopName"
            placeholder="Name"
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
            required
            disabled={submitted && !editing}
          />
          {/* <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            // value={formData.lastName}
            //onChange={handleChange}
            // required
            disabled
            //={submitted && !editing}
          /> */}
          <label>Shop Address</label>
          <input
            type="text"
            name="shopAddress"
            placeholder="Shop Name, Street, City"
            value={shopAddress}
            onChange={(e) => setShopAddress(e.target.value)}
            required
            disabled={submitted && !editing}
          />
          {/*<label>Subscription Plan</label>
          <input
            type="text"
            name="subscriptionPlan"
            placeholder="Basic, Advanced, Premium"
            value={subscriptionPlan}
            onChange={(e) => setCustomerSubscriptionPlan(e.target.value)}
            required
            disabled={submitted && !editing}
        />
          <label>Password</label>
          <input
            type="password"
            name="shopPassword"
            placeholder="*********"
            value={shopPassword}
            onChange={(e) => setShopPasswrod(e.target.value)}
            required
            disabled={submitted && !editing}
        />*/}
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="youremail@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={submitted && !editing}
          />
           <label>Mobile Number</label>
          <input
            type="tel"
            name="contactNumber"
            placeholder="+94 _ _ _ _ _ _ _ _ _"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
            disabled={submitted && !editing}
          />
          <label>Tax ID</label>
          <input
            type="text"
            name="taxID"
            placeholder="Enter your tax ID"
            value={taxId}
            onChange={(e) => setTaxId(e.target.value)}
            required
            disabled={submitted && !editing}
          />
         
          <p>
            By clicking "Submit", you agree to BikePulse Merchant Terms and
            Conditions and acknowledge you have read the Privacy Notice.
          </p>
          <br />
          <div className="btn-container">
            {!submitted && (
              <button type="submit" className="btn dark-btn">
                Submit
              </button>
            )}
            {submitted && (
              <>
                <button
                  type="button"
                  className="btn dark-btn"
                  onClick={handleEdit}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn dark-btn"
                  onClick={() => navigate("/SetPassword")}
                >
                  Done
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShopOwnerFlow;
