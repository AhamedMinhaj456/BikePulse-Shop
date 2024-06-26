import React from "react";
import ShopOwnerFlowHorizontalbar from "./shopOwnerFlowHorizontalbar";
import Navbar from "./navbar";
import "./ShopLogin.css";
import Login from "./login";
import Footer from "./Footer";

const ShopLogin = () => {
  return (
    <div>
      <Navbar />
      <div className="shoplogin">
        <div className="shoplogin-left">
          <h2>
            Grow Your Business with <br /> BikePulse
          </h2>
        </div>
        <div className="shoplogin-right">
          <Login />
        </div>
      </div>
      <ShopOwnerFlowHorizontalbar />
      <Footer/>
    </div>
  );
};

export default ShopLogin;
