import React from 'react';
import './index.css'; // Make sure to import the CSS file
import HeroSection from './components/Hero.jsx';
import CustomNavbar from './components/navbar/Navbar.jsx'
import About from './components/About/About';
import "./components/Hero.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projetcs/Projects.jsx';
import Skills from './components/Skills/Skills.jsx';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
       <CustomNavbar></CustomNavbar> 
      <HeroSection />
   <About/>
   <Projects></Projects>
   <Skills></Skills>
   <Footer /> 
  </div>
  );
}

export default App;
