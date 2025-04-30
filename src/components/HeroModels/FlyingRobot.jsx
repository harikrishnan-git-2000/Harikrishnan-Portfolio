import React from 'react'
import { useGLTF } from '@react-three/drei'

export function FlyingRobot(props) {
  const { nodes, materials } = useGLTF('./models/flying_robot_07___07.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube004_Material006_0.geometry} material={materials['Material.006']} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('./models/flying_robot_07___07.glb')
