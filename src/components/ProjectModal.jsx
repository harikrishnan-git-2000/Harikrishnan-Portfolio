import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

// This component expects a 'project' prop containing AT LEAST:
// { title: string, banner: string, details: array }
const ProjectModal = ({ project, onClose }) => {
    // project prop here is the *combined* data looked up in ShowcaseSection
    const modalRef = useRef(null);
    const backdropRef = useRef(null);
    const containerRef = useRef(null);

    // GSAP Animation Hook (remains the same)
    useGSAP(() => {
        if (project && backdropRef.current && containerRef.current) {
            modalRef.current.style.display = 'flex';
            gsap.to(backdropRef.current, { opacity: 1, duration: 0.3 });
            gsap.fromTo(containerRef.current,
                { y: 50, scale: 0.95, opacity: 0 },
                { y: 0, scale: 1, opacity: 1, duration: 0.4, ease: 'power2.out', delay: 0.1 }
            );
        } else if (!project && modalRef.current && backdropRef.current && containerRef.current) {
            if (gsap.getProperty(backdropRef.current, "opacity") > 0) {
                gsap.to(backdropRef.current, { opacity: 0, duration: 0.2 });
                gsap.to(containerRef.current, { opacity: 0, scale: 0.9, y: 30, duration: 0.2, onComplete: () => {
                        if(modalRef.current) modalRef.current.style.display = 'none';
                    }});
            } else {
                if(modalRef.current) modalRef.current.style.display = 'none';
            }
        }
    }, { dependencies: [project], scope: modalRef });


    // Handle closing animation and callback (remains the same)
    const handleClose = () => {
        if (!backdropRef.current || !containerRef.current) return;
        gsap.to(containerRef.current, {
            y: 50, scale: 0.95, opacity: 0, duration: 0.3, ease: 'power2.in',
            onComplete: () => {
                if(modalRef.current) modalRef.current.style.display = 'none';
                onClose();
            }
        });
        gsap.to(backdropRef.current, { opacity: 0, duration: 0.3, delay: 0.1 });
    };

    // Close modal on Escape key press (remains the same)
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') handleClose();
        };
        if (project) window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [project]);


    // Dynamic Content Renderer (remains the same)
    const renderDetailContent = (detail, index) => {
        if (!detail || !detail.type) return null;
        switch (detail.type.toLowerCase()) {
            case 'heading': const Tag = `h${Math.min(Math.max(parseInt(detail.level, 10) || 2, 2), 6)}`; return <Tag key={index} className={`text-${4 - (detail.level || 2)}xl font-semibold mt-6 mb-3 text-white`}>{detail.content}</Tag>;
            case 'paragraph': return <p key={index} className="text-gray-300 leading-relaxed my-3">{detail.content}</p>;
            case 'image': return (<figure key={index} className="my-6"><img src={detail.src} alt={detail.alt || 'Project image'} className="rounded-lg shadow-md w-full object-contain max-h-[70vh] bg-black/20" />{detail.caption && <figcaption className="text-center text-sm text-gray-400 mt-2 italic">{detail.caption}</figcaption>}</figure>);
            case 'video': return (<figure key={index} className="my-6"><video controls src={detail.src} className="rounded-lg shadow-md w-full bg-black/20">Your browser does not support the video tag.</video>{detail.caption && <figcaption className="text-center text-sm text-gray-400 mt-2 italic">{detail.caption}</figcaption>}</figure>);
            case 'bulletlist': return (<ul key={index} className="list-disc list-inside text-gray-300 my-4 space-y-1 pl-4">{detail.items?.map((item, i) => <li key={i}>{item}</li>)}</ul>);
            case 'buttonlink': return (<div key={index} className="my-4"> <a href={detail.href} target="_blank" rel="noopener noreferrer" className="modalbtn px-5 py-2 mb-5 rounded-lg bg-transparent border border-white-50 text-white-50 hover:bg-white-50 hover:text-black transition-colors duration-300">{detail.label || 'Link'}</a></div>);


            default: console.warn(`Unknown detail type: ${detail.type}`); return null;
        }
    };

    // Modal Structure (remains the same)
    return (
        <div ref={modalRef} className="fixed inset-0 z-100 items-center justify-center p-4" style={{ display: 'none' }} aria-labelledby="project-modal-title" role="dialog" aria-modal="true" >
            <div ref={backdropRef} className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0" onClick={handleClose} ></div>
            <div ref={containerRef} className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto text-white opacity-0 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent" style={{ transformOrigin: 'center center' }}>
                <button onClick={handleClose} className="sticky top-3 right-3 md:top-4 md:right-4 float-right text-gray-400 hover:text-white text-3xl z-10 bg-black/30 rounded-full px-2 leading-none pb-1 ml-4 transition-colors duration-200" aria-label="Close project details" > × </button>

                {/* Uses project.banner */}
                {project?.banner && ( <div className="w-full h-48 md:h-64 lg:h-80 overflow-hidden rounded-t-xl"><img src={project.banner} alt={`${project.title || 'Project'} banner`}  className="w-full h-full object-cover"/> </div> )}


                <div className="p-6 md:p-8 lg:p-10">
                    {/* Uses project.title */}
                    <h1 id="project-modal-title" className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r text-white-50 accent-white-50">
                        {project?.title || 'Project Details'}
                    </h1>

                    {/* Uses project.details */}
                    <div className="prose prose-invert max-w-none prose-img:rounded-lg prose-a:text-teal-400 hover:prose-a:text-teal-300 prose-headings:text-white prose-p:text-gray-300 prose-li:text-gray-300">
                        {project?.details?.map(renderDetailContent)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;