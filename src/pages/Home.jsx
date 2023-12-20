import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../../Styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name is Salvador</h2>
        <div className="prompt pt-5">
          <p>A software developer with a passion for creating.</p>
          <FaLinkedin />
          <FaGithub />
          <MdEmail />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              HTML, CSS, React, Boostrap, MaterialUI, React Icons, NPM,
              StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Javascript, ExpressJS, GraphQL, ApolloServer, MySQL,
              MongoDB
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
