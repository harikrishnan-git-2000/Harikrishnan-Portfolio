import React, { useState, useEffect } from 'react';
import { navLinks } from "../constants/index.js";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // FIX: Changed path to be relative to the site root
    const resumeUrl = '/Harikrishnan_Resume.pdf';

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner">
                <a className="logo" href="#heroSect">Harikrishnan</a>

                <nav className="desktop ml-45">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex gap-4">
                    {/* This href is now correct */}
                    <a href={resumeUrl} download className="contact-btn group">
                        <div className="inner">
                            <span>Download CV</span>
                        </div>
                    </a>

                    <a href = "#contactSect" className="contact-btn-secondary hidden md:block">
                        <div className="sec-inner">
                            <span>Contact Me</span>
                        </div>
                    </a>

                </div>
            </div>
        </header>
    );
};

export default NavBar;