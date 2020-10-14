import React from "react";
import { Card, Col, Button } from "react-bootstrap";

function Project() {
  return (
    <React.Fragment>
      <Col md={4}>
        <Card className="card card-text-center">
          <p>Dinner and a Show</p>
          <img
            className="card-img image-thumbail"
            src={require("../Portfolio/img/dinner-and-a-show.png")}
            alt="Home Page of Dinner and a Show."
          />
        </Card>
        <Button
          href="https://jdouglasr.github.io/Dinner-and-a-show/"
          className="btn btn-info btn-sm"
          role="button"
          aria-pressed="true"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deployed
        </Button>
        <Button
          href="https://github.com/JDouglasR/Dinner-and-a-show"
          className="btn btn-info btn-sm"
          role="button"
          aria-pressed="true"
          target="_blank"
          rel="noopener noreferrer"
        >
          Git-Repo
        </Button>
      </Col>
    </React.Fragment>
  );
}

export default Project;
