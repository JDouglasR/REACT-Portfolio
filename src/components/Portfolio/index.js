import React from "react";
import "./style.css";
import { Container, Row, Button, Col, Card } from "react-bootstrap";
import Project from "../Project";

function Portfolio() {
  return (
    <React.Fragment>
      <Container>
        <Row id="padding">
          <Col />
          <Col md={10}>
            <Card className="card text-center">
              <h3>Portfolio</h3>
              <hr />
              <Card.Body className="card-body">
                <Row className="row">
                  <Project />
                  <div className="col-md-4">
                    <div className="card">
                      <p>Work Day Scheduler</p>
                      <img
                        className="card-img image-thumbail"
                        src={require("./img/workday-img.png")}
                        alt="Home Page of Work Day Scheduler."
                      />
                    </div>
                    <Button
                      href="https://jdouglasr.github.io/Work-Day-Scheduler/"
                      className="btn btn-info btn-sm"
                      role="button"
                      aria-pressed="true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deployed
                    </Button>
                    <Button
                      href="https://github.com/JDouglasR/Work-Day-Scheduler"
                      className="btn btn-info btn-sm"
                      role="button"
                      aria-pressed="true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Git-Repo
                    </Button>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <p>Weather Dashboard</p>
                      <img
                        className="card-img image-thumbail"
                        src={require("./img/Weather-Dashboard.png")}
                        alt="Home Page of Weather Dashboard."
                      />
                    </div>
                    <Button
                      href="https://jdouglasr.github.io/Weather-Dashboard/"
                      className="btn btn-info btn-sm"
                      role="button"
                      aria-pressed="true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deployed
                    </Button>
                    <Button
                      href="https://github.com/JDouglasR/Weather-Dashboard"
                      className="btn btn-info btn-sm"
                      role="button"
                      aria-pressed="true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Git-Repo
                    </Button>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <p>Code Quiz</p>
                      <img
                        className="card-img image-thumbail"
                        src={require("./img/Code-Quiz-index.png")}
                        alt="Home Page of Code Quiz."
                      />
                    </div>
                    <Button
                      href="https://jdouglasr.github.io/Code-Quiz/"
                      className="btn btn-info btn-sm"
                      role="button"
                      aria-pressed="true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deployed
                    </Button>
                    <Button
                      href="https://github.com/JDouglasR/Code-Quiz"
                      className="btn btn-info btn-sm"
                      role="button"
                      aria-pressed="true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Git-Repo
                    </Button>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <p>Password Generator</p>
                      <img
                        className="card-img image-thumbail"
                        src={require("./img/pg-index-page.png")}
                        alt="Home Page of Weather Dashboard."
                      />
                    </div>
                    <Button
                      href="https://jdouglasr.github.io/Password_Generator/"
                      className="btn btn-info btn-sm"
                      role="button"
                      aria-pressed="true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deployed
                    </Button>
                    <Button
                      href="https://github.com/JDouglasR/Password_Generator"
                      className="btn btn-info btn-sm"
                      role="button"
                      aria-pressed="true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Git-Repo
                    </Button>
                  </div>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col />
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Portfolio;
