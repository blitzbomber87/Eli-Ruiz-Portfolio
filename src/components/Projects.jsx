import React from 'react';
import FitnessFirstLogo from '../assets/images/FitnessFirstLogo.jpg';
import BrooksideHotel from '../assets/images/BrooksideHotel.jpg';
import MovieNightApp from '../assets/images/MovieNight.jpg';

const projects = [
  {
    id: 1,
    title: 'Movie Night App',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: MovieNightApp,
    alt: 'Movie Night App',
    link: 'https://mymovienightapp.netlify.app',
    source: 'https://github.com/blitzbomber87/Movie-Night-App'
  },
  {
    id: 2,
    title: 'Fitness First App',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: FitnessFirstLogo,
    alt: 'Fitness First Logo',
    link: 'https://fitnessfirstapp.netlify.app',
    source: 'https://github.com/blitzbomber87/FitnessFirst'
  },
  {
    id: 3,
    title: 'Brookside Hotel',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
