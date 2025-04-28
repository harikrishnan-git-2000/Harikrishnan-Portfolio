import React from 'react';

// This component ONLY uses data fields present in the `projects` array export.
const ProjectCard = ({ project, onClick }) => {
    // project prop here is an item from the `projects` array
    if (!project || !project.id) { // Check for project and id
        console.error("ProjectCard missing project data or id", project);
        return null; // Don't render if essential data is missing
    }

    // Apply background color if it exists
    const cardStyle = project.backgroundColor
        ? { backgroundColor: project.backgroundColor }
        : {};

    // Modified onClick handler to pass the project's id
    const handleClick = () => {
        onClick(project.id, project.title); // Pass ID and title for lookup
    };

    return (
        <div
            className="project-wrapper padding-bottom-500 cursor-pointer"
            style={cardStyle}
            onClick={handleClick} // Use the modified handler
            role="button"
            tabIndex="0"
            onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && handleClick()}
            aria-label={`View details for ${project.title}`}
        >
            <img className="object-fit-contain project-image"
                src={project.image || '/images/placeholder-thumb.jpg'}
                alt={`${project.title || 'Project'} thumbnail`}
            />
            <div className="text-content">
                <div className="badges">
                    {project.tags?.map((tag, index) => (
                        <span key={index} className="badge">
                            {tag}
                        </span>
                    ))}
                </div>
                <h2 className="project-title">
                    {project.title || 'Untitled Project'}
                </h2>

                <p className="project-description">
                    {project.description || 'No description available.'}
                </p>

            </div>
        </div>
    );
}
export default ProjectCard;