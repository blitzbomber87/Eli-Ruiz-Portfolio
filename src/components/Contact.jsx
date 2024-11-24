// Contact.jsx 

import React from "react";
import emailIcon from "../assets/images/email-icon.png";
import linkedinIcon from "../assets/images/linkedin-icon.png";
import githubIcon from "../assets/images/github-icon.png";

const Contact = () => (
  <section id="contact" className="contact bg-black text-white py-5">
    <div className="container text-center">
      <h2 className="mb-4">Contact Me</h2>
      <div className="d-flex justify-content-center align-items-center gap-4">
        <a href="mailto:example@example.com">
          <img
            className="icon"
            src={emailIcon}
            alt="Email icon"
            title="Email"
          />
        </a>
        <a href="https://github.com/blitzbomber87" target="_blank" rel="noreferrer">
          <img
            className="icon"
            src={githubIcon}
            alt="GitHub icon"
            title="GitHub"
          />
        </a>
        <a href="https://www.linkedin.com/in/elias-ruiz-51b71075/" target="_blank" rel="noreferrer">
          <img
            className="icon"
            src={linkedinIcon}
            alt="LinkedIn icon"
            title="LinkedIn"
          />
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
