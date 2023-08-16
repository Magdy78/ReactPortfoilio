import { Link } from 'react-scroll';
import React from 'react';
import './Hero.css';
const HeroSection = () => {
  return (
<section className="hero">
      <div className="hero-content">
        <h1>Hola mis nombres es Ahmed</h1>
        <p>I'm a React Developer</p>
        <Link
          to="next-section"
          smooth={true}
          duration={200}
        >
         <button style={{marginLeft:330}}>
    <p>Who am i ?</p>
  
</button>
        </Link>
        </div>
    </section>
  );
};

export default HeroSection;
