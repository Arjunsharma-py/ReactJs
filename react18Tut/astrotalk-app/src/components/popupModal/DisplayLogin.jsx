import React, { useState } from "react";
import DisplayImage from "./DisplayImage";
import EmailLogin from "./EmailLogin";
import { FaCheckCircle } from "react-icons/fa";
import mobile_login_image from "../../assets/mobile-login/pana.png";
import email_login_image from "../../assets/email-campaign/pana.png";
import otp_image from "../../assets/enter-otp/cuate.png";
import MobileLogin from "./MobileLogin";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../features/user/userSlice";
import { closeModal } from "../../features/user/modalSlice";
import OTPVerify from "./OTPVerify";

const DisplayLogin = () => {
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState({
    mobileLogin: false,
    optWindow: false,
    isLoggedIn: false,
  });
  const user = useSelector((state) => state.user);

  const sendEmail = async (email) => {
    //axios post request for email and get user object in response
    dispatch(
      addUser({
        id: 1,
        name: email.slice(0, email.lastIndexOf("@")),
        email: email,
      })
    );
    setTimeout(() => setToggle({ ...toggle, optWindow: true }), 3000);
  };

  const sendOtp = async (otp) => {
    //axios post request for otp
    setTimeout(() => {
      setToggle({ ...toggle, isLoggedIn: true });
      setTimeout(() => dispatch(closeModal()), 3000);
    }, 3000);
    localStorage.setItem("user", JSON.stringify(user));
  };

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
              source={
                toggle.optWindow
                  ? otp_image
                  : toggle.mobileLogin
                  ? mobile_login_image
                  : email_login_image
              }
            />
            <div className="login-bar">
              {toggle.optWindow ? (
                <OTPVerify
                  toggleLoginCred={() =>
                    setToggle({ mobileLogin: false, optWindow: false })
                  }
                  sendOtp={sendOtp}
                />
              ) : toggle.mobileLogin ? (
                <MobileLogin
                  toggle={() =>
                    setToggle({ ...toggle, mobileLogin: !toggle.mobileLogin })
                  }
                />
              ) : (
                <EmailLogin
                  toggle={() =>
                    setToggle({ ...toggle, mobileLogin: !toggle.mobileLogin })
                  }
                  sendEmail={sendEmail}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DisplayLogin;
