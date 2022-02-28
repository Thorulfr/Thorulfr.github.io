// Imports
import React from 'react';

function Project(project) {
    return (
        <div className="m-2 rounded-lg flex flex-col justify-around items-center xl:px-16">
            <span className="text-lg text-center m-1 underline underline-offset-1 decoration-1">
                {project.project.name}
            </span>
            <img
                src={project.project.imagePath}
                alt="Application screenshot"
                className="m-3 rounded-bl-2xl rounded-tr-2xl"
            />
            <p className="text-center">{project.project.description}</p>
            <div className="w-1/2 flex justify-evenly items-center p-1 mb-1">
                <a
                    href={project.project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="assets/images/github-logo.svg"
                        className="h-8 w-8"
                        alt="Github logo"
                    />
                </a>
                <a
                    href={project.project.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default Project;
