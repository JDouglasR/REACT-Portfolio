import React from "react";
import "./style.css";

function Contact() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row" id="padding">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="card">
              <h3>Contact</h3>
              <hr />
              <div>
                <a
                  href="https://github.com/JDouglasR"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github-square fa-5x"></i>
                </a>
                <br />
                <a
                  href="https://linkedin.com/in/justin-douglas-roose"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin fa-5x"></i>
                </a>
                <br />
                <a
                  href="https://facebook.com/jdouglasr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-square fa-5x"></i>
                </a>
                <br />
                <a
                  href="mailto:justin.d.roose@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-envelope-square fa-5x"></i>
                </a>
                <br />
                <a
                  href="tel:14405967722"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-phone-square fa-5x"></i>
                </a>
                <br />
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contact;
