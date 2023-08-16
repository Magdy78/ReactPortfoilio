import React from 'react';
import './Projects.css'; // Import the CSS file for Projects styles
import Card from 'react-bootstrap/Card';
import image3 from '../images/VisualAgust.png';
import image2 from '../images/Page 7.png';
import image1 from '../images/Mockup new.png';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'; // Import Row component
import Col from 'react-bootstrap/Col'; // Import Col component

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h1>My Projects</h1>
        <Row className="justify-content-center"> {/* Use Row to horizontally align */}
          <Col md={4}>
            <Card style={{ width: '21rem' }}>
              <Card.Img variant="top" src={image3} />
              <Card.Body>
                <Card.Title>Visual August</Card.Title>
                <Card.Text>
                 Project to particpate in Visual August contest 
                </Card.Text>
                <a href="https://www.behance.net/ahmedjunior">
                <Button className="CardBtn">See Project</Button></a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: '23rem' }}>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title>TRAVELMATE </Card.Title>
                <Card.Text>
                  Project about helping you in traveling journey , helps you find 
                  place to sleep and places to see 
                </Card.Text>
              
                <a href="https://www.behance.net/gallery/176175425/TravelMate-Travel-App">
                <Button className="CardBtn">See Project</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: '22rem' }}>
              <Card.Img variant="top" src={image2} />
              <Card.Body>
                <Card.Title>LUXE-LIVINGS</Card.Title>
                <Card.Text>
                Project about helping you in buying luxury places in your country.
                </Card.Text><a href="https://www.behance.net/gallery/176794517/LuxeLivings-Case-Study">
                <Button className="CardBtn">See Project</Button></a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Projects;
