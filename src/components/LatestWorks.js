import React from 'react';
import { useState } from 'react';

const LatestWorks = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: 'Fitness APP',
      tags: ['HTML', 'ReactJS', 'CSS'],
      image: '../assets/Projects/project-1.png',
      gradient: 'linear-gradient(to bottom, #16191e, #252628)'
    },
    {
      title: 'Nike Store',
      tags: ['Figma'],
      image: '../assets/Projects/project-2.png',
      gradient: 'linear-gradient(to bottom right, #2c2940, #5a4073)'
    },
    {
      title: 'Focus',
      tags: ['ReactJS', 'HTML'],
      image: '../assets/Projects/project-3.png',
      gradient: 'linear-gradient(to bottom right, #01403A, #025951)'
    }
  ];
  return (
    <section className="works" id='Works'>
      <div className="works-header">
        <h3 className="works-title">Latest Works</h3>
        <p className="works-subtitle">Perfect solutions for digital experience</p>
      </div>

      <div className="works-grid">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="project-card"
            style={{ background: project.gradient }}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
            <img
              src={project.image}
              alt={project.title}
              className={`project-image ${hoveredProject === index ? 'hovered' : ''}`}
            />
          </div>
        ))}
      </div>

      <div className="works-footer">
        <a href="#" className="works-link">ALL PROJECTS</a>
        <p className="works-note">
          * Some projects are not allowed to publish by NDA<br />
          if you want to see more. <a href="#contact" className="contact-link">CONTACT</a>
        </p>
      </div>
    </section>
  );
};

export default LatestWorks;
