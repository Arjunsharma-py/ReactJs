import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="navbar-button">
          <select name="lang" id="lang">
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
          </select>
          <button type="button">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
