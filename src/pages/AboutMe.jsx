// Imports
import React from 'react';

const AboutMe = () => {
    return (
        <main className="flex flex-col">
            <img
                src="assets/images/self-portrait.jpg"
                alt="Benjamin in a lava field in northern Iceland"
                className="my-6 mx-12 rounded-bl-2xl rounded-tr-2xl"
            ></img>
            <div className="text-justify px-6">
                <p>
                    I'm a full-stack web developer with a penchant for creating
                    especially pleasing user experiences. I've recently
                    completed the University of Utah's full-stack coding
                    bootcamp, but my passion for coding and design hearkens back
                    to time spent building Geocities pages and making Flash
                    animations as an early teen.
                </p>
                <p className="pt-4">
                    My education includes an undergraduate degree in German
                    Literature and Linguistics and a Master of Arts degree from
                    the University of Iceland in comparative historical
                    linguistics and network analysis as applied to Swedish and
                    Danish runic inscriptions. I've been a linguistics-nut since
                    about the age of 13, when I first started studying German. I
                    also am an avid fan of guitar, synthesizer, and all things
                    80s.
                </p>
                <p className="py-4">
                    Also, my degree officially bestows upon me the title 'Nordic
                    Master of Viking and Medieval Norse Studies'. Ask me about
                    it!
                </p>
            </div>
        </main>
    );
};

export default AboutMe;
