import React, { useEffect } from 'react';
import Typed from 'typed.js';

const ContentBody = () => {
  useEffect(() => {
    const typed = new Typed('#element', {
      strings: ['Web Developer', 'UI/UX Designer', 'Backend Developer'],
      typeSpeed: 50,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section id="content-body">
      
      <div className="body-part-1">
        <div className="developer-intro">
          <p>Full-Stack Developer</p>
          <p>Designer</p>
        </div>
        <div className="body-title">
          <div className="sota">
            Hi, My name is Harshil
            <div>and I am a passionate</div>
            <span id="element"></span>
          </div>
          <p>I design and code beautifully simple things, and I love what I do.</p>
          <a href="#">LET'S CHAT!</a>
        </div>
      </div>
      <div className="body-part-2">
        <div className="hoodie-guy"></div>
        <div className="circle">
          {[
            "flutter",
            "python",
            "adobe-photoshop",
            "django",
            "adobe-premiere-pro",
            "html-5",
            "figma",
            "css3",
            "javascript",
            "adobe-illustrator",
            "dart",
            "PostgreSQL-Dark",
            "MySQL-Dark",
            "Firebase-Dark",
            "Github-Dark",
          ].map((icon, index) => (
            <span key={index} style={{ "--i": index + 1 }}>
              <img
                src={`/assets/SVGIcons/${icon}.svg`}
                height="75px"
                alt={icon}
              />
            </span>
          ))}
        </div>
        <div className="background-circle"></div>
      </div>
    </section>
  );
};

export default ContentBody;
    