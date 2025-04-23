import React from 'react';
import FitnessFirstLogo from '../assets/images/FitnessFirstLogo.jpg';
import BrooksideHotel from '../assets/images/BrooksideHotel.jpg';
import MovieNightApp from '../assets/images/MovieNight.jpg';

const projects = [
  {
    id: 1,
    title: 'Movie Night App',
    description:
      'Movie Night Database is a responsive web application designed to help users discover and manage movies for their movie nights. It features movie search, trending recommendations, detailed information modals, embedded trailers, and a persistent favorites list stored in local storage.It utilizes HTML, Bootstrap, jQuery and various APIs',
    image: MovieNightApp,
    alt: 'Movie Night App',
    link: 'https://mymovienightapp.netlify.app',
    source: 'https://github.com/blitzbomber87/Movie-Night-App'
  },
  {
    id: 2,
    title: 'Fitness First App',
    description:
      'Fitness First is a full-stack web application developed using the MERN stack method. It allows users to log workouts and goals to monitor their progress toward a healthier lifestyle. Features include... User authentication (sign up / log in),Dashboard to view workouts and goals. As well as modular components for logging workouts and setting fitness goals. Also a responsive frontend design using React. It utilizes the following technologies: React, Vite, JSX, Node.js, Express and MongoDB.',
    image: FitnessFirstLogo,
    alt: 'Fitness First Logo',
    link: 'https://fitnessfirstapp.netlify.app',
    source: 'https://github.com/blitzbomber87/FitnessFirst'
  },
  {
    id: 3,
    title: 'Brookside Hotel',
    description:
      'Brookside Hotel is a full-stack web application that provides a modern, user-friendly interface for travelers to seamlessly manage their hotel bookings. It enables hotel guests to... Browse available rooms Register and log in Book and reserve their stay online. This app follows MVC architecture and utilizes Node.js, Express.js, PostgreSQL, Sequelize, Nodemailer and server-side rendering.',
    image: BrooksideHotel,
    alt: 'Brookside Hotel',
    link: 'https://my-brookside-hotel.onrender.com',
    source: 'https://github.com/blitzbomber87/My-Brookside-Hotel'
  },
];

const Projects = () => (
  <section id="projects" className="py-5 bg-black text-white">
    <div className="container">
      <h2 className="text-center mb-4">My work so far...</h2>
      <p className="text-center mb-5">
        Explore some of the projects I've worked on, showcasing skills in
        development, design, and creativity.
      </p>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-4 col-sm-6 mb-4">
            <div className="card h-100 shadow-sm">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                className="card-img-top project-image"
                alt={project.alt}
              />
              </a>
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            <div className="card-footer bg-transparent">
            <a
                  href={project.source}
                  className="btn btn-primary w-100 mb-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
        </a>
        </div>
        </div>
          </div>
        ))}
        
      </div>
    </div>
  </section>
);

export default Projects;
