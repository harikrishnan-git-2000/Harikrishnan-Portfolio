import React from 'react'
import { Canvas } from '@react-three/fiber'
import {useGLTF, Environment, Float, OrbitControls} from '@react-three/drei'
import {useMediaQuery} from "react-responsive";



const TechIcon = ({model}) => {
    const scene = useGLTF(model.modelPath);
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });


    return (
        <Canvas>
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Environment preset = "city" />
            <OrbitControls
                enableZoom={false}
                enablePan={!isTablet && !isMobile}
            />
            <Float speed={5.5} rotationIntensity={1} floatIntensity={1}>
                <group scale={model.scale} rotation={model.rotation} position={model.position}>
                <primitive object={scene.scene} />
                </group>
            </Float>
        </Canvas>
    )
}
export default TechIcon
