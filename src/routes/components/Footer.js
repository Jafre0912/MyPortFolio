import "./FooterStyles.css";
import React from "react";
import {
  FaHome,
  FaMailBulk,
  FaPhone,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Laxmi Nagar-East Delhi,Delhi</p>
              <p>INDIA</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 6207817606
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              jafrea835@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>Jafre Alam–MERN Stack Developer</h4>
          <p>
          Skilled in Java, MERN, Laravel, Python, AWS, and Docker. 
          Focused on building scalable, secure web solutions and exploring innovative projects.
          </p>
          <div className="social">
            <a
              href="https://www.facebook.com/studyloom/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/jafrealam0124/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/jafre0912"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
