import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <>
      <div className="bg-black height-50px">
        <div className="container ">
          <div className="row py-4 text-white ">
            <div className="col-md-3 col-sm-12">
              <h4>Questions? Call 000-800-919-1694</h4> <br />
              <p> FAQ</p>
              <p>Account</p>
              <p>Investor Relations</p>
              <p>Ways to Watch</p>
              <button type="button">*A English</button> <br />
              <br />
              <p> Netflix India</p>
            </div>
            <div className="col-md-3 col-sm-12">
              <h4 className="text-warning"></h4>
              <br /> <br /> <br />
              <p>Privacy</p>
              <p>corporate Information</p>
              <p>Speed test</p>
              <p>Only on Netflix</p>
            </div>
            <div className="col-md-3 col-sm-12">
              <h4 className="text-warning"> </h4> <br /> <br /> <br />
              <p>Help Center</p>
              <p>Media Center</p>
              <p>Jobs</p>
              <p>Terms of Use</p>
            </div>
            <div className="col-md-3 col-sm-12">
              <h4 className="text-warning"></h4> <br /> <br /> <br />
              <p>Cookie Preferences</p>
              <p>Contact Us</p>
              <p>Legal Notices</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
