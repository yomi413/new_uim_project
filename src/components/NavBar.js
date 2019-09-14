import React, { Component } from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import MenuLinks from "./MenuLinks";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <Navbar collapseOnSelect bg="dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand href="/">
              <img
                alt=""
                src="https://i.imgur.com/UzrikKb.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              {/* {"UIM"} */}
            </Navbar.Brand>
            {/* <MenuLinks /> */}

            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/parent-page">Parents</Nav.Link>
              <Nav.Link href="/student-page">Students</Nav.Link>
              <Nav.Link href="/senior-page">Senior Information</Nav.Link>
              <Nav.Link href="/policies">Policies</Nav.Link>
              <Nav.Link href="/notices">Notices</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      // <div className="navbar-container">
      //   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      //     <Navbar.Collapse id="responsive-navbar-nav">
      //       <Nav className="mr-auto">
      //         <Nav.Link href="/">Home</Nav.Link>
      //         <Nav.Link href="/parent-page">Parents</Nav.Link>
      //         <Nav.Link href="/student-page">Students</Nav.Link>
      //         <Nav.Link href="/senior-page">Senior Information</Nav.Link>
      //         <Nav.Link href="/policies">Policies</Nav.Link>
      //       </Nav>
      //     </Navbar.Collapse>
      //   </Navbar>
      // </div>
    );
  }
}

export default NavBar;
