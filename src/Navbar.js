import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <nav>
          <ul>
            {/* <li>
              <a href="home.html">New Game</a>
            </li> */}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
