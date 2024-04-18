import React, { useState } from "react";
import Characters from "./Characters";
import Cast from "./Cast";

const SwitchBox = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <>
      <div className="switch-box">
        <div className="tabs">
          <button
            type="button"
            className={activeTab == "tab1" ? "active" : ""}
            onClick={() => setActiveTab("tab1")}
          >
            Scenes
          </button>
          <button
            type="button"
            className={activeTab == "tab2" ? "active" : ""}
            onClick={() => setActiveTab("tab2")}
          >
            Cast
          </button>
        </div>
        {activeTab == "tab1" ? <Characters /> : <Cast />}
      </div>
    </>
  );
};

export default SwitchBox;
