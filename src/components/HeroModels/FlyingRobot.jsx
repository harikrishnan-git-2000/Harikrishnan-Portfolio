import { useGLTF } from '@react-three/drei'

export function FlyingRobot(props) {
  const { nodes, materials } = useGLTF('/models/flying_robot_07___07.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.Cube004_Material006_0.geometry} material={materials['Material.006']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder007_Material006_0.geometry} material={materials['Material.006']} position={[0, 2.958, -17.324]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder008_Material006_0.geometry} material={materials['Material.006']} position={[-73.024, -74.389, 5.053]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube005_Material006_0.geometry} material={materials['Material.006']} position={[111.146, 152.466, -55.658]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder009_Material006_0.geometry} material={materials['Material.006']} position={[109.368, 35.209, 25.02]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube006_Material006_0.geometry} material={materials['Material.006']} position={[111.101, 105.744, 68.673]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder010_Material006_0.geometry} material={materials['Material.006']} position={[84.878, 19.388, -94.056]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.BezierCurve002_Material006_0.geometry} material={materials['Material.006']} position={[-83.268, -6.431, -36.637]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.BezierCurve003_Material006_0.geometry} material={materials['Material.006']} position={[-77.71, -19.486, -36.637]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Plane001_Material006_0.geometry} material={materials['Material.006']} position={[0, 132.375, 76.963]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder011_Material006_0.geometry} material={materials['Material.006']} position={[40.364, -9.026, 24.226]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube007_Material006_0.geometry} material={materials['Material.006']} position={[-48.548, 4.551, 64.301]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder012_Material006_0.geometry} material={materials['Material.006']} position={[-40.43, 281.192, -171.725]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder013_Material006_0.geometry} material={materials['Material.006']} position={[-6.078, 230.189, -131.288]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/flying_robot_07___07.glb')
