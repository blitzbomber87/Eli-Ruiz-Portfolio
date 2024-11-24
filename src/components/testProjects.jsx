import React from "react";
import fitnessfirstlogo1 from "./fitnessfirstlogo-1.png";
import movienight1 from "./movienight-1.png";
import myBrooksideHotel1 from "./my-brookside-hotel-1.png";
import "./style.css";

const Projects = () => (
  <section id="projects" className="section">
    
    <Container className="pt-5">
    <h2>Projects</h2>
    <p>Here are some of my projects...</p>
            <Row className="flex-column align-items-center mt-4 pb-5 pt-3">
                <Col md={8} className="mb-4">
                    <Card>
                    <a href="https://mymovienightapp.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <Card.Img variant="top" src={MovieNightApp} className="project-image" />
                        </a>
                        <Card.Body>
                            <Card.Title>Movie Night App</Card.Title>
                            <Card.Text>
                                The Movie Night App allows users to search new and up and coming movies along with ratings and reviews. This app was made with basic html, css and javascript.
                                <a href="https://github.com/blitzbomber87/Movie-Night-App" target="_blank" rel="noopener"> <h5>Learn More...</h5>
                                </a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
            
                    <Col md={8} className="mb-4">
                    <Card>
                    <a href="https://my-brookside-hotel.onrender.com" target="_blank" rel="noopener noreferrer">
                        <Card.Img variant="top" src={BrooksideHotel} className="project-image" />
                        </a>
                        <Card.Body>
                            <Card.Title>My Brookside Hotel</Card.Title>
                            <Card.Text>
                                Brief description of the project goes here. Highlight key features and tech stack used.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    
                    <Col md={8}>
                    <Card>
                    <a href="https://fitnessfirstapp.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <Card.Img variant="top" src={FitnessFirstLogo} className="project-image" />
                        </a>
                        <Card.Body>
                            <Card.Title>FitnessFirst App</Card.Title>
                            <Card.Text>
                                Brief description of the project goes here. Highlight key features and tech stack used.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                
            </Row>
        </Container>
  </section>
);

export default Projects;

//contact 
/* import React from "react";
import fitnessfirstlogo1 from "./fitnessfirstlogo-1.png";
import movienight1 from "./movienight-1.png";
import myBrooksideHotel1 from "./my-brookside-hotel-1.png";
import "./style.css";

export const Projects = () => {
  return (
    <div className="projects">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="text-wrapper">Projects</div>

          <div className="overlap">
            <p className="div">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>

            <img className="movienight" alt="Movienight" src={movienight1} />

            <div className="text-wrapper-2">Movie Night App</div>
          </div>

          <div className="overlap-2">
            <div className="overlap-3">
              <p className="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>

              <div className="text-wrapper-3">Fitness First App</div>
            </div>

            <img
              className="fitnessfirstlogo"
              alt="Fitnessfirstlogo"
              src={fitnessfirstlogo1}
            />
          </div>

          <div className="overlap-4">
            <p className="text-wrapper-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>

            <img
              className="my-brookside-hotel"
              alt="My brookside hotel"
              src={myBrooksideHotel1}
            />

            <div className="text-wrapper-5">Brookside Hotel</div>
          </div>
        </div>
      </div>
    </div>
  );
}; */

/*import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => (
  <section id="contact" className="section">
    <Container className="text-center mb-5 pt-10rem pb-5">
    <h2>Contact</h2>
    <p>Get in touch with me at...</p>
            <h4>Phone: 951.999.1940</h4>
            <h4>Email: elias.efly000@gmail.com</h4>
            <a href="https://www.linkedin.com/in/elias-ruiz-51b71075/" target="_blank" rel="noopener"> <h4>Linkedin</h4>
            </a>
            <a href="https://github.com/blitzbomber87" target="_blank" rel="noopener"> <h4>Github</h4>
            </a> 
            <a href="https://docs.google.com/document/d/1MndZD6jkSnirJF-tAkJ_Y3lnvQrJGo7d1LVJLiJw1NY/edit?usp=sharing" target="_blank" rel="noopener"> <h4>Resume</h4> 
            </a>
        </Container>
    
  </section>
);

export default Contact; */

