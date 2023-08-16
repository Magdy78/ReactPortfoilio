import React from 'react';
import './About.css'; // Import the CSS file for About styles

import image2 from '../images/2023-2024-Behance.png';
import { Link } from 'react-scroll';
const About = () => {
  return (
    <section id="next-section" className="about" >
     
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
 <div className='meSection'>
<img src={image2} style={{ alignSelf: 'center' }}/>

<h1>Hello! I am working as a graphic designer for the last 6+ years and have exceptional knowledge in developing graphics, audio and visual images for product illustrations, logos and websites. I am passionate about development especially in the field of FrontEnd development, with high skills in Js and HTML & CSS.
eager to learn every day new things about the development world and focus on learning the frameworks nowadays React. 
</h1>
<Link
          to="projects"
          smooth={true}
          duration={200}
        >
<button>
  <span> See My Projects
  </span>
</button>
</Link>
 </div>
 

     
    </section>
  );
};

export default About;
