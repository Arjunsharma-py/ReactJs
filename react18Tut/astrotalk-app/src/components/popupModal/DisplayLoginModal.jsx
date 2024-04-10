import React, { useState } from "react";
import DisplayImage from "./DisplayImage";
import EmailLogin from "./EmailLogin";
import { FaCheckCircle } from "react-icons/fa";
import mobile_login_image from "../../assets/mobile-login/pana.png";
import email_login_image from "../../assets/email-campaign/pana.png";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../features/user/modalSlice";
import Login from "./Login";
import Signup from "./Signup";

const DisplayLoginModal = () => {
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState({
    login: false,
    isLoggedIn: false,
  });
  const user = useSelector((state) => state.user);

  return (
    <>
      <div className="container">
        {toggle.isLoggedIn ? (
          <div className="loggedIn-container">
            <FaCheckCircle className="login-check-mark" />{" "}
            <h2>Your are logged In</h2>
          </div>
        ) : (
          <div className="display-login-window">
            {/* Closing button */}
            <div className="closing-circle">
              <button type="button" onClick={() => dispatch(closeModal())}>
                X
              </button>
            </div>

            <DisplayImage
              source={toggle.login ? mobile_login_image : email_login_image}
            />
            <div className="login-bar">
              {toggle.login ? (
                <Signup
                  toggle={() => setToggle({ ...toggle, login: !toggle.login })}
                />
              ) : (
                <Login
                  toggle={() => setToggle({ ...toggle, login: !toggle.login })}
                  // sendEmail={sendEmail}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DisplayLoginModal;
