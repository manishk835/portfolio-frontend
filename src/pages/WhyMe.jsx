import React from "react";

import { FaReact, FaNodeJs, FaDatabase, FaBolt, FaCheckCircle } from "react-icons/fa";

const WhyMe = () => {
  return (
    <div className="whyme-container">
      <h2 className="whyme-title">Why Choose <span>Me?</span></h2>
      <p className="whyme-desc">
        I specialize in **MERN stack development**, delivering **high-performance**, **scalable**, and **beautiful** web applications. 
        My skills and passion make me the perfect choice for your next project!
      </p>

      <div className="skills">
        <div className="skill">
          <FaReact className="skill-icon react" />
          <div className="skill-bar"><div className="progress react"></div></div>
          <p>React.js (90%)</p>
        </div>
        
        <div className="skill">
          <FaNodeJs className="skill-icon node" />
          <div className="skill-bar"><div className="progress node"></div></div>
          <p>Node.js (85%)</p>
        </div>

        <div className="skill">
          <FaDatabase className="skill-icon mongo" />
          <div className="skill-bar"><div className="progress mongo"></div></div>
          <p>MongoDB (80%)</p>
        </div>

        <div className="skill">
          <FaBolt className="skill-icon speed" />
          <div className="skill-bar"><div className="progress speed"></div></div>
          <p>Fast Development (95%)</p>
        </div>
      </div>

      <div className="trust">
        <FaCheckCircle className="trust-icon" />
        <p>Trusted by multiple clients for delivering high-quality work! 🚀</p>
      </div>
    </div>
  );
};

export default WhyMe;
