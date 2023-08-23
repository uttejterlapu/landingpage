import React from "react";
import "./section2.css";
import Wave from "./assts/wave-2.svg";
import Wave2 from "./assts/wave-3.svg";

function Section2() {
  return (
    <div className="section2">
      <div className="img-top">
        <img className="waved" src={Wave} alt="wave"></img>
      </div>
      <div className="content-section2">
        <h1>ABOUT US</h1>
        <article>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
          laoreet suspendisse interdum consectetur libero id faucibus. In nulla
          posuere sollicitudin aliquam ultrices sagittis orci a. Odio aenean sed
          adipiscing diam donec adipiscing. Eget duis at tellus at urna
          condimentum mattis. Parturient montes nascetur ridiculus mus mauris.
          Quis risus se
        </article>
        <article>
          Orci ac auctor augue mauris augue neque gravida in fermentum. Dictum
          sit amet justo donec. Urna duis convallis convallis tellus id interdum
          velit laoreet. Sit amet volutpat consequat mauris nunc congue nisi.
          Vitae et leo duis ut
        </article>
        <div className="aboutus-img">
          <div className="img-block">
            <div className="aboutus-imgs"></div>
            <p className="name">name here</p>
            <p className="role">
              Roles here <br></br>& here
            </p>
          </div>
          <div className="img-block">
            <div className="aboutus-imgs"></div>
            <p className="name">name here</p>
            <p className="role">
              Roles here <br></br>& here
            </p>
          </div>
          <div className="img-block">
            <div className="aboutus-imgs"></div>
            <p className="name">name here</p>
            <p className="role">
              Roles here <br></br>& here
            </p>
          </div>
          <div className="img-block">
            <div className="aboutus-imgs"></div>
            <p className="name">name here</p>
            <p className="role">
              Roles here <br></br>& here
            </p>
          </div>
        </div>
      </div>
      <div className="img-bottom">
        <img src={Wave2} alt="wave"></img>
      </div>
    </div>
  );
}

export default Section2;
