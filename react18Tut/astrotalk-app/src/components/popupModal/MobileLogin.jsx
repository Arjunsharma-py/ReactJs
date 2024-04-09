import React from "react";
import email_icon from "../../assets/dashicons_email-alt2.png";

const MobileLogin = ({ toggle }) => {
  return (
    <div className="login-bar-container">
      <div className="login-bar-headings">
        <h1>Hi Welcome!</h1>
        <h3>Submit your mobile number</h3>
      </div>
      <div className="login-signup-line">
        <div className="line-login" />
        <h5>Log in or Sign up</h5>
        <div className="line-login" />
      </div>
      <div className="mobile-login-form">
        <form action="" className="mobile-form-container">
          <input type="text" placeholder="Enter mobile number" />
          <button type="submit">Send OTP</button>
        </form>
      </div>
      <div className="login-signup-line">
        <div className="line-or" />
        <h5>Or</h5>
        <div className="line-or" />
      </div>
      <button type="button" className="continue-button" onClick={toggle}>
        <img src={email_icon} alt="icon" />
        Continue with Email id
      </button>
      <div className="terms-conditions">
        <h6>
          By signing up, you agree to our <a href="">Terms of use</a> and{" "}
          <a href="">Privacy Policy</a>
        </h6>
      </div>
    </div>
  );
};

export default MobileLogin;
