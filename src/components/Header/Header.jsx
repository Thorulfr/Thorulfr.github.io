// Imports
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Header() {
    return (
        <header className="flex justify-around">
            <Link to="/" className="">
                <h1>Benjamin Holt</h1>
            </Link>
            <nav className="">
                <ul className="flex justify-around">
                    <Link to="/about-me">
                        <li>About Me</li>
                    </Link>
                    <Link to="/portfolio">
                        <li>My Portfolio</li>
                    </Link>
                    <Link to="/contact">
                        <li>Contact Me</li>
                    </Link>
                    <Link to="/resume">
                        <li>Resume</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
