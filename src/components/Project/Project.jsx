// Imports
import React from 'react';

function Project(project) {
    return (
        <div>
            <p>{project.project.name}</p>
            <p>{project.project.description}</p>
            <p>{project.project.githubLink}</p>
            <p>{project.project.deployedLink}</p>
            <img
                src={project.project.imagePath}
                alt="Application screenshot"
            ></img>
        </div>
    );
}

export default Project;
