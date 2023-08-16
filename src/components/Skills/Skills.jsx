import React from 'react';
import './Skills.css'; // Import the CSS file for Skills styles

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h1>My Skills</h1>
        <div className="skills-list">
          <div className="skill">
            <h3>HTML</h3>
            <div className="progress">
              <div className="progress-bar" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="skill">
            <h3>CSS</h3>
            <div className="progress">
              <div className="progress-bar" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="skill">
            <h3>JavaScript</h3>
            <div className="progress">
              <div className="progress-bar" style={{ width: '100%' }}></div>
            </div>
          </div>
          <div className="skill">
            <h3>Graphic Design</h3>
            <div className="progress">
              <div className="progress-bar" style={{ width: '95%' }}></div>
            </div>
          </div>
          <div className="skill">
            <h3>React</h3>
            <div className="progress">
              <div className="progress-bar" style={{ width: '45%' }}></div>
            </div>
          </div>
          <div className="skill">
            <h3>Angular</h3>
            <div className="progress">
              <div className="progress-bar" style={{ width: '85%' }}></div>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Skills;
