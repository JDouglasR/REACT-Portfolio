import React from "react";
import "./style.css";

function Home() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row" id="padding">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="card text-center">
              <h3>About Me</h3>
              <hr />
              <img
                className="card-img-top"
                src={require("./img/Bio-Picture.jpg")}
                alt="Portrait of Justin Roose smiling"
              />
              <div className="card-body">
                <p className="card-text">
                  {
                    "Hey, my name is Justin! I'm a full-stack web developer with a concentration on MERN stack. I am qualified in MongoDB, Express.js, React.js, and Node.js with experience in HTML, CSS {Bootstrap and Halfmoon frameworks}, and JavaScript{jQuery, APIs, JSON, AJAX, MySQL, React.js}."
                  }
                </p>
                <br />
                <p>
                  I'm currently located in Cleveland, Ohio where I studied web
                  developement at Case Western Reserve University. Contact me
                  for any queries or contract work. Thanks for visiting my page!
                </p>
                <br />
                <a
                  href="mailto:justin.d.roose@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email: Justin.D.Roose@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
