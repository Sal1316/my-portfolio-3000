import React from "react";
import "../../Styles/Footer.css";
import { FaInstagram } from "react-icons/fa";
// import { FaMeta } from "react-icons/fa6"; // facebook
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <h3>Connect with Me</h3>
        <div className="socialMedia">
          <a href="https://github.com/Sal1316" target="_blank">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/sal-ceja" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/" target="_blank">
            <FaInstagram />
          </a>
        </div>
        <p>&copy; 2023 sal'sportfolio.com</p>
      </div>
    </footer>
  );
};

export default Footer;
