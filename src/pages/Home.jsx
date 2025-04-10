import React from "react";
import photo from "../assets/photo.png";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className="home-container">
      <div className="photo">
        <img src={photo} alt="photo" />
      </div>
      <h1 className="home-title">Hi, I'm <span>Manish Kumar</span></h1>
      <p className="home-subtitle">
        <Typewriter
          options={{
            strings: ["A Passionate MERN Stack Developer 🚀", "Full-Stack Enthusiast 💻", "JavaScript Lover ❤️"],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </p>
      <div className="home-buttons">
        <button className="btn hire-btn">Hire Me</button>
        <button className="btn work-btn">See My Work</button>
      </div>
    </div>
  );
}

export default Home;