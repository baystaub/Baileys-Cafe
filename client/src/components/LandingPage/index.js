import React from "react";
import { Link } from "react-router-dom";
import '../../landing.css';

const LandingPage = () => {
  return (
    <footer className="footer">
      <Link to="/login">SIGN IN</Link>
      <Link to="/home">MENU</Link>
      <Link to="/contact">CONTACT</Link>
    </footer>
  );
};

export default LandingPage;
