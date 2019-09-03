import React, { Component } from "react";
import NavBar from "./NavBar";

class StudentPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>Student Newsletters</h1>
        <ul>
          <li>
            <a href="chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/file:///Users/yomairaescano/Downloads/Newsletter.7th%20Grade.Cycle%201.pdf">
              7th Grade Newsletter
            </a>
          </li>
          <li>
            <a href="chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/file:///Users/yomairaescano/Downloads/8th%20Grade%20News%20Cycle%201%20-2018%20(1).pdf">
              8th Grade Newsletter - Cycle 1
            </a>
          </li>
          <li>
            <a href="chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/file:///Users/yomairaescano/Downloads/8th%20Grade%20Newsletter%20Cycle%202.pdf">
              8th Grade Newsletter - Cycle 2
            </a>
          </li>
        </ul>

        <h1>UIM Athletics</h1>
        <p>
          Starting in the Fall of 2018, UIM will be participating in the
          District 8 Middle Schools Sports League. This upcoming school year UIM
          will offer sports in all three season listed below.
        </p>
        <ul>
          <li>Fall: Soccer & Flag Football</li>
          <li>Winter: Basketball, Volleyball & Floor Hockey</li>
          <li>Spring: Baseball & Track</li>
        </ul>
        <p>
          In order for students to participate they must read and sign the{" "}
          <a href="chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/file:///Users/yomairaescano/Downloads/UIM%20ATHLETICS%20CODE%20OF%20CONDUCT%20(1).pdf">
            UIM Athletics Code of Conduct
          </a>{" "}
          and return to [the homeroom teacher] as soon as possible.
        </p>
        <h1>UIM Clubs</h1>
        <p>
          Similar to past years at UIM, scholars will have the opportunity to
          participate in many before, during and after school clubs.
        </p>
        <p>
          Students will have the opportunity to participate in the following
          activities at UIM:
        </p>
        <ul>
          <li>Debate Team</li>
          <li>Mock Trial Team</li>
          <li>Lego Robotics</li>
          <li>Student Government</li>
          <li>Art Buddies</li>
          <li>Specialized High School Prep</li>
          <li>Drama Club</li>
          <li>National Junior Honor Society</li>
          <li>Chess Club</li>
          <li>Slot Car Club</li>
          <li>Woodlawn Leadership Legacy Program</li>
        </ul>

        <p>
          In order for students to participate they must read and sign the{" "}
          <a href="chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/file:///Users/yomairaescano/Downloads/UIM%20CLUBS%20CODE%20OF%20CONDUCT.pdf">
            UIM After School Clubs Code of Conduct
          </a>{" "}
          and return to [the homeroom teacher] as soon as possible.
        </p>
      </div>
    );
  }
}

export default StudentPage;
