import React, { Component } from "react";
import NavBar from "./NavBar";

class SeniorPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>High School Information</h1>
        <p>
          This page is dedicated to provide our 8th students and their families
          information about senior events and senior information. This
          information will be updated throughout the year.
        </p>
        <h4>
          <a href="chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/file:///Users/yomairaescano/Downloads/Senior%20Dues_2018%20OK'd%20(1).pdf">
            Senior Dues
          </a>
        </h4>

        <h2>WARNING:</h2>
        <p>Senior Dues are now OVERDUE!!!</p>
        <p>Package A - $60.00 Cap, Gown and Senior Breakfast</p>
        <p>
          Package B = $135.00 Cap, Gown, Senior Breakfast, Senior Prom Tickets
          include dinner, refreshments and ...
        </p>
        <p>
          Package C - $260.00 ALL INCLUSIVE OF Packages A + B + Senior Class
          trip to Rye Playland (Park Tickets, transportation and lunch, Senior
          T-shirt and Yearbook.
        </p>
        <p>
          Please make immediate payment for the package of your choice so that
          we can finalize arrangements with our vendors. Send cash or money
          order. No personal checks. Payments may be submitted to UIM Main
          office.
        </p>

        <h3>Upcoming Events</h3>
        <ul>
          <li>
            Award Ceremony--Monday, May 21, 2018 Split Rock Gof Resort 5:00 p.m.
            to 8:00 p.m.
          </li>
          <li>
            Senior Prom--Wednesday, June 6, 2018 Maestro's Catering Hall 5:00
            p.m. to 8:00 p.m.
          </li>
          <li>Senior Class Trip--Thursday, June 14, 2018 Playland Park</li>
          <li>
            Senior Luncheon--Tuesday, June 19, 2018 at Patricia's Restaurant
            11:00 a.m. to 1:00 p.m.
          </li>
          <li>Graduation--Friday, June 22, 2018 Auditorium 8:30 a.m.</li>
        </ul>
      </div>
    );
  }
}

export default SeniorPage;
