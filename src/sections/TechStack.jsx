import React from 'react'
import TitleHeader from '../components/TitleHeader.jsx'
import {techStackIcons} from "../constants/index.js";
import TechIcon from "../components/Models/TechLogos/TechIcon.jsx";
import{useGSAP} from "@gsap/react";
import {gsap} from "gsap";

const TechStack = () => {
    useGSAP(() => {
        gsap.fromTo(".tech-card", { y:50, opacity: 0 },
        { y:0, opacity: 1, stagger: 0.5, duration: 0.4, ease: "power4.in",
        scrollTrigger: { trigger:'TechStack', start:"bottom-center" } });
    })

    return (
        <section id="skills">
        <div className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                title= "My preferred tech stack"
                sub = "✒️The Skills I Bring to the Table"
                />

                <div className="tech-grid">
                    {techStackIcons.map((icon) =>(
                        <div key={icon.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                            <div className="tech-card-animated-bg"/>
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">
                                    <TechIcon model={icon} />
                                </div>

                                <div className="padding-x w-full">
                                    <p>{icon.name}</p>
                                </div>

                            </div>

                        </div>
                    ) )}

                </div>

            </div>
        </div>
        </section>
    )
}
export default TechStack