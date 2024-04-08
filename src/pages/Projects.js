import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import data from '../data/projects.json';
import "../componentStyles/Projects.css";


const ProjectsHeading = () => (
  <div className="heading">
    <h2 id="projectH2">Projects</h2>
  </div>
);


const ProjectSlide = ({ project, index }) => (
  <div key={index} className="project" role="group" aria-label={`Project ${index + 1}`}>
    <img src={project.image} alt={`Project titled ${project.name}`} />
    <h3 className="name">{project.name}</h3>
    <p className={project.description.length > 130 ? 'description-min' : 'description'}>
      {project.description}
    </p>
    <a className="project-button" target="_blank" href={project.link} rel="noopener noreferrer" aria-label="Opens project in a new tab">
      View Project
    </a>
  </div>
);


const ProjectsSlider = ({ settings }) => (
  <div className="projects-container">
    <Slider {...settings}> 
      {data.map((project, index) => (
        <ProjectSlide project={project} index={index} />
      ))}
    </Slider>
  </div>
);


const Projects = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true, 
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id='projects' className='projects' aria-label="Projects">
      <ProjectsHeading />
      <ProjectsSlider settings={settings} />
    </section>
  );
}

export default Projects;

