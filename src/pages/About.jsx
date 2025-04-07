import React from "react";

function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">About Me</h2>
      <p className="about-text">
        I am a passionate <span>MERN Stack Developer</span> with a strong interest in building
        high-quality, scalable web applications. I love problem-solving and exploring new technologies.
      </p>
      <div className="about-cards">
        <div className="card">
          <h3>Experience</h3>
          <p>1+ Year in Web Development</p>
        </div>
        <div className="card">
          <h3>Skills</h3>
          <p>React, Node.js, MongoDB, Express</p>
        </div>
        <div className="card">
          <h3>Education</h3>
          <p>Completed Web Dev Course @ DIIT Educom</p>
        </div>
      </div>
    </div>
  );
}

export default About;
