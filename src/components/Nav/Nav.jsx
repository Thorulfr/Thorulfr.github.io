// Imports
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav() {
    return (
        <header className="flex justify-around">
            <Link to="/" className="grow-0">
                <h1>Benjamin Holt</h1>
            </Link>
            <nav className="">
                <ul className="flex justify-">
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
