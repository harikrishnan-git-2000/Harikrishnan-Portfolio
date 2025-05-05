import { Canvas } from "@react-three/fiber";
import { OrbitControls,Float } from '@react-three/drei';
import { FlyingRobot } from "./FlyingRobot.jsx";
// import { Suspense } from 'react';
import { useMediaQuery } from "react-responsive";
import HeroLights from "./HeroLights.jsx";

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    
    return (
        // Wrapper div with controlled width
        <div className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto h-full">
            <Canvas camera={{ position: [0, 0, 13], fov: 45 }}>
                <HeroLights/>
                <OrbitControls
                    enablePan={!isTablet && !isMobile}
                    enableZoom={!isTablet && !isMobile}
                    minDistance={5}
                    maxDistance={20}
                    minPolarAngle={Math.PI/5}
                    maxPolarAngle={Math.PI/2}
                />
                <Float speed={5.5} rotationIntensity={.5} floatIntensity={.8}>
                <group
                    scale={isMobile ? 1.2 : 1.8}
                    position={[0, -2, 0]}
                    rotation={[0, Math.PI/4, 0]}
                >
                    <FlyingRobot />
                </group>
                </Float>
            </Canvas>
        </div>
    )
}

export default HeroExperience;