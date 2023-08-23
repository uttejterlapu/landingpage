import React from "react";
import "./section5.css";
import Wave from "./assts/wave-8.svg";
import Wave2 from "./assts/wave-9.svg";

function section5() {
  return (
    <div className="section5">
      <div className="img-top-sec5">
        <img src={Wave} alt="wave"></img>
      </div>
      <div className="img-bottom-sec5">
        <img src={Wave2} alt="wave"></img>
      </div>
    </div>
  );
}

export default section5;
