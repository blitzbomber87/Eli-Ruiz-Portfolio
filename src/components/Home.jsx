/* Home.jsx */

import React from "react";
import profilePic from "../assets/images/ProfilePicEliRuiz.jpg";

const Home = () => (
  <section id="home" className="d-flex flex-column align-items-center py-5 bg-black text-white">
    <img
      src={profilePic}
      className="rounded-circle mb-4"
      alt="Eli Ruiz"
      style={{ width: "250px", height: "300px", objectFit: "cover" }}
    />
    <h1 className="mb-3">Hello, I'm Eli</h1>
    <p className="text-center" style={{ maxWidth: "600px" }}>
      Welcome to my portfolio! I’m passionate about building beautiful, user-friendly applications. Explore my work and get to know me better.
    </p>
  </section>
);

export default Home;
