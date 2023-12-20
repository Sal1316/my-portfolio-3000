import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ id, image, title, link, repo }) {
  const navigate = useNavigate(); // whenever its called, it will navigate to the specified route. Like a redirect.
  console.log(" Id: ", id);
  console.log("Title: ", title);

  return (
    <div key={id}>
      <div className="projectItem">
        <h1 className="projectTitle"> {title} </h1>
        <div
          className="bgImage"
          style={{ backgroundImage: `url(${image})` }}
          onClick={() => {
            navigate("/projects/" + id); // the id is just the index value.
          }}
        ></div>
        <h3>
          Project Link:<a href={link}>Click Me</a>
        </h3>
        <h3>
          Repo Link:<a href={repo}>Click Me</a>
        </h3>
      </div>
    </div>
  );
}

export default ProjectItem;
