import React from 'react';

function Footer() {
    return (
        <footer className="bg-theme-lilac/[.30]">
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
