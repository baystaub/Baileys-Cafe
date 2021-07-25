import React from "react";
import { Link } from "react-router-dom";
import '../../landing.css';
import cafe from "../../assets/cafe.png";

const LandingPage = () => {
  return (
    <div className="landing">
      <img src={cafe} alt="Cafe" className="landing"/>
    <footer className="footer">
      <Link to="/login">SIGN IN</Link>
      <Link to="/home">MENU</Link>
      <Link to="/contact">CONTACT</Link>
    </footer>
    </div>
  );
};

export default LandingPage;
