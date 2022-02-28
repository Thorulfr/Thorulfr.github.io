// Imports
import React from 'react';

// Component imports
import Project from '../components/Project';

// Utility Imports
import projects from '../utils/projects';

const Portfolio = () => {
    return (
        <main className="px-4 md:px-12 lg:px-32 xl:grid xl:grid-cols-2 xl:my-6">
            <div>
                <Project project={projects.typePlusPlus} />
                <div className="border-2 mx-14 rounded-full"></div>
            </div>
            <div>
                <Project project={projects.numberOneFan} />
                <div className="border-2 mx-14 rounded-full"></div>
            </div>
            <div>
                <Project project={projects.streamability} />
                <div className="border-2 mx-14 rounded-full"></div>
            </div>
            <div>
                <Project project={projects.weatherDashboard} />
                <div className="border-2 mx-14 rounded-full"></div>
            </div>
            <div>
                <Project project={projects.budgetTracker} />
                <div className="border-2 mx-14 rounded-full xl:hidden"></div>
            </div>
            <Project project={projects.socialNetworkAPI} />
        </main>
    );
};

export default Portfolio;
