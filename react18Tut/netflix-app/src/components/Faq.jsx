import React from "react";

const Faq = () => {
  return (
    <>
      <div className="main_header">
        <nav>
          <p className="m"> Frequently Asked Questions </p>
        </nav>
        <div className="n">
          <br />
          <p className="p"> What is Netflix? </p>
          <i className="fa-light fa-plus"></i>
        </div>
        <div className="n">
          <br />
          <p className="p"> How much does Netflix cost? </p>
          <i className="fa-light fa-plus"></i>
        </div>
        <div className="n">
          <br />
          <p className="p"> Where can I watch? </p>
          <i className="fa-light fa-plus"></i>
        </div>
        <div className="n">
          <br />
          <p className="p"> How do I cancel? </p>
          <i className="fa-light fa-plus"></i>
        </div>
        <div className="n">
          <br />
          <p className="p"> Is Netflix good for kids? </p>
          <i className="fa-light fa-plus"></i>
        </div>

        <button className="r" type="submit >">
          Finish Sign Up{" "}
        </button>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default Faq;
