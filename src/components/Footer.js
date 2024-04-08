import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../componentStyles/Footer.css";


// Contact info sub-component
const ContactInfo = () => (
  <section className="footer-contact-info">
    <h2 className="footer-heading">Join Us</h2>
    <p className="footer-contact-access">Email: vancouver@reactnative.ca</p>
    <p className="footer-contact-access">Mobile: 604-123-5678</p>
  </section>
)


// Social links sub-component
const SocialLinks = ({ platform, link }) => (
  <a href={`https://www.${platform}.com/`}
    aria-label={`${platform} link`}
    rel="noopener noreferrer"
    target="_blank"
  >
    {platform === 'facebook' && <FaFacebook />}
    {platform === 'instagram' && <FaInstagram />}
    {platform === 'twitter' && <FaTwitter />}
  </a>
)


const Footer = () => {
  const socialPlatforms = ['facebook', 'instagram', 'twitter'];

  return (
    <footer id="footer" className="footer">
      <ContactInfo />
      <section className="footer-social-links">
        <h2>Social Links</h2>
        <div className="social-icons">
          {socialPlatforms.map(platform => <SocialLinks platform={platform} key={platform} />)}
        </div>
      </section>
    </footer>
  )
}

export default Footer;



