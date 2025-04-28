import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Import BOTH data sources
import { projects, modalProjectDetails } from '../constants/index.js'; // Import projects (for cards) and modalProjectDetails
import TitleHeader from "../components/TitleHeader.jsx";
import ProjectCard from '../components/ProjectCard.jsx'; // Card component
import ProjectModal from '../components/ProjectModal.jsx'; // Modal component

const ShowcaseSection = () => {
    // This state will hold the data structure needed by ProjectModal
    // { title: string, banner: string, details: array }
    const [selectedProjectDetails, setSelectedProjectDetails] = useState(null);
    const container = useRef();

    // GSAP animation for cards (remains the same)
    useGSAP(() => {
        const cards = gsap.utils.toArray('.project-wrapper', container.current);
        cards.forEach((card, index) => {
            gsap.from(card, { opacity: 0, y: 50, duration: 0.6, delay: index * 0.1, ease: 'power3.out',
                scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none none' }
            });
        });
    }, { scope: container });

    // Function to open the modal - LOOKS UP data
    const handleCardClick = (projectId, projectTitle) => { // Receive ID and title from card
        // Find the detailed data in modalProjectDetails using the projectId
        const details = modalProjectDetails[projectId];

        if (details) {
            // Combine the title (from card data) with the modal details
            setSelectedProjectDetails({
                title: projectTitle, // Use the title passed from the card
                banner: details.banner,
                details: details.details
            });
            document.body.style.overflow = 'hidden';
        } else {
            console.warn(`No modal details found for project ID: ${projectId}`);
            // Optionally, handle the case where details are missing (e.g., show an error)
        }
    };

    // Function to close the modal
    const handleCloseModal = () => {
        setSelectedProjectDetails(null); // Clear the modal details state
        document.body.style.overflow = '';
    };

    // Cleanup body scroll on unmount (remains the same)
    useEffect(() => {
        return () => { document.body.style.overflow = ''; };
    }, []);

    return (
        <section ref={container} id="work" className="app-showcase text-white" style={{ marginTop: '70px' }}>
            <TitleHeader
                title="My Projects"
                sub="💻 Showcasing My Work"
            />

            <div className="showcase-container mt-20 md:mt-24">
                <div className="projects-grid">
                    {/* Map over the 'projects' array for card display */}
                    {projects && projects.length > 0 ? (
                        projects.map((project) => ( // project here is item from projects array
                            <ProjectCard
                                key={project.id} // Use the unique ID as the key
                                project={project} // Pass the card-specific data
                                onClick={handleCardClick} // Pass the lookup handler
                            />
                        ))
                    ) : (
                        <p className="text-center text-gray-400 col-span-full">No projects to display yet.</p>
                    )}
                </div>
            </div>

            {/* Render the Modal, passing the looked-up details */}
            {/* 'project' prop expects { title, banner, details } */}
            <ProjectModal
                project={selectedProjectDetails} // Pass the looked-up data
                onClose={handleCloseModal}
            />
        </section>
    );
};

export default ShowcaseSection;