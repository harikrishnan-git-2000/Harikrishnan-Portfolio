import React, { useEffect, useRef } from 'react';
import TitleHeader from "../components/TitleHeader.jsx"; // Adjust path if needed
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

// --- Component Constants ---
// Assuming ProfilePhoto.png is in public/images
const profilePicUrl = './ASSETS/ProfilePhoto.webp';

// FIX: Changed path to be relative to the site root
const resumeUrl = './Harikrishnan-Resume.pdf';

gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

function AboutMe() {
    // --- Refs for Animation Targets ---
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    // const gridRef = useRef(null); // Grid ref might not be needed if triggering children
    const leftColRef = useRef(null);
    const rightColRef = useRef(null);

    // --- GSAP Animation Effect with ScrollTrigger ---
    useEffect(() => {
        const sectionEl = sectionRef.current;
        const titleEl = titleRef.current;
        const leftColEl = leftColRef.current;
        const rightColEl = rightColRef.current;

        // Ensure elements exist before animating
        if (!sectionEl || !leftColEl || !rightColEl) return;

        // Set initial states (hidden) - These remain the same
        gsap.set([leftColEl, rightColEl], { opacity: 0, y: 50 });
        if (titleEl) gsap.set(titleEl, { opacity: 0, y: 30 });

        // Create a timeline for animations triggered by ScrollTrigger
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionEl,       // Element that triggers the animation
                start: "top 90%",         // Animation starts when the top of sectionEl hits 75% down from the viewport top
                end: "bottom center",  // Optional: define when the trigger ends
                toggleActions: "play none none none", // "onEnter onLeave onEnterBack onLeaveBack" -> play animation on enter
                scrub: true, // Optional: Smoothly animate based on scroll position
                // markers: true, // Optional: Show visual markers for debugging start/end points
                once: false                // Optional: Only trigger the animation once
            },
            defaults: { duration: 0.8, ease: 'power3.out' }
        });

        // Add animations to the timeline (these will now wait for the trigger)
        tl.to(titleEl, { opacity: 1, y: 0 }, 0.1) // Start title slightly sooner
            .to(leftColEl, { opacity: 1, y: 0 }, 0.3) // Animate left column
            .to(rightColEl, { opacity: 1, y: 0 }, 0.5); // Animate right column slightly after

        // Cleanup function (important for ScrollTrigger to avoid memory leaks)
        return () => {
            // Kill the timeline and its associated ScrollTrigger instance
            if (tl.scrollTrigger) {
                tl.scrollTrigger.kill();
            }
            tl.kill();
        };

    }, []); // Empty dependency array ensures this setup runs only once on mount


    // --- Component Return ---
    return (
        // Added ref to the main section
        <section
            id="about"
            ref={sectionRef} // Ref for ScrollTrigger
            // Use the darkest background, inherit text color from body (white-50)
            className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 "
            style={{ visibility: 'visible' }} // Keep visibility for initial render
        >
            {/* Centered content container */}
            <div className="max-w-6xl mx-auto">

                {/* --- Section Title --- */}
                {/* Added ref to TitleHeader container */}
                <div ref={titleRef}>
                    <TitleHeader
                        title="About Me"
                        sub="👨‍💻 Get to know me better"
                        // Assuming TitleHeader uses text-white-50 / inherits correctly
                        className="text-center mb-12 md:mb-16"
                    />
                </div>

                {/* --- Main Content Grid --- */}
                {/* Ref on grid might not be strictly needed if animating columns directly */}
                <div
                    // ref={gridRef} // Ref not strictly needed if triggering columns
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center"
                >

                    {/* --- Left Column: Profile Picture & Buttons --- */}
                    {/* Added ref to the left column */}
                    <div ref={leftColRef} className="flex flex-col items-center md:items-end gap-6">
                        <div className="w-full max-w-sm">
                            <img
                                src={profilePicUrl}
                                alt="Profile Harikrishnan R"
                                className="w-full h-auto rounded-3xl object-cover aspect-square border border-black-200/80 shadow-xl shadow-black-100/40"
                            />
                        </div>
                        <div className="flex flex-wrap gap-4 justify-center w-full max-w-sm">
                            {/* This href is now correct */}
                            <a href={resumeUrl} download className="btn group">
                                <div className="btn-inner">
                                    <span>Download CV</span>
                                </div>
                            </a>
                            <a href="#contactSect" className="contact-btn-secondary">
                                <div className="sec-inner">
                                    <span>Contact Me</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* --- Right Column: Text Content Only --- */}
                    {/* Added ref to the right column */}
                    <div ref={rightColRef} className="flex flex-col gap-5 md:gap-6 md:pl-4">
                        {/* Name and Title */}
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-1">
                                Harikrishnan R
                            </h2>
                            <p className="text-xl font-normal text-white-50">
                                Front-End Developer
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-base md:text-lg leading-relaxed text-white-50">
                            I'm a passionate Front-End Developer holding an <strong className='text-white font-semibold'>M.Sc. in Electronic Media (2019 - 2024) from Anna University</strong>. I thrive on transforming complex challenges into simple, beautiful, and intuitive digital experiences. My expertise spans <strong className='text-white font-semibold'>web development, UI/UX design, graphic design, and dynamic 2D/3D animation</strong>.
                        </p>

                        {/* Toolkit */}
                        <p className="text-base md:text-lg leading-relaxed text-white-50">
                            My toolkit features <strong className='text-white font-semibold'>HTML, CSS, JavaScript</strong>, frameworks like <strong className='text-white font-semibold'>React & Angular</strong>, and design platforms such as <strong className='text-white font-semibold'>Figma & Photoshop</strong>. I also bring ideas to life using <strong className='text-white font-semibold'>After Effects, Blender, and Unreal Engine 5</strong> for compelling animations and interactive visuals.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;