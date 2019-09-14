import React, { Component } from "react";
import NavBar from "./components/NavBar";

class Notices extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <a href="https://i.imgur.com/dO8W1hb.jpg" target="_blank">
          Letter from Mr. Tisi
        </a>
      </div>
    );
  }
}

export default Notices;
