import React, { useRef, useState } from "react";
import OTPInput from "react-otp-input";
import email_icon from "../../assets/dashicons_email-alt2.png";

const OTPVerify = ({ toggleLoginCred, sendOtp }) => {
  const [otp, setOTP] = useState(["", "", "", ""]);
  const [error, setError] = useState("");

  const handleOtpSubmit = () => {
    let otpValue = otp.join("");
    if (otpValue.length < 4) {
      setError("invalid otp");
      return;
    }
    sendOtp(otpValue);
    setError("");
  };

  return (
    <div className="login-bar-container">
      <div className="login-bar-headings">
        <h1>OTP Verification</h1>
        <h3>A 4 digit code has been sent to Email Id</h3>
      </div>

      <div className="otp-input-container">
        <OTPInput
          value={otp.join("")}
          onChange={(value) => setOTP(value.split(""))}
          numInputs={4}
          isInputNum
          inputStyle={{
            width: "3rem",
            height: "3rem",
            margin: "0.5rem 0.4rem",
            fontSize: "1.5rem",
            borderRadius: "4px",
            border: "1px solid #ced4da",
          }}
          renderInput={(inputProps, index) => (
            <input {...inputProps} key={index} />
          )}
        />
        <div className="error">{error}</div>
        <button type="button" onClick={handleOtpSubmit}>
          Verify OTP
        </button>
      </div>
      <div className="terms-conditions">
        <h6>
          Didn't recieved a code? <button type="button">Resend</button>
        </h6>
      </div>
      <button
        type="button"
        className="continue-button"
        onClick={toggleLoginCred}
      >
        <img src={email_icon} alt="icon" />
        Change Email id
      </button>
    </div>
  );
};

export default OTPVerify;
