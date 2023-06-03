import React from 'react';
import Project from './Project';
import '../styles/Project.css';

import codingquiz from '../assets/coding quiz.png';
import weatherbuddy from '../assets/weather buddy.png';
import teamprofile from '../assets/team profile generator.png';
import travelhub from '../assets/travel hub.jpeg';
import justreadit from '../assets/just read it.png';
import workday from '../assets/work day scheduler.png';


function Portfolio() {
    const projects = [
        {
            id: 1,
            title: "A {Function} of Your Time: Can You Beat The Clock?",
            img: codingquiz,
            github: "https://github.com/ima2132/Code-Quiz",
            deployed: "https://ima2132.github.io/Code-Quiz/",
        },
        {
            id: 2,
            title: "Weather Buddy",
            img: weatherbuddy,
            github: "https://github.com/ima2132/Weather-Buddy",
            deployed: "https://ima2132.github.io/Weather-Buddy/",
        },
        {
            id: 3,
            title: "Team Profile Generator",
            img: teamprofile,
            github: "https://github.com/ima2132/Team-Profile-Generator",
        },
        {
            id: 4,
            title: "Travel Hub",
            img: travelhub,
            github: "https://github.com/savitamanchanda/Travel-Hub",
            deployed: "https://savitamanchanda.github.io/Travel-Hub/",
        },
        {
            id: 5,
            title: "Just Read It",
            img: justreadit,
            github: "https://github.com/analisegiobbi3/Just_Read_It",
            deployed: "https://warm-cove-40506.herokuapp.com/",
        },
        {
            id: 6,
            title: "Work Day Scheduler",
            img: workday,
            github: "https://github.com/ima2132/Work-Day-Scheduler",
            deployed: "https://ima2132.github.io/Work-Day-Scheduler/",
        },
    ];

    return (
        <div>
            <Project projects={projects} />
        </div>
    );
}

export default Portfolio;

