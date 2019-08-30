import React, { Component } from "react";

class SchoolHours extends Component {
  render() {
    return (
      <div>
        <h3>School Hours</h3>
        <table>
          <td>
            <tr>Homeroom: </tr>
            <tr>Period 1: </tr>
            <tr>Period 2: </tr>
            <tr>Period 3: </tr>
            <tr>Period 4: </tr>
            <tr>Period 5: </tr>
            <tr>Period 6: </tr>
            <tr>Period 7: </tr>
            <tr>Homeroom: </tr>
          </td>

          <td>
            <tr>8:15-820am</tr>
            <tr>8:20-9:13am</tr>
            <tr>9:13-10:06am</tr>
            <tr>10:06-10:59am</tr>
            <tr>10:59-11:52am</tr>
            <tr>11:52am-12:45pm</tr>
            <tr>12:45-1:38pm</tr>
            <tr>1:38-2:31pm</tr>
            <tr>2:31-2:35pm</tr>
          </td>
        </table>
      </div>
    );
  }
}

export default SchoolHours;
