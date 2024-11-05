// src/components/Contact.js // 

import React from 'react';
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

export default Contact;