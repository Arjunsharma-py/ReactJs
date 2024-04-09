import React, { useRef } from "react";
import mobile_icon from "../../assets/akar-icons_mobile-device.png";

const EmailLogin = ({ toggle, sendEmail }) => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(inputRef.current.value);
  };

  return (
    <div className="login-bar-container">
      <div className="login-bar-headings">
        <h1>Hi Welcome!</h1>
        <h3>Submit your Email Id</h3>
      </div>
      <div className="login-signup-line">
        <div className="line-login" />
        <h5>Log in or Sign up</h5>
        <div className="line-login" />
      </div>
      <div className="mobile-login-form">
        <form onSubmit={handleSubmit} className="mobile-form-container">
          <input
            type="email"
            name="email"
            placeholder="Enter Email Id"
            ref={inputRef}
          />
          <button type="submit">Send OTP</button>
        </form>
      </div>
      <div className="login-signup-line">
        <div className="line-or" />
        <h5>Or</h5>
        <div className="line-or" />
      </div>
      <button type="button" className="continue-button" onClick={toggle}>
        <img src={mobile_icon} alt="icon" />
        Continue with mobile number
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

export default EmailLogin;
