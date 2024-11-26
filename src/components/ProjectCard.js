import React from 'react';


function ProjectCard({ title, techStack, imgSrc }) {
  return (
    <div className="project-card">
      <div className="title">
        <h3>{title}</h3>
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <p key={index}>{tech}</p>
          ))}
        </div>
      </div>
      <img src={imgSrc} alt={title} className="project-img" />
    </div>
  );
}

export default ProjectCard;
