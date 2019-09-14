import React, { Component } from "react";
import NavBar from "./NavBar";
import SchoolHours from "./SchoolHours";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <center>
          <img
            className="logo"
            src="https://i.imgur.com/UzrikKb.png"
            alt="UIM - Full Steam Ahead"
          />
        </center>
        <h1>
          <center>Welcome to the Urban Institute of Mathematics</center>
        </h1>

        <h4>
          <i>
            <center>
              "I'm going to college... It's never too early to start planning
              for the rest of my life."
            </center>
          </i>
        </h4>

        <p>
          Our vision is to promote higher academic achievement for our scholars
          who will <strong>ALL</strong> ultimately be college-bound and able to
          compete in the global economy and ever-changing marketplace.
        </p>

        <br />

        <p>
          <a
            href="chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://www.schools.nyc.gov/docs/default-source/default-document-library/school-calendar-2019-2020"
            target="_blank"
          >
            School Calendar 2019-2020
          </a>
        </p>

        <p>
          <a href="https://i.imgur.com/reJnSO3.jpg" target="_blank">
            School Hours
          </a>
        </p>

        {/* <SchoolHours /> */}
        <Footer />
      </div>
    );
  }
}

export default Home;
