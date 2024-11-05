/* Home.jsx */

import React from 'react';
import profilePic from '../assets/images/ProfilePicEliRuiz.jpg';

const Home = () => (
  <section id="home" className="section text-center pt-5 pb-5">
    <img 
            src={profilePic}
            width="250"
            height="300"
            alt="ProfilePicture"/>
    <p>Hello. Im Eli...</p>
  </section>
);

export default Home;