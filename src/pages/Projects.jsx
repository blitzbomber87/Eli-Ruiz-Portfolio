import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import FitnessFirstLogo from '../assets/images/FitnessFirstLogo.jpg';
import BrooksideHotel from '../assets/images/BrooksideHotel.jpg';
import MovieNightApp from '../assets/images/MovieNight.jpg';

function Projects() {
    return (
        <Container className="mt-5">
            {/* <h1 className="text-center">My Projects</h1> */}
            <Row className="mt-4 pb-5 pt-3">
                <Col md={4}>
                    <Card>
                    <a href="https://mymovienightapp.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <Card.Img variant="top" src={MovieNightApp} width="300" height="270" />
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
                    <Col md={4}>
                    <Card>
                    <a href="https://my-brookside-hotel.onrender.com" target="_blank" rel="noopener noreferrer">
                        <Card.Img variant="top" src={BrooksideHotel} width="300" height="270" />
                        </a>
                        <Card.Body>
                            <Card.Title>My Brookside Hotel</Card.Title>
                            <Card.Text>
                                Brief description of the project goes here. Highlight key features and tech stack used.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={4}>
                    <Card>
                    <a href="https://fitnessfirstapp.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <Card.Img variant="top" src={FitnessFirstLogo} width="300" height="270" />
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
    );
}

export default Projects;