import React, { useRef } from "react";
import apiClient from "../../services/api-client";
import axios from "axios";

const Signup = ({ toggle }) => {
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // sendEmail(inputRef.current.value);

    // axios
    //   .post("http://127.0.0.1/signup", {
    //     username: firstnameRef.current.value + " " + lastnameRef.current.value,
    //     email: emailRef.current.value,
    //     password: passwordRef.current.value,
    //   })
    fetch("http://127.0.0.1/signup", {
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: firstnameRef.current.value + " " + lastnameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    console.log(
      firstnameRef.current.value +
        " " +
        lastnameRef.current.value +
        " " +
        emailRef.current.value +
        " " +
        passwordRef.current.value
    );
  };

  return (
    <>
      <div className="login-bar-container">
        <div className="login-bar-headings">
          <h1>Hi Welcome!</h1>
          <h3>Create your account</h3>
        </div>
        {/* <div className="login-signup-line">
          <div className="line-login" />
          <h5>Log in or Sign up</h5>
          <div className="line-login" />
        </div> */}
        <div className="mobile-login-form">
          <form onSubmit={handleSubmit} className="mobile-form-container">
            <div className="name-field">
              <input
                type="text"
                name="firstname"
                placeholder="Firstname"
                ref={firstnameRef}
              />
              <input
                type="text"
                name="Lastname"
                placeholder="Lastname"
                ref={lastnameRef}
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Enter Email Id"
              ref={emailRef}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              ref={passwordRef}
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="login-signup-line">
          <div className="line-or" />
          <h5>Or</h5>
          <div className="line-or" />
        </div>
        <div className="terms-conditions">
          <h6>
            already have an account?{" "}
            <button type="button" onClick={toggle}>
              Log In
            </button>
          </h6>
        </div>

        <div className="terms-conditions">
          <h6>
            By signing up, you agree to our <a href="">Terms of use</a> and{" "}
            <a href="">Privacy Policy</a>
          </h6>
        </div>
      </div>
    </>
  );
};

export default Signup;
