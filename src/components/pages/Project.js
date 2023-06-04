import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Project.css';

const Project = ({ projects }) => {

    const renderProject = (project) => (
        <div className="card-grid" key={project.id}>
            <img className="p-img" src={project.img} alt={project.title}></img>  
            <a href={project.deployed} className="card-link">{project.title}</a>
            <a href={project.github} className="card-link"><FontAwesomeIcon icon="Fa-Github" /></a>
        </div> 
    );

    return ( 
        <div className="p-grid">
            {projects.map(renderProject)}
        </div>
    )
}

export default Project;
