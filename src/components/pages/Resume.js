import React from 'react';
import ResumePDF from '../assets/Akram, Irene Resume.pdf';
import '../styles/Resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function Resume() {
  return (
    <section className="resume">
      <h1>Resume</h1>
      <div className="download">
        <h2>Download Resume</h2>
        <a href={ResumePDF} download><FontAwesomeIcon icon={faDownload} /> Download</a>
      </div>
      <div>
        <h3 className="front">Front-End Proficiencies</h3>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            CSS
            <span className="badge badge-primary badge-pill">14</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            JavaScript
            <span className="badge badge-primary badge-pill">2</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            React
            <span className="badge badge-primary badge-pill">2</span>
          </li>
        </ul>
        <h3 className="back">Back-End Proficiencies</h3>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Node.js
            <span className="badge badge-primary badge-pill">14</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Express.js
            <span className="badge badge-primary badge-pill">2</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Jest
            <span className="badge badge-primary badge-pill">1</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

