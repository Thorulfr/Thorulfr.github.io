// Imports
import React from 'react';

// Component imports
import Project from '../components/Project';

// Utility Imports
import projects from '../utils/projects';

const Portfolio = () => {
    return (
        <main className="">
            <Project project={projects.typePlusPlus} />
            <Project project={projects.numberOneFan} />
            <Project project={projects.streamability} />
            <Project project={projects.weatherDashboard} />
            <Project project={projects.budgetTracker} />
            <Project project={projects.socialNetworkAPI} />
        </main>
    );
};

export default Portfolio;
