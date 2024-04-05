import React from "react";

const Section = () => {
  return (
    <>
      <div className="section-bg">
        <div className="bg-image"></div>
      </div>
      <div className="welcome-page">
        <div className="intro-elements">
          <h1>Unlimited movies, TV shows and more</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <h4>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>
          <form action="/" className="email-container">
            <input type="email" placeholder="Email address" />
            <button>Get Started ></button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Section;
