import React from "react";
import "../../styles/Projects.css";

import ProjectItem from "../components/ProjectItem";
import ProjectsList from "../projects-data/ProjectsList";

const Projects = () => {
  
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectsList.map((project, index) => {
          return (
            <ProjectItem
              id={index}
              image={project.image}
              title={project.title}
              link={project.link}
              repo={project.repo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
