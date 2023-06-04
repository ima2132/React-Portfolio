import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/Project.css';

const Project = ({ projects }) => {

    const renderProject = (project) => (
        <div className="card-grid" key={project.id}>
            <img className="p-img" src={project.img} alt={project.title}></img>  
            <a href={project.deployed} className="card-link" target="_blank" rel="noopener noreferrer">{project.title}</a>
            {project.github && (
                <a href={project.github} className="card-link" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="github-icon" />
                </a>
            )}
        </div> 
    );

    return ( 
        <div className="p-grid">
            {projects.map(renderProject)}
        </div>
    )
}

export default Project;
