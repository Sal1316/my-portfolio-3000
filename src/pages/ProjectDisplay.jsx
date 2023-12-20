import React from "react";
import { useParams } from "react-router-dom";
import ProjectList from "../projects-data/ProjectsList";
import { FaGithub } from "react-icons/fa";
import "../../styles/ProjectDisplay.css";

// Not that functional now, but need to add more stuff to the ProjectList.jsx to highlight the project details.

const ProjectDisplay = () => {
  const { id } = useParams(); // grabs the id from the url. the 'id' should be the same as the 'id' defined in the routes.
  const project = ProjectList[id]; // the position of our project in our ProjectList

  return (
    <div className="project">
      <h1>{project.title}</h1>
      <img src={project.image} />

      <FaGithub />
    </div>
  );
};

export default ProjectDisplay;
