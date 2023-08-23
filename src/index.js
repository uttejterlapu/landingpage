import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <React.StrictMode>
    <div className="navbar"><App /></div>
    <Section1 />
    <Section2 />
    <Section3 />
    </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
