import React from "react";
import "./section4.css";
import Arrow from "./assts/arrow.svg";
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
        <div className="ques">
          <div className="ques-block">
            <div className="ques-content">
              <div className="flex">
                <div className="ques-green-cir">
                  <img className="arrow-faq" src={Arrow} alt="arrow"></img>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur </p>
            </div>
          </div>

          <div className="ques-block">
            <div className="ques-content">
              <div className="flex">
                <div className="ques-green-cir">
                  <img className="arrow-faq" src={Arrow} alt="arrow"></img>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur </p>
            </div>
          </div>

          <div className="ques-block">
            <div className="ques-content">
              <div className="flex">
                <div className="ques-green-cir">
                  <img className="arrow-faq" src={Arrow} alt="arrow"></img>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur </p>
            </div>
          </div>

          <div className="ques-block">
            <div className="ques-content">
              <div className="flex">
                <div className="ques-green-cir">
                  <img className="arrow-faq" src={Arrow} alt="arrow"></img>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur </p>
            </div>
          </div>
        </div>
      </div>
      <div className="img-bottom-sec4">
        <img src={Wave2} alt="wave"></img>
      </div>
    </div>
  );
}

export default section4;
