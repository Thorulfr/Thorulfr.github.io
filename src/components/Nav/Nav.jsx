// Imports
import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav() {
    return (
        <header className="">
            <h1>Benjamin Holt</h1>
            <nav>
                <ul>
                    <li>About Me</li>
                    <li>My Work</li>
                    <li>Contact Me</li>
                    <li>Resume</li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
