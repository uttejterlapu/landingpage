import React, { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header>
      <nav>
        <input type="checkbox" id="check" checked={menuOpen}></input>
        <label class="logo">
          <label  class="title">FARMINNO TECH</label>
          <label  class="caption">CORPORATION</label>
        </label>
        <label htmlFor="check" class="checkbtn" onClick={toggleMenu}>
          <div class="custom-menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </label>
        <ul className={menuOpen ? "active" : ""}>
          <li>
            <a href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a class="active"  href="#">Careers</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default App;
