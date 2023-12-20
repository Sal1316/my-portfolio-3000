import React from "react";
import ResumeIcon from "../assets/images/resume-icon.png";
import ResumePdf from "../assets/Salvador Ceja_Cover Letter.pdf"; // upload resume when done.

const Resume = () => {
  return (
    <div>
      <div className="col d-flex justify-content-center align-items-center">
        <div>
          <h2 className="text-center pb-3 pt-5">
            Click Icon to Download Resume
          </h2>
          <a
            href={ResumePdf}
            download="Salvador_Ceja_Resume.pdf"
            className="d-flex justify-content-center align-items-center"
          >
            <img src={ResumeIcon} style={{ width: "200px" }} alt="Resume" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
