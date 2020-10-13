import React from "react";
// import "./style.css";

function Portfolio() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row" id="padding">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="card">
              <div className="card-body">
                <h3>Portfolio</h3>
                <hr />
                <div className="row">
                  <div className="col-md-4">
                    <div className="card">
                      <p>Dinner and a Show</p>
                      <img
                        className="card-img image-thumbail"
                        src="Assets/Images/dinner-and-a-show.png"
                        alt="Home Page of Dinner and a Show."
                      />
                    </div>
                    <a
                      href="https://jdouglasr.github.io/Dinner-and-a-show/"
                      className="btn btn-info btn-sm"
                      role="button"
                      aria-pressed="true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deployed
                    </a>
                    <a
                      href="https://github.com/JDouglasR/Dinner-and-a-show"
                      className="btn btn-info btn-sm"
                      role="button"
                      aria-pressed="true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Git-Repo
                    </a>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <p>Work Day Scheduler</p>
                      <img
                        className="card-img image-thumbail"
                        src="Assets/Images/workday-img.png"
                        alt="Home Page of Work Day Scheduler."
                      />
                    </div>
                    <a
                      href="https://jdouglasr.github.io/Work-Day-Scheduler/"
                      className="btn btn-info btn-sm"
                      role="button"
                      aria-pressed="true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deployed
                    </a>
                    <a
                      href="https://github.com/JDouglasR/Work-Day-Scheduler"
                      className="btn btn-info btn-sm"
                      role="button"
                      aria-pressed="true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Git-Repo
                    </a>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <p>Weather Dashboard</p>
                      <img
                        className="card-img image-thumbail"
                        src="Assets/Images/Weather-Dashboard.png"
                        alt="Home Page of Weather Dashboard."
                      />
                    </div>
                    <a
                      href="https://jdouglasr.github.io/Weather-Dashboard/"
                      className="btn btn-info btn-sm"
                      role="button"
                      aria-pressed="true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deployed
                    </a>
                    <a
                      href="https://github.com/JDouglasR/Weather-Dashboard"
                      className="btn btn-info btn-sm"
                      role="button"
                      aria-pressed="true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Git-Repo
                    </a>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <p>Code Quiz</p>
                      <img
                        className="card-img image-thumbail"
                        src="Assets/Images/Code-Quiz-index.png"
                        alt="Home Page of Code Quiz."
                      />
                    </div>
                    <a
                      href="https://jdouglasr.github.io/Code-Quiz/"
                      className="btn btn-info btn-sm"
                      role="button"
                      aria-pressed="true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deployed
                    </a>
                    <a
                      href="https://github.com/JDouglasR/Code-Quiz"
                      className="btn btn-info btn-sm"
                      role="button"
                      aria-pressed="true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Git-Repo
                    </a>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <p>Password Generator</p>
                      <img
                        className="card-img image-thumbail"
                        src="Assets/Images/pg-index-page.png"
                        alt="Home Page of Weather Dashboard."
                      />
                    </div>
                    <a
                      href="https://jdouglasr.github.io/Password_Generator/"
                      className="btn btn-info btn-sm"
                      role="button"
                      aria-pressed="true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deployed
                    </a>
                    <a
                      href="https://github.com/JDouglasR/Password_Generator"
                      className="btn btn-info btn-sm"
                      role="button"
                      aria-pressed="true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Git-Repo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </React.Fragment>
  );
}

export default Portfolio;
