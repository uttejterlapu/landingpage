import "./App.css";

function App() {
  return (
    <header>
      <nav>
        <input type="checkbox" id="check"></input>
        <label class="logo">
          <label  class="title">FARMINNO TECH</label>
          <label  class="caption">CORPORATION</label>
        </label>
        <label for="check" class="checkbtn">
          <div class="custom-menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </label>
        <ul>
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
