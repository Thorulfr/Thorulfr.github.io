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
            <div className="border-2 mx-16 rounded-full"></div>
            <Project project={projects.numberOneFan} />
            <div className="border-2 mx-16 rounded-full"></div>
            <Project project={projects.streamability} />
            <div className="border-2 mx-16 rounded-full"></div>
            <Project project={projects.weatherDashboard} />
            <div className="border-2 mx-16 rounded-full"></div>
            <Project project={projects.budgetTracker} />
            <div className="border-2 mx-16 rounded-full"></div>
            <Project project={projects.socialNetworkAPI} />
        </main>
    );
};

export default Portfolio;
