import React from "react";
import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <React.Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="navbar"
        style={{ backgroundColor: "rgba(60, 141, 155, 0.9)" }}
      >
        <Navbar.Brand to="/" href="/">
          <strong>Justin Roose</strong>
        </Navbar.Brand>
        <Navbar.Toggle
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="responsive-navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse
          className="collapse navbar-collapse"
          id="responsive-navbar-nav"
        >
          <Nav className="navbar-nav mr-auto">
            <Nav.Link
              eventKey="1"
              as={Link}
              to="/"
              className="nav-link"
              href="home page"
            >
              Home
            </Nav.Link>
            <Nav.Link
              eventKey="2"
              as={Link}
              to="/portfolio"
              className="nav-link"
              href="portfolio page"
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              eventKey="3"
              as={Link}
              to="/contact"
              className="nav-link"
              href="contact page"
            >
              Contact
            </Nav.Link>

            <a
              className="nav-link"
              href="https://docs.google.com/document/d/1ciRcNFTWxZ4Se994na_2ev3araiH719M/edit?usp=sharing&ouid=104894449656846514963&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default Navigation;
