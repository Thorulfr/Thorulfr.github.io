function Project(name, description, githubLink, deployedLink, imagePath) {
    this.name = name;
    this.description = description;
    this.githubLink = githubLink;
    this.deployedLink = deployedLink;
    this.imagePath = imagePath;
}

const budgetTracker = new Project(
    'Budget Tracker',
    'PWA with offline functionality',
    'https://github.com/Thorulfr/traveling-budget-tracker',
    'https://pure-refuge-57011.herokuapp.com/',
    'assets/screenshots/budget-tracker-screenshot.png'
);

const numberOneFan = new Project(
    'No. 1 Fan',
    'Full-stack music app',
    'https://github.com/Thorulfr/no1fan',
    'https://no1fan.herokuapp.com/',
    'assets/screenshots/no-1-fan-screenshot.png.'
);

const socialNetworkAPI = new Project(
    'Social Network API',
    'Back-end for a sample social network',
    'https://github.com/Thorulfr/social-network-api',
    'https://www.youtube.com/watch?v=MOfmfsOLSZk',
    'assets/screenshots/social-network-api-screenshot.png'
);

const streamability = new Project(
    'Streamability',
    'Full-stack streaming amalgamator',
    'https://github.com/Thorulfr/Streamability',
    'https://streamability.herokuapp.com/',
    'assets/screenshots/streamability-screenshot.png'
);

const typePlusPlus = new Project(
    'Type++',
    'MERN-stack typing hub',
    'https://github.com/Thorulfr/type-Plus-Plus',
    'https://typeplusplus.herokuapp.com/',
    'assets/screenshots/type-plus-plus-screenshot.png'
);

const weatherDashboard = new Project(
    'Should I Go Outside?',
    'API-centric weather app',
    'https://github.com/Thorulfr/weather-dashboard',
    'https://thorulfr.github.io/weather-dashboard/',
    'assets/screenshots/weather-dashboard-screenshot.png'
);

const projects = {
    budgetTracker: budgetTracker,
    numberOneFan: numberOneFan,
    socialNetworkAPI: socialNetworkAPI,
    streamability: streamability,
    typePlusPlus: typePlusPlus,
    weatherDashboard: weatherDashboard,
};

export default projects;
