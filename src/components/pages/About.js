import React from 'react';
import me from '../assets/profile.jpg';
import '../styles/About.css';

export default function About() {
  return (
    <section className="my-5">
      <img src={me} alt="" className="me" />

      <div className="window" style={{ width: '550px' }}>
        <div className="title-bar">
          <div className="title-bar-text">About Me</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" className="button"></button>
            <button aria-label="Maximize" className="button"></button>
            <button aria-label="Close" className="button"></button>
          </div>
        </div>
        <div className="window-body">
        <p className="intro">
         Hello, welcome to my vibrant portfolio!
        </p>
         <p className="intro">
            I'm Irene, a passionate individual who recently earned a Master's degree from Columbia University. After completing my graduate studies, my goal was to explore opportunities in the tech industry that would allow me to merge my creative pursuits and technology into a single integrated role.
          </p>
          <p className="intro">
            Within this portfolio, you'll discover a collection of dynamic applications that I've personally crafted and deployed. The projects I showcase here highlight my dedication to creativity, proficiency in using advanced technologies, and a keen eye for aesthetics. Feel free to explore the results of my ongoing pursuit of self-improvement.
          </p>
          <p className="intro">
            Thank you for taking the time to visit my portfolio, and I look forward to connecting with you soon!
          </p>
        </div>
      </div>
    </section>
  );
}


