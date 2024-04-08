import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Avatar from '../assets/logo3.webp';
import MeetupLogo from '../assets/meetup.png';
import '../componentStyles/Body.css';



const Body = () => {
  return (
    <div id="body" className="body">
      <div className="body-container">
        <div className="body-profile">
          <img className="body-avatar" alt="React Native Vancouver" src={Avatar} />
          <div className="body-content">
            <h2 className="body-name">React Native Vancouver</h2>
            <p className="body-job">Meetup Group</p>
          </div>

          <div className="body-socials" role="contentinfo">
            <a aria-label="GitHub Profile" href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="icon-link">
              <FaGithub size={30} />
            </a>
            <a aria-label="LinkedIn Profile" href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="icon-link">
              <FaLinkedin size={30} />
            </a>
            <a aria-label="Meetup Page" href="https://www.meetup.com/vancouver-react-native-meetup/" target="_blank" rel="noreferrer" className="icon-link">
              <img src={MeetupLogo} alt="Meetup" width="30" height="30" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;



