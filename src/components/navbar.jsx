import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import './navbar.css';
import logoImage from '../../src/assets/bike2.png'



function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (dropdown) => {
        setShowDropdown(!showDropdown);
        setActiveDropdown(dropdown);
    };

    const closeDropdown = () => {
        setShowDropdown(false);
        setActiveDropdown(null);
    };

    return (
        <div className="navbar-container">
            <div className="navbar-logo">
                <img src={logoImage} alt="Logo" />
                <div className="brand-text brand-text-gradient">BikePulse</div>
            </div>
            <div className="navbar-links">
                <Link to="http://192.168.56.1:3000/" className="nav-link">Home</Link>

                
                <div className="dropdown" onMouseEnter={() => toggleDropdown("services")} onMouseLeave={closeDropdown}>
    <Link to="/services" className={`nav-link ${activeDropdown === "services" && 'active'}`}>Services</Link>
    {activeDropdown === "services" && (
        <div className={`dropdown-content ${showDropdown ? 'show' : ''}`}>
            <h1 className="main-title">Elevate Your Bike Experience with Our Services</h1>
            <div className="services-content">
                <div className="left-section">
                    <h2 className="subtitle">Interactive Fault Identification</h2>
                    <p className="description">Uncover bike issues effortlessly through our user-friendly interactive system. Our cutting-edge technology ensures accurate fault diagnosis, paving the way for effective solutions.</p>
                    <h2 className="subtitle">Diverse Parts Marketplace</h2>
                    <p className="description">Access a comprehensive marketplace for bike parts. Whether you're a customer seeking a specific component or a shop looking to expand your inventory, our platform connects you with quality parts.</p>
                    <h2 className="subtitle">Convenient Physical Repairs</h2>
                    <p className="description">Experience hassle-free physical repairs carried out by skilled technicians at designated service centers. Our services align with identified faults and customer preferences.</p>
                </div>
                <div className="right-section">
                    <h2 className="subtitle">Real-Time Service Tracking</h2>
                    <p className="description">Stay connected with your bike's progress in real-time. Our digital board allows customers to track the status of their service, providing transparency and peace of mind.</p>
                    <h2 className="subtitle">Supplier Integration</h2>
                    <p className="description">Local bike shops can join as suppliers, broadening the range of available parts. Collaborate with trusted suppliers to ensure a consistent supply of top-notch components.</p>
                </div>
            </div>
        </div>
    )}
</div>

                <div className="dropdown" onMouseEnter={() => toggleDropdown("technology")} onMouseLeave={closeDropdown}>
    <Link to="/technology" className={`nav-link ${activeDropdown === "technology" && 'active'}`}>Technology</Link>
    {activeDropdown === "technology" && (
        <div className={`dropdown-content ${showDropdown ? 'show' : ''}`}>
            <h1 className="main-title">Harness the Power of Technology</h1>
            <div className="technology-content">
                <div className="left-section">
                    <h2 className="subtitle">Smart Integration</h2>
                    <p className="description">Seamlessly integrate your shop into the digital era with our smart technology solutions. Connect your operations, from reservations to inventory, for a streamlined and efficient workflow. Experience the ease of technology working for you.</p>
                    <h2 className="subtitle">Automated Notifications</h2>
                    <p className="description">Keep your shop in sync with customer demands. Our automated notification system ensures that you never miss a reservation, part order, or important update. Stay informed in real-time and provide prompt, reliable services.</p>
                </div>
                <div className="right-section">
                    <h2 className="subtitle">User-Friendly Dashboard</h2>
                    <p className="description">Navigate your shop's performance effortlessly through our user-friendly dashboard. Access key metrics, track service progress, and manage your shop's profile with just a few clicks. Simplify decision-making and enhance your overall efficiency.</p>
                    <h2 className="subtitle">Innovative Fault Diagnosis</h2>
                    <p className="description">Leverage our cutting-edge technology for fault diagnosis. Our interactive system helps identify bike issues accurately, ensuring a swift and precise resolution. Stay ahead with technology that empowers your mechanics.</p>
                </div>
            </div>
        </div>
    )}
</div>



    <div className="dropdown" onMouseEnter={() => toggleDropdown("resources")} onMouseLeave={closeDropdown}>
    <Link to="/resources" className={`nav-link ${activeDropdown === "resources" && 'active'}`}>Resources</Link>
    {activeDropdown === "resources" && (
        <div className={`dropdown-content ${showDropdown ? 'show' : ''}`}>
            <h1 className="main-title">Empower Your Shop with Resources</h1>
            <div className="resources-content">
                <div className="left-section">
                    <h2 className="subtitle">Knowledge Hub</h2>
                    <p className="description">Access our extensive Knowledge Hub filled with industry insights, maintenance tips, and the latest trends. Stay ahead of the curve and enhance your expertise to better serve your customers.</p>
                    <h2 className="subtitle">Tech Support Hotline</h2>
                    <p className="description">Your success is our priority! Gain exclusive access to our tech support hotline, ensuring you have expert assistance whenever you need it. From technical glitches to strategic advice, we're just a call away to keep your shop running smoothly.</p>
                </div>
                <div className="right-section">
                    <h2 className="subtitle">Marketing Toolkit</h2>
                    <p className="description">Elevate your shop's marketing game with our toolkit. Leverage customizable templates, social media assets, and promotional materials to create eye-catching campaigns. Boost your online presence and attract more customers effortlessly.</p>
                    <h2 className="subtitle">Community Forum</h2>
                    <p className="description">Connect with fellow bike enthusiasts and shop owners through our vibrant Community Forum. Share experiences, exchange ideas, and stay updated on industry news. It's more than a forum; it's a community-driven space where everyone pedals towards success.</p>
                </div>
            </div>
        </div>
    )}
</div>



<div className="dropdown" onMouseEnter={() => toggleDropdown("pricing")} onMouseLeave={closeDropdown}>
    <Link to="/pricing" className={`nav-link ${activeDropdown === "pricing" && 'active'}`}>Pricing</Link>
    {activeDropdown === "pricing" && (
        <div className={`dropdown-content ${showDropdown ? 'show' : ''}`}>
            <h1 className="main-title">Unlock Your Shop's Potential</h1>
            <div className="pricing-content">
                <div className="left-section">
                    <h2 className="subtitle">Shop Registration</h2>
                    <p className="description">Get your shop on the fast track to success! For a one-time registration fee, showcase your services on our vibrant platform and join a community of bike enthusiasts. It's the key to reaching more customers and boosting your business.</p>
                </div>
                <div className="right-section">
                    <h2 className="subtitle">Subscription Plans</h2>
                    <p className="description">Choose the subscription plan that suits your shop's needs. We offer flexible plans tailored for every shop size, ensuring you get the most out of our platform. Whether you're a small repair hub or a bustling bike emporium, there's a plan just for you.
                        <br/><br/>
                        <ul className="plan-list">
        <li>Basic Plan: Ideal for small shops aiming to increase visibility.</li>
        <li>Pro Plan: Perfect for growing businesses looking to expand their customer base.</li>
        <li>Premium Plan: Unlock premium features for large-scale shops seeking maximum exposure.</li>
    </ul>Select your plan, elevate your shop's presence, and let the pedal-powered success begin!
                    </p>
                </div>
            </div>
        </div>
 

                    )}
                </div>
                {/*<Link to="/ShopLogin" className="login-button">LOGIN</Link>*/}
            </div>
        </div>
    );
}

export default Navbar;
