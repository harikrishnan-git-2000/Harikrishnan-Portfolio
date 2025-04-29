import { words } from "../constants/index.js";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import{useGSAP} from "@gsap/react";
import gsap from "gsap";
import {Float} from "@react-three/drei";


const Hero = () => {

    useGSAP(()=>{gsap.fromTo(".hero-text h1", {
        y:50,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:1,
        stagger:0.3,
        ease:"power4.inOut"
    },)})

    return (
        <section id="heroSect" className="relative overflow-hidden px-5 md:px-10">

            <div className="hero-layout flex md:flex-row flex-col-2 md:gap-10 gap-5 ">
                {/*left part*/}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-10 px-5 ">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>Shaping
                            <span className="slide">
                                <span className="wrapper">
                                    {words.map((word,index)=>(
                                        <span key={index} className="flex items-center md:gap-3 gap-1 pb-2">
                                            <img src={word.imgPath} alt={word.text}
                                            className="xl:size-12 md:size-10 sizw-7 md:p-2 p-1 rounded-full bg-white-50" />
                                            <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                            </h1>
                            <h1>into real projects</h1>
                            <h1>that deliver results</h1>
                        </div>
                        <p className="text-white-50 md:text-xl relative">
                            Hello!, I'm Harikrishnan a Front-End Developer, <br/>
                            UI/UX Designer,Motion Graphic Designer and 2D/3D Animator!
                        </p>

                        <Button className="md:w-80 md:h-16 w-60 h-12"
                        id="button"
                        href="#work"
                        text="See my works!"/>

                    </div>
                </header>

                {/*right side*/}
                <figure>
                <div className="hero-3d-layout">
                  <HeroExperience />
                </div>
                </figure>
            </div>
        </section>
    )
}
export default Hero