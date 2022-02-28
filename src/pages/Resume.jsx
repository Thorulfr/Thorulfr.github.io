// Imports
import React from 'react';

const Resume = () => {
    return (
        <main className="grow flex flex-col justify-around items-center px-4">
            <div className="mt-4 flex flex-col justify-around items-center text-theme-purple">
                <p className="mb-4">My proficiencies:</p>
                <div className="flex flex-wrap justify-center">
                    <img
                        src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                        alt="Javascript badge"
                        className="p-1"
                    />
                    <img
                        src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
                        alt="HTML 5 badge"
                        className="p-1"
                    />
                    <img
                        src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                        alt="CSS3 badge"
                        className="p-1"
                    />
                    <img
                        src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
                        alt="GIT badge"
                        className="p-1"
                    />
                    <img
                        src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                        alt="Node.js badge"
                        className="p-1"
                    />
                    <img
                        src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"
                        alt="NPM badge"
                        className="p-1"
                    />
                    <img
                        src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
                        alt="Express.js badge"
                        className="p-1"
                    />
                    <img
                        src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
                        alt="MongoDB badge"
                        className="p-1"
                    />
                    <img
                        src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                        alt="React badge"
                        className="p-1"
                    />
                    <img
                        src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"
                        alt="React Router badge"
                        className="p-1"
                    />
                    <img
                        src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black"
                        alt="Webpack badge"
                        className="p-1"
                    />
                    <img
                        src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white"
                        alt="GraphQL badge"
                        className="p-1"
                    />
                    <img
                        src="https://img.shields.io/badge/Apollo%20GraphQL-311C87?&style=for-the-badge&logo=Apollo%20GraphQL&logoColor=white"
                        alt="Apollo GraphQL badge"
                        className="p-1"
                    />
                    <img
                        src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"
                        alt="JWT badge"
                        className="p-1"
                    />
                    <img
                        src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
                        alt="Tailwind CSS badge"
                        className="p-1"
                    />
                    <img
                        src="https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white"
                        alt="Markdown badge"
                        className="p-1"
                    />
                    <img
                        src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"
                        alt="Visual Studio Code badge"
                        className="p-1"
                    />
                    <img
                        src="https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white"
                        alt="Chart.js badge"
                        className="p-1"
                    />
                    <img
                        src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white"
                        alt="Heroku badge"
                        className="p-1"
                    />
                    <img
                        src="https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white"
                        alt="Trello badge"
                        className="p-1"
                    />
                </div>
            </div>
            <div className="grow w-full m-4 flex flex-col justify-around items-center text-theme-purple">
                <p className="mb-4">Resume</p>
                <iframe
                    src="assets/CV.pdf#view=fitH"
                    title="Benjamin Holt's CV"
                    height="95%"
                    width="95%"
                ></iframe>
            </div>
        </main>
    );
};

export default Resume;
