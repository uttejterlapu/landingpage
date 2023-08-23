import React from "react";
import "./section4.css";
import Wave from "./assts/wave-6.svg";
import Wave2 from "./assts/wave-7.svg";
function section4() {
  return (
    <div className="section4">
      <div className="img-top-sec4">
        <img src={Wave} alt="wave"></img>
      </div>
      <div className="content-section4">
        <h1>Frequently asked questions</h1>
      </div>
      <div className="img-bottom-sec4">
        <img src={Wave2} alt="wave"></img>
      </div>
    </div>
  );
}

export default section4;
