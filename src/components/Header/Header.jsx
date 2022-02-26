// Imports
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentPage, setCurrentPage }) => {
    const hamburgerToggle = () => {
        document
            .getElementById('hamburger-top')
            .classList.toggle('button-transform-top-active');
        document
            .getElementById('hamburger-middle')
            .classList.toggle('button-transform-middle-active');
        document
            .getElementById('hamburger-bottom')
            .classList.toggle('button-transform-bottom-active');
        // document
        //     .getElementById('nav-list')
        //     .classList.toggle('navbar-nav-active');
        // document.getElementById('nav-list').classList.toggle('max-h-[0px]');
        // document.getElementById('nav-list').classList.toggle('max-h-[200px]');
        // document.getElementById('toggle-container').classList.toggle('hidden');

        // document.getElementById('menu-tag').classList.toggle('text-theme-red');
        // let navLinks = document.getElementsByClassName('nav-link');
        // for (let i = 0; i < navLinks.length; i++) {
        //     navLinks[i].classList.toggle('nav-active');
        // }
    };

    return (
        <header id="nav-header" className="border border-indigo-600">
            {/* Header top */}
            <div className="w-full flex justify-between items-center 2xl:grid 2xl:grid-cols-3 p-2">
                {/* Logo for mobile */}
                <div className="flex justify-center items-center pl-2 text-2xl h-10 2xl:hidden">
                    {localStorage.theme === 'light' ? (
                        <img
                            src="/assets/images/logo.svg"
                            alt="Benjamin Holt monogram"
                            className="h-full z-20"
                            id="logo-image-mobile"
                        />
                    ) : (
                        <img
                            src="/assets/images/logo.svg"
                            alt="Benjamin Holt monogram"
                            className="h-full z-20"
                            id="logo-image-mobile"
                        />
                    )}
                </div>
                {/* Me + home link */}
                <div>
                    <Link to="/" className="text-theme-pink">
                        Benjamin Holt
                    </Link>
                </div>
                {/* Menu toggle */}
                <div className="">
                    <button
                        className="w-10 h-10 flex justify-center items-center focus:outline-none z-20 text-theme-purple"
                        onClick={hamburgerToggle}
                    >
                        <span className="sr-only">Open main menu</span>
                        {/* Hamburger elements */}
                        <div className="block w-5 ">
                            <span
                                id="hamburger-top"
                                aria-hidden="true"
                                className="block h-0.5 w-5 bg-current transition-all duration-300 -translate-y-1 rounded-full"
                            ></span>
                            <span
                                id="hamburger-middle"
                                aria-hidden="true"
                                className="block h-0.5 w-5 bg-current transition-all duration-300 rounded-full"
                            ></span>
                            <span
                                id="hamburger-bottom"
                                aria-hidden="true"
                                className="block h-0.5 w-5 bg-current transition-all duration-300 translate-y-1 rounded-full"
                            ></span>
                        </div>
                    </button>
                </div>
            </div>
            {/* Header bottom/Nav */}
            <nav className="w-full">
                <ul
                    id="nav-list"
                    className="flex justify-around text-theme-purple"
                >
                    <li>
                        <Link to="/about-me">About</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Work</Link>
                    </li>
                    <li>
                        <Link to="/resume">Resume</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
