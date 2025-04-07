import React from "react";

const projects = [
  {
    id: 1,
    title: "Clap to Change Color",
    description: "An interactive project where claps change background color.",
    demo: "https://clap-color-change.vercel.app/",
    github: "https://github.com/manishk835/clap-color-change",
  },
  {
    id: 2,
    title: "Build - Construction Html5 Template",
    description: "A professional construction website template.",
    demo: "https://ilu-pi.vercel.app/",
    github: "https://github.com/manishk835/ilu"
  },
  {
    id: 3,
    title: "Bantia-Furnitures-Ecommerce",
    description: "An e-commerce website for furniture shopping.",
    demo: "https://bantia-furnitures-ecommerce.vercel.app/",
    github: "https://github.com/manishk835/Bantia-Furnitures-Ecommerce"
  }
  
];

function Projects() {
  return (
    <section className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
