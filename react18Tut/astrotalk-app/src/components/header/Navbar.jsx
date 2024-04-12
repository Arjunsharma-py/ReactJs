import { useState } from "react";
import logo from "../../assets/logo.webp";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { openModal } from "../../features/user/modalSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toogleMenu, setToggleMenu] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
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
                <Link to="/">Free Kundli</Link>
              </p>
              <p>
                <Link to="/kundli-matching">Kundli Matching</Link>
              </p>
              <p>
                <Link to="/horoscope">Horoscopes</Link>
              </p>
              <p>
                <Link to="/chat-with-astrologer">Chat with Astrologer</Link>
              </p>
              <p>
                <Link to="/">Talk to Astrologer</Link>
              </p>
              <p>
                <Link to="/">Book a Pooja</Link>
              </p>
              <p>
                <Link to="/">Astromall</Link>
              </p>
              <p>
                <Link to="/">Blog</Link>
              </p>
            </div>
          </div>
          <div className="navbar-button">
            <button type="button" onClick={() => dispatch(openModal("login"))}>
              <FaUser />
              Log In
            </button>
          </div>
        </div>
      </div>
      <div className="navbar-cover"></div>
    </>
  );
};

export default Navbar;
