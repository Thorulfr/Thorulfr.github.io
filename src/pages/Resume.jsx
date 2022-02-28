// Imports
import React from 'react';

const Resume = () => {
    return (
        <main className="grow flex flex-col">
            <div className="grow m-4">
                <iframe
                    src="assets/CV.pdf"
                    title="Benjamin Holt's CV"
                    height="100%"
                    width="100%"
                ></iframe>
            </div>
        </main>
    );
};

export default Resume;
