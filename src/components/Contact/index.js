import React from "react";
import "./style.css";
import {
  faGithubSquare,
  faLinkedin,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeSquare,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <React.Fragment>
      <Container>
        <Row id="padding">
          <Col md={3} />
          <Col md={6}>
            <Card className="card">
              <h3>Contact</h3>
              <hr />
              <Row className="row">
                <Link
                  to="https://github.com/JDouglasR"
                  href="https://github.com/JDouglasR"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithubSquare}
                    className="fab fa-github-square fa-5x iconClass"
                  />
                </Link>
              </Row>
              <Row>
                <a
                  href="https://linkedin.com/in/justin-douglas-roose"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="fab fa-linkedin fa-5x iconClass"
                  />
                </a>
              </Row>
              <Row>
                <a
                  href="https://facebook.com/jdouglasr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebookSquare}
                    className="fab fa-facebook-square fa-5x iconClass"
                  />
                </a>
              </Row>
              <Row>
                <a
                  href="mailto:justin.d.roose@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faEnvelopeSquare}
                    className="fas fa-envelope-square fa-5x iconClass"
                  />
                </a>
              </Row>
              <Row>
                <a
                  href="tel:14405967722"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faPhoneSquare}
                    className="fas fa-phone-square fa-5x iconClass"
                  />
                </a>
              </Row>
            </Card>
          </Col>
          <Col />
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Contact;
