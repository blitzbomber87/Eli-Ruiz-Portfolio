import React from 'react';
// import { Link } from 'react-router-dom';
import myImage1 from '../assets/images/ProfilePicEliRuiz.jpg';

const AboutMe = () => {
    return (
      <div class="d-flex flex-column justify-content-center"> 
        
        <h1>About Me</h1>
        
        
        <img 
        src={myImage1}
        width="200"
        height="220"
        className="d-inline-block align-center"
        alt="ProfilePicture" />
        
        <p>
        Hello, my name is Eli and I'm an avid coder hobbyist and professional. I am currently learning programming languages such as HTML, CSS and JavaScript. I am also familiar with the react and bootstrap libraries. I am looking to master these 3 basic languages along with many more so I can start a career in the software development industry. AI has also caught my interest as I believe it is the inevitable future for all computer technology. Take a look at some of my projects!
        </p>
      </div>
    );
  };
  export default AboutMe;