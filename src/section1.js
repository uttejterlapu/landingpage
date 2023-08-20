import "./section1.css";
import Wave from "./assts/wave-1.svg";
import Circle from "./assts/circle.svg";
import Arrow from "./assts/arrow.svg";

function section1() {
  return (
    <div className="section1">
      <div className="overlay"></div>
      <div className="main">
        <p className="heading">
          We Help <br></br>Spread <span>Green!</span>
        </p>
        <p className="content">
          Equipped with the impeccable power of IoT & Machine Learning, We
          empower Farmers & Agriculturists by providing smart and innovative
          solutions.
        </p>

        <div className="btn">
          <button className="btn-b">
            Know More!
            <div className="image-container">
              <img className="arrow" src={Arrow}></img>
            </div>
          </button>
        </div>
      </div>
      <div className="img-buttom">
        <img src={Wave}></img>
      </div>
    </div>
  );
}

export default section1;
