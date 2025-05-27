import React from "react";
import photo from "../assets/photo.png";
import Typewriter from "typewriter-effect";
import resume from "../assets/Manish.pdf";

function Home() {
  return (
    <div className="home-container">
      <div className="photo">
        <img src={photo} alt="photo" />
      </div>
      <h1 className="home-title">
        Hi, I'm <span>Manish Kumar</span>
      </h1>
      <p className="home-subtitle">
        <Typewriter
          options={{
            strings: [
              "A Passionate MERN Stack Developer 🚀",
              "Full-Stack Enthusiast 💻",
              "JavaScript Lover ❤️",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </p>
      <div className="home-buttons">
        <a href={resume} download="Manish.pdf">
          <button className="btn hire-btn">Download Resume</button>
        </a>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <button className="btn work-btn">View Resume</button>
        </a>
      </div>
    </div>
  );
}

export default Home;
