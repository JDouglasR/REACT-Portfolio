import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "rgba(60, 141, 155, 0.9)" }}
      >
        <a className="navbar-brand" href="index.html">
          Justin Roose
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link" href="index.html">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link" href="portfolio.html">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" href="contact.html">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/JDouglasR/Portfolio/blob/master/DEV-RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
