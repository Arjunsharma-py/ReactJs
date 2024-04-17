import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const SigninPage = () => {
  return (
    <>
      <Header />
      <div className="bg-img-signin bg-img-common">
        <div className="connect-container">
          <h1>Connect With Astrologer</h1>
          <p>
            Unveiling the cosmic mysteries, guiding you through lifes journey
            with precision and insight.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SigninPage;
