import React from 'react';
import me from '../assets/profile.jpg';
import '../styles/About.css';

export default function About() {
    return (
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <img src={me} alt="" className="me"></img>
            
            <p className="intro">
                Welcome to my vibrant portfolio! I'm Irene, a passionate individual who recently earned a Master's degree from the prestigious Columbia University. As I embarked on my post-graduate journey, I yearned to explore exciting and prosperous domains like the tech industry. 
            </p>
            
            <p className="intro">
                Always eager to learn and grow, I'm currently immersing myself in the ever-evolving world of front-end development.
            </p>

            <p className="intro">
                Within this portfolio, you'll discover a collection of dynamic applications that I've personally crafted and deployed. Each project I present here demonstrates my commitment to creativity, dedication, and proficiency in utilizing cutting-edge technologies.  Please feel free to explore the outcomes of my continuous drive for self-improvement.
            </p>

            <p className="intro">
                Thank you for taking the time to visit my portfolio, and I look forward to connecting with you soon!
            </p>
        </section>
    );
}
