import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const WrappingBox = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <div
        className={`wrap-box ${showAnswer ? "plus" : "multiply"}`}
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <span>{question}</span>
        <FaPlus />
      </div>
      <div className={`ans-container ${showAnswer ? "" : "none"}`}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          repudiandae officia architecto voluptates molestias deserunt
          aspernatur facilis voluptas at labore. Saepe voluptates odit
          consequuntur beatae delectus quibusdam similique rem. Voluptatibus?
        </p>
      </div>
    </>
  );
};

export default WrappingBox;
