import React from "react";
import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React1 from "../../assets/react1.jpg";
import React2 from "../../assets/react2.webp";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          Software Developer with experience in Java, MERN stack, Laravel MVC, Python, and API development. 
          Skilled in DSA, CI/CD, AWS, Docker, and Linux, with hands-on academic projects that strengthen both development and deployment expertise. 
          Passionate about building innovative full-stack solutions.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="React1" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="React2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
