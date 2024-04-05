import { useState } from "react";
import logo from "../assets/logo.webp";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const [toogleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar-bg">
      <div className="navbar">
        <div className="navbar-links">
          <div className="navbar-links-logo">
            <div className="navbar-menu">
              {toogleMenu ? (
                <button
                  className="navbar-menu-button"
                  type="button"
                  onClick={() => setToggleMenu(false)}
                >
                  <RiCloseLine color="white" size={27} />
                </button>
              ) : (
                <button
                  className="navbar-menu-button"
                  type="button"
                  onClick={() => setToggleMenu(true)}
                >
                  <RiMenu3Line color="white" size={27} />
                </button>
              )}

              {toogleMenu && (
                <div className="navbar-menu-container">
                  <div className="navbar-menu-links">
                    <p>
                      <a href="/">Services</a>
                    </p>
                    <p>
                      <a href="/">About</a>
                    </p>
                    <p>
                      <a href="/">Contact</a>
                    </p>
                  </div>
                  <div className="navbar-menu-container-button">
                    <button type="button">Log In</button>
                  </div>
                </div>
              )}
            </div>
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="navbar-links-container">
            <p>
              <a href="/">Free Kundli</a>
            </p>
            <p>
              <a href="/">Kundli Matching</a>
            </p>
            <p>
              <a href="/">Horoscopes</a>
            </p>
            <p>
              <a href="/">Chat with Astrologer</a>
            </p>
            <p>
              <a href="/">Talk to Astrologer</a>
            </p>
            <p>
              <a href="/">Book a Pooja</a>
            </p>
            <p>
              <a href="/">Astromall</a>
            </p>
            <p>
              <a href="/">Blog</a>
            </p>
          </div>
        </div>
        <div className="navbar-button">
          <button type="button">
            <FaUser />
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
