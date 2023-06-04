import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/ima2132">
        <FontAwesomeIcon icon={faGithub} />
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/irene-akram-a384141b2/">
        <FontAwesomeIcon icon={faLinkedinIn} />
        LinkedIn
      </a>
      <a href="mailto:ima2132@columbia.edu">
        <FontAwesomeIcon icon={faEnvelope} />
        Email
      </a>
    </footer>
  );
}

