import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const SendEmail = () => {
  return (
    <form className="email-container">
      <input type="email" placeholder="Email address" />
      <button type="submit" className="red-btn">
        Get Started <AiOutlineRight />
      </button>
    </form>
  );
};

export default SendEmail;
