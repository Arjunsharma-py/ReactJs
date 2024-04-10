import React, { useRef } from "react";

const Login = ({ toggle }) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // apiClient.post("/login" ,{
    //   email: emailRef,
    //   password: passwordRef
    // }).then().catch()

    console.log(emailRef.current.value + " " + passwordRef.current.value);
  };

  return (
    <>
      <div className="login-bar-container">
        <div className="login-bar-headings">
          <h1>Hi Welcome Back!</h1>
          <h3>Login to access more!</h3>
        </div>
        {/* <div className="login-signup-line">
          <div className="line-login" />
          <h5>Log in or Sign up</h5>
          <div className="line-login" />
        </div> */}
        <div className="mobile-login-form">
          <form onSubmit={handleSubmit} className="mobile-form-container">
            <input
              type="email"
              name="email"
              placeholder="Enter Email Id"
              ref={emailRef}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              ref={passwordRef}
            />
            <button type="submit">Log In</button>
          </form>
        </div>
        <div className="login-signup-line">
          <div className="line-or" />
          <h5>Or</h5>
          <div className="line-or" />
        </div>
        {/* <button type="button" className="continue-button" onClick={toggle}>
          Continue with mobile number
        </button> */}
        <div className="terms-conditions">
          <h6>
            Didn't have account?{" "}
            <button type="button" onClick={toggle}>
              Sign Up
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

export default Login;
