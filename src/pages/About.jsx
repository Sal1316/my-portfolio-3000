import React from "react";
import Experience from "../components/Experience";
import ProfileImage from "../assets/images/1316mos.png";

const About = () => {
  return (
    <div >
      <div style={{ padding: "15px" }}>
        My image
        <img
          src={ProfileImage}
          alt="my-profile-image"
          style={{ width: "300px", height: "200px", padding: "15px" }}
        />
      </div>
      <div style={{  width: "600px", padding: "15px" }}>
        <h2>Bio:</h2>
        <p>
          "I have always leaned toward the more technical side in my career. I
          started as a welder, metal fabricator, specializing in pressure
          vessels; this is what is my bread and butter. This career path has
          always been good to me, but there was always a void that I was
          missing. I needed to consistently challenge myself. In the past, I
          have always been interested in coding but never had the opportunity to
          dedicate myself to it. Now I do, and I am ready to fully commit
          myself, and I'm not looking back."
        </p>
      </div>
      <Experience />
    </div>
  );
};

export default About;
