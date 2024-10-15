import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import FitnessFirstLogo from '../assets/images/FitnessFirstLogo.jpg';
import BrooksideHotel from '../assets/images/My-Brookside-Hotel.jpg';

function Projects() {
    return (
        <Container className="mt-5">
            <h1 className="text-center">My Projects</h1>
            <Row className="mt-4">
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={FitnessFirstLogo} />
                        <Card.Body>
                            <Card.Title>Project Title</Card.Title>
                            <Card.Text>
                                Brief description of the project goes here. Highlight key features and tech stack used.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={BrooksideHotel} />
                        <Card.Body>
                            <Card.Title>Project Title</Card.Title>
                            <Card.Text>
                                Brief description of the project goes here. Highlight key features and tech stack used.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={FitnessFirstLogo} />
                        <Card.Body>
                            <Card.Title>Project Title</Card.Title>
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