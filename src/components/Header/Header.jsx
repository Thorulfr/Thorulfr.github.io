// Imports
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentPage, setCurrentPage }) => {
    const hamburgerToggle = () => {
        console.log('here');
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
        <header id="nav-header">
            {/* Colored div to block the sliding links */}
            {/* <div className="absolute w-full h-28 z-10 transition duration-200 2xl:w-16 2xl:h-10 2xl:left-0 2xl:top-4"></div> */}
            {/* Actual header */}
            <nav className="w-full border border-indigo-600">
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
                    <div>Benjamin Holt</div>
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
            </nav>
        </header>
    );
};

export default Header;
