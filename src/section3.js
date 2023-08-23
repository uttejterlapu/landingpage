import React from "react";
import "./section3.css";
import Wave from "./assts/wave-4.svg";
import Wave2 from "./assts/wave-5.svg";
import Product1 from "./assts/product1.jpeg";
import Product2 from "./assts/product2.jpeg";
import Product3 from "./assts/product3.jpeg";

function section3() {
  return (
    <div className="section3">
      <div className="img-top-sec3">
        <img src={Wave} alt="wave"></img>
      </div>
      <div className="overlay"></div>
      <div className="content-section3">
        <h1>Product</h1>
        <div className="product-img-class">
          <div className="product-img-card">
            <img className="product-imgs" src={Product1} alt="product1"></img>
            <div className="product-des">
              <p>Iot based, <br></br>bird deterrent</p>
            </div>
          </div>
          <div className="product-img-card">
            <img className="product-imgs" src={Product2} alt="product2"></img>
            <div className="product-des">
              <p>ML based Pesticide<br></br>dosage calculator</p>
            </div>
          </div>
          <div className="product-img-card">
            <img className="product-imgs" src={Product3} alt="product3"></img>
            <div className="product-des">
              <p>Field water<br></br>Management systems</p>
            </div>
          </div>
        </div>
        <h2>And many more......</h2>
      </div>
      <div className="img-bottom-sec3">
        <img src={Wave2} alt="wave"></img>
      </div>
    </div>
  );
}

export default section3;
