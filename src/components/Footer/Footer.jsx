import React from 'react';
import './Footer.css'; // Import the CSS file for Footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Contact Me</p>
        <div className="social-links">
          <a href="https://www.facebook.com/gunneruwk/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/in/ahmed-magdy-3a2118211/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://www.behance.net/ahmedjunior" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-behance"></i>
          </a>
          <a href="https://www.github.com/Magdy78" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
