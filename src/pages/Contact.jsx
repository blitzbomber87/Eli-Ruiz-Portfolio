import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function Contact() {
    return (
        <Container className="mt-5">
            <h1 className="text-center">Contact Me</h1>
            <Form className="mt-4">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Your message" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default Contact;