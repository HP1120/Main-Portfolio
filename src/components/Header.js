import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h3 className="font-raleway">
          <span style={{ fontWeight: 600 }}>Harshil</span>
          <span style={{ color: '#cacaca' }}>Patel</span>
        </h3>
      </div>

      <nav>
        <ul>
          <li>
            <a href="#Introduction" className="nav-link">
              Service
            </a>
          </li>
          <li>
            <a href="#LatestWorks" className="nav-link">
              Works
            </a>
          </li>
          <li>
            <a href="#Footer" className="nav-link">
              Contacts
            </a>
          </li>
          
          <li>
            <a href="../Harshil_resume.pdf" download="Harshil_resume.pdf" className="nav-link">
              Resume
            </a>
          </li>
        </ul>
      </nav>

      <div className="social-links">
        <a
          href="https://linkedin.com/in/harshil-patel-75730b21b"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fab fa-linkedin" style={{ fontSize: '16px' }}></i>
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/HP1120"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fab fa-github" style={{ fontSize: '16px' }}></i>
          <span>Github</span>
        </a>
        <a href="mailto:hps92544@gmail.com" className="social-link">
          <i className="fas fa-envelope" style={{ fontSize: '16px' }}></i>
          <span>Email</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
