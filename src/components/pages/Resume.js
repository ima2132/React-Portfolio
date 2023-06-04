import React from 'react';
import ResumePDF from '../assets/Akram, Irene Resume.pdf';
import '../styles/Resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function Resume() {
  return (
    <section className="resume">
      <h1 className="resume-heading">Resume</h1>
      
      <div className="download">
        <h2></h2>
        <a href={ResumePDF} download><FontAwesomeIcon icon={faDownload} /> Download Resume</a>
      </div>

      <div>
        <h3 className="front">Front-End Proficiencies</h3>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            CSS
            <span className="badge badge-primary badge-pill"></span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            JavaScript
            <span className="badge badge-primary badge-pill"></span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            React
            <span className="badge badge-primary badge-pill"></span>
          </li>
        </ul>
      </div>
      
      <div>
        <h3 className="back">Back-End Proficiencies</h3>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Node.js
            <span className="badge badge-primary badge-pill"></span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Express.js
            <span className="badge badge-primary badge-pill"></span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            MySQL
            <span className="badge badge-primary badge-pill"></span>
          </li>
        </ul>
      </div>
    </section>
  );
}

