import React from "react";

const DisplayImage = (props) => {
  return (
    <>
      <div className="display-image-container">
        {/* <div className="right-side-circle" /> */}
        <img src={props.source} alt="login-image" />
      </div>
    </>
  );
};

export default DisplayImage;
