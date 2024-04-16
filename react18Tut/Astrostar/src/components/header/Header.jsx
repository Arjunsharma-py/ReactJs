import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-links">
          <div className="header-logo">
            <Link to="/">AstroStar</Link>
          </div>
          <div className="navbar">
            <select name="language" id="lang">
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </select>
            <button type="button" className="red-btn">
              Sign In
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
