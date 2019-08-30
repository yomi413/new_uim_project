import React, { Component } from "react";
import NavBar from "./NavBar";
import SchoolHours from "./SchoolHours";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>
          <center>Welcome to the Urban Institute of Mathematics</center>
        </h1>

        <h3>Our mission and vision</h3>

        <h4>
          <i>
            "I'm going to college... It's never too early to start planning for
            the rest of my life."
          </i>
        </h4>

        <p>
          Our vision is to promote higher academic achievement for our scholars
          who will <strong>ALL</strong> ultimately be college-bound and able to
          compete in the global economy and ever-changing marketplace."
        </p>

        <SchoolHours />
        <Footer />
      </div>
    );
  }
}

export default Home;
