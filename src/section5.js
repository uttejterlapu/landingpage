import React from "react";
import "./section5.css";
import Wave from "./assts/wave-8.svg";
import Wave2 from "./assts/wave-9.svg";
import Leaves from "./assts/section5.jpeg"
import Fb from "./assts/fb.svg"
import Insta from "./assts/insta.svg"
import Twitter from "./assts/twitter.svg"

function section5() {
  return (
    <div className="section5">
      <div className="img-top-sec5">
        <img src={Wave} alt="wave"></img>
      </div>
      <div className="content-section5">
        <div className="block1">
            <img className="leaves" src={Leaves} alt="leaves"></img>
        </div>
        <div className="block2">
            <h1>content us</h1>
            <form className="form-contact-us">
                <label>Full Name</label>
                <input className="form-input" type='text'/>
                <label>E-mail</label>
                <input className="form-input" type='email'/>
                <label>Full Message</label>
                <input className="form-input" type='text'/>
                <button className="btn-submit" type="submit">Contact Us</button>
            </form>
        </div>
        <div className="block3">
            <label><b>Contact</b></label>
            <p>hi@green.com</p>
            <label><b>Based In</b></label>
            <p>Visakhapatnam,<br></br>Andhra Pradesh</p>
            <div className="social-links">
                <ul className="social-list">
                    <li className="social-item"><a href="https:www.github.com/uttejterlapu"><img className="social-icon" src={Fb} alt="social-icons"></img></a></li>
                    <li className="social-item"><a href="https:www.github.com/uttejterlapu"><img className="social-icon" src={Insta} alt="social-icons"></img></a></li>
                    <li className="social-item"><a href="https:www.github.com/uttejterlapu"><img className="socail-icon" src={Twitter} alt="socail-icons"></img></a></li>
                </ul>
            </div>
        </div>
      </div>
      <div className="img-bottom-sec5">
        <img src={Wave2} alt="wave"></img>
      </div>
    </div>
  );
}

export default section5;
