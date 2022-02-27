// Imports
import React from 'react';

// Component imports
import Project from '../components/Project';

// Utility Imports
import projects from '../utils/projects';

const Portfolio = () => {
    return (
        <main>
            <div>Portfolio</div>
            <Project project={projects.budgetTracker} />
        </main>
    );
};

export default Portfolio;
