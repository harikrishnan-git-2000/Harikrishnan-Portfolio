import React from 'react';

const Button = ({ text, className, href, onClick }) => {
    const handleClick = (e) => {
        e.preventDefault(); // Prevent the default anchor behavior

        // If an onClick handler is provided, call it
        if (onClick) {
            onClick(e);
        }

        // Scroll to the target section smoothly
        const targetSection = document.querySelector(href);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'scroll-smooth' });
        }
    };

    return (
        <a 
            href="#work"
            onClick={handleClick}
            className={`${className ?? ''} cta-wrapper`}
        >
            <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text">{text}</p>
                <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="SeeMyWork" />
                </div>
            </div>
        </a>
    );
};

export default Button;