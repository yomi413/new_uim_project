import React, { Component } from "react";
import NavBar from "./NavBar";

class Policies extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>
          <a href="chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/file:///Users/yomairaescano/Downloads/Grading%20Policy%202018-19.pdf">
            Grading Policy
          </a>
        </h1>

        <h1>Uniform Policy</h1>
        <p>
          The uniform consists of khaki bottoms and tops with the UIM logo. The
          tops can be purchased through the{" "}
          <a href="http://smoothusa.com/uim">UIM webstore</a>.
        </p>

        <p>
          The shoe policy has been been amended as of Summer 2019 and it is as
          follows:
          <a href="https://i.imgur.com/1UDjBtB.jpg">Shoe Policy</a>
        </p>
        <p>
          All students must wear the required uniforms at all times. Students
          not in compliance with this uniform policy will be sent home.{" "}
        </p>
      </div>
    );
  }
}

export default Policies;
