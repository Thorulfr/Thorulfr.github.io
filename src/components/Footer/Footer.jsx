import React from 'react';

function Footer() {
    return (
        <footer className="bg-theme-lilac/[.30]">
            <div className="flex justify-around items-center pt-3">
                <a
                    href="https://www.linkedin.com/in/benjamin-thorulfr-holt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 hover:opacity-75"
                >
                    <img
                        src="assets/images/linkedin-logo.svg"
                        alt="LinkedIn logo"
                        className="h-10"
                    />
                </a>
                <a
                    href="https://github.com/Thorulfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 hover:opacity-75"
                >
                    <img
                        src="assets/images/github-logo-large.svg"
                        alt="GitHub logo"
                        className="h-8"
                    />
                </a>
                <a
                    href="https://stackoverflow.com/users/16655462/thorulfr?tab=profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 hover:opacity-75"
                >
                    <svg aria-hidden="true" height="2rem" viewBox="0 0 32 37">
                        <path
                            d="M26 33v-9h4v13H0V24h4v9h22Z"
                            fill="#190E4F"
                        ></path>
                        <path
                            d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
                            fill="#E83F6F"
                        ></path>
                    </svg>
                </a>
            </div>
            <div className="text-center m-3">
                © 2022{' '}
                <a
                    className="hover:text-theme-orange transition-all duration-300"
                    // Update this link
                    href="https://www.youtube.com/watch?v=qHAHEhhJisk"
                    target="_blank"
                    rel="noreferrer"
                >
                    Benjamin Holt
                </a>
            </div>
        </footer>
    );
}

export default Footer;
