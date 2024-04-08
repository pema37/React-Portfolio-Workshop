import React from 'react';
import AboutGroup from '../assets/AboutGroup.webp';
import '../componentStyles/About.css';

// Heading Component
const AboutHeading = () => (
  <h2 id='AbtH2'>About Us</h2>
);

// Description Component
const AboutDescription = () => (
  <p className='about-description'>
    Join us at React Native Vancouver, where dedicated developers showcase the power of React Native. Discover, learn, and connect with experts and enthusiasts alike. Let's shape the future of Web Development together.
  </p>
);

// Image Component with srcset for responsive images
const AboutImage = () => (
  <div className='about-image'>
    <img 
      srcSet={`
        ${AboutGroup} 300w,
        ${AboutGroup} 768w,
        ${AboutGroup} 1280w
      `}
      sizes="(max-width: 300px) 280px,
             (max-width: 768px) 748px,
             1280px"
      src={AboutGroup} // Fallback for browsers that do not support srcset
      alt='A vibrant gathering of React Native developers in Vancouver.' />
  </div>
);

// Gradient Background Wrapper
const GradientBackgroundWrapper = ({ children }) => (
  <div className="gradient-background-wrapper">
    {children}
  </div>
);

// Main About Component
const About = () => {
  return (
    <GradientBackgroundWrapper>
      <section id='about' className='about' aria-label='About Us Section'>
        <AboutHeading />
        <article className='about-content'>
          <AboutDescription />
          <AboutImage />
        </article>
      </section>
    </GradientBackgroundWrapper>
  );
};

export default About;

