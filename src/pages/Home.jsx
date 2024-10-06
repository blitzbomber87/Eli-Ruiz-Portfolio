import React from 'react';
import { Container } from 'react-bootstrap';
import profilePic from '../assets/images/ProfilePicEliRuiz.jpg';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <Container className="text-center">
            <h1>Eli Ruiz</h1>
            <img 
            src={profilePic}
            width="250"
            height="300"
            alt="ProfilePicture"/>
            <p>Hello, my name is Eli and im a professional and avid coder!</p>
        </Container>
       
    );
}

export default Home;