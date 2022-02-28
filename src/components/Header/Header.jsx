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
        document.getElementById('nav-list').classList.toggle('navlist-active');
        document
            .getElementById('header-top')
            .classList.toggle('navlist-active');
    };

    return (
        <header id="nav-header" className="shadow-sm bg-theme-lilac/[.20]">
            {/* Header top */}
            <div
                id="header-top"
                className="w-full flex justify-between items-center p-2 transition-all duration-300 translate-y-4"
            >
                {/* Logo for mobile */}
                <div className="flex justify-center items-center pl-2 text-2xl h-10 ">
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
                    <Link
                        to="/"
                        className="text-theme-pink text-lg md:text-2xl"
                    >
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
            <nav className="w-full flex justify-center">
                <ul
                    id="nav-list"
                    className="w-full flex justify-around pb-1 text-theme-purple -translate-x-full transition-all duration-300 sm:w-4/5 sm:-translate-x-[250%] md:text-lg xl:w-2/3 2xl:w-1/2"
                >
                    <li>
                        <Link
                            to="/"
                            onClick={() => setCurrentPage('/')}
                            className={`hover:text-theme-orange transition-all duration-300 ${
                                currentPage === '/' && 'text-theme-orange'
                            }`}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/portfolio"
                            onClick={() => setCurrentPage('portfolio')}
                            className={`hover:text-theme-orange transition-all duration-300 ${
                                currentPage === 'portfolio' &&
                                'text-theme-orange'
                            }`}
                        >
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/resume"
                            onClick={() => setCurrentPage('resume')}
                            className={`hover:text-theme-orange transition-all duration-300 ${
                                currentPage === 'resume' && 'text-theme-orange'
                            }`}
                        >
                            Resume
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            onClick={() => setCurrentPage('contact')}
                            className={`hover:text-theme-orange transition-all duration-300 ${
                                currentPage === 'contact' && 'text-theme-orange'
                            }`}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
