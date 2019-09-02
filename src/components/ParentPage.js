import React, { Component } from "react";
import NavBar from "./NavBar";

class ParentPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h3>
          <a href="chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://www.schools.nyc.gov/docs/default-source/default-document-library/school-calendar-2019-2020">
            School Calendar 2019-2020
          </a>
        </h3>

        <h1>SLT MEETING DATES</h1>
        <ul>
          <li>Tuesday, September 11, 2018</li>
          <li>Tuesday, October 9, 2018</li>
          <li>Tuesday, November 13, 2018</li>
          <li>Tuesday, December 11, 2018</li>
          <li>Tuesday, January 8, 2019</li>
          <li>Tuesday, February 12, 2019</li>
          <li>Tuesday, March 12, 2019</li>
          <li>Tuesday, April 9, 2019</li>
          <li>Tuesday, May 14, 2019</li>
          <li>Tuesday, June 11, 2019</li>
          <li>*PTA Meetings will immediately follow our SLT Meetings*</li>
        </ul>

        <h1>
          <a href="chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/file:///Users/yomairaescano/Downloads/Coffee%20with%20the%20Prinicpal%20Meeting%20Dates..pdf">
            Coffee with the Principal
          </a>
        </h1>
        <ul>
          <li>Friday, October 12, 2018</li>
          <li>Friday, November 9, 2018</li>
          <li>Friday, December 14, 2018</li>
          <li>Friday, January 11, 2019</li>
          <li>Friday, February 8, 2019</li>
          <li>Friday, March 8, 2019</li>
          <li>Friday, April 12, 2019</li>
          <li>Friday, May 10, 2019</li>
          <li>Friday, June 14, 2019</li>
        </ul>

        <h1>After School Programming</h1>
        <p>
          After school programming begins September 12, 2018. We are privileged
          to have two after school programs in our building. Our students have
          the option of enrolling in either of the two after school programs.
          Students have the option of enrolling in the SONYC or the Beacon
          Afterschool Program. If you wish to enroll in the SONYC Program, you
          can requent an application from the main office in Room 405A. The
          Program Director for the SONYC Afterschool Program is Ms.
          Alvarez-Plaud and she can be reached at extension 4040.
        </p>
        <p>
          The building also has a Beacon Afterschool Program. The Beacon
          program's office is located on the first floor to the right of the
          school safety desk just before the double doors. The Director of the
          Beacon Afterschool Program is Mr. Scott. Mr. Scott can be reached at
          extension 1401. You may obtain our applications for the Beacon Program
          with Mr. Scott.
        </p>

        <center>
          <p>
            <strong>Slots fill up quickly.</strong>
          </p>

          <p>
            <strong>
              Programming for both SONYC and Beacon begins 9/12/18.
            </strong>
          </p>
        </center>
      </div>
    );
  }
}

export default ParentPage;
