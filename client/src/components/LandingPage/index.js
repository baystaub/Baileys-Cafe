import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "../../landing.css";
import cafe from "../../assets/cafe.png";

const LandingPage = () => {
  if (Auth.loggedIn()) {
    return (
      <div className="landingHome">
        <img src={cafe} alt="Cafe" className="landing" />
        <footer className="footer">
          <Link to="/orderhistory">ORDER HISTORY</Link>
          <Link to="/home">MENU</Link>
          <a href="mailto:manager@email.com">CONTACT</a>
        </footer>
      </div>
    );
  } else {
    return (
      <div className="landingHome">
        <img src={cafe} alt="Cafe" className="landing" />
        <footer className="footer">
          <Link to="/login">LOGIN</Link>
          <Link to="/home">MENU</Link>
          <a href="mailto:manager@email.com">CONTACT</a>
        </footer>
      </div>
    );
  }
};

export default LandingPage;
