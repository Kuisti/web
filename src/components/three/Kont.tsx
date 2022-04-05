/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from 'react-three-fiber'

type GLTFResult = GLTF & {
  nodes: {
    Cone_6: THREE.Mesh
    Cylinder_1: THREE.Mesh
    Cylinder: THREE.Mesh
    Box_1: THREE.Mesh
    Box_1_1: THREE.Mesh
    ['Sphere_7_-_baked_2']: THREE.Mesh
    ['Sphere_7_-_baked']: THREE.Mesh
    Sphere_8: THREE.Mesh
    Sphere_7: THREE.Mesh
    Sphere_3: THREE.Mesh
    Sphere_1: THREE.Mesh
    Box: THREE.Mesh
    Cone_1: THREE.Mesh
    Cone_2: THREE.Mesh
    Cone_4: THREE.Mesh
    Cone_3: THREE.Mesh
    Cone: THREE.Mesh
    Sphere: THREE.Mesh
  }
  materials: {
    Saturn: THREE.MeshStandardMaterial
    ['Champion 1']: THREE.MeshStandardMaterial
    Champion: THREE.MeshStandardMaterial
    ['Fresh Scent 1']: THREE.MeshStandardMaterial
    ['Fresh Scent']: THREE.MeshStandardMaterial
    ['Evil Eye 8']: THREE.MeshStandardMaterial
    ['Evil Eye 6']: THREE.MeshStandardMaterial
    ['Evil Eye 10']: THREE.MeshStandardMaterial
    ['Evil Eye 9']: THREE.MeshStandardMaterial
    ['Evil Eye 2']: THREE.MeshStandardMaterial
    ['Evil Eye']: THREE.MeshStandardMaterial
    Kingdom: THREE.MeshStandardMaterial
    Sienna: THREE.MeshStandardMaterial
    ['Andorra 1']: THREE.MeshStandardMaterial
    ['Andorra 3']: THREE.MeshStandardMaterial
    ['Andorra 2']: THREE.MeshStandardMaterial
    Andorra: THREE.MeshStandardMaterial
    Bilbao: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const [localScale, setLocalScale] = useState(1)

  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/kont.glb') as GLTFResult

  useFrame(() => {
    if (localScale < 2 && nodes && materials) {
      setLocalScale(localScale * 1.015)
    }
  })

  return (
    <group ref={group} {...props} scale={(localScale - 1) * (props.scale as number)} dispose={null}>
      <mesh geometry={nodes.Cone_6.geometry} material={materials.Saturn} position={[-0.01454, 0.14979, 0.06087]} rotation={[-1.46245, -0.0387, 0.00421]} scale={[0.00074, 0.00038, 0.0007]} />
      <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Champion 1']} position={[-0.04587, 0.17231, -0.04912]} rotation={[-2.09305, -0.00063, -0.18262]} scale={[0.0006, 0.0006, 0.00006]} />
      <mesh geometry={nodes.Cylinder.geometry} material={materials.Champion} position={[0.02564, 0.17893, -0.0377]} rotation={[-2.09305, -0.00063, -0.18262]} scale={[0.0006, 0.0006, 0.00006]} />
      <mesh geometry={nodes.Box_1.geometry} material={materials['Fresh Scent 1']} position={[-0.12593, 0.09186, -0.02034]} rotation={[-1.75841, -0.01726, 0.09068]} scale={[0.00002, 0.0003, 0.00137]} />
      <mesh geometry={nodes.Box_1_1.geometry} material={materials['Fresh Scent']} position={[0.10992, 0.0954, -0.01093]} rotation={[-1.75919, 0, 0]} scale={[0.00002, 0.0003, 0.00137]} />
      <mesh geometry={nodes['Sphere_7_-_baked_2'].geometry} material={materials['Evil Eye 8']} position={[0.01607, 0.10818, 0.00569]} rotation={[-Math.PI / 2, 0, -0.13859]} scale={0.00081} />
      <mesh geometry={nodes['Sphere_7_-_baked'].geometry} material={materials['Evil Eye 6']} position={[-0.05019, 0.1048, -0.00048]} rotation={[-Math.PI / 2, 0, 0]} scale={0.00081} />
      <mesh geometry={nodes.Sphere_8.geometry} material={materials['Evil Eye 10']} position={[0.01607, 0.18374, 0.00948]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.00019, 0.00019, 0.00003]} />
      <mesh geometry={nodes.Sphere_7.geometry} material={materials['Evil Eye 9']} position={[-0.0497, 0.18137, 0.00994]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.00019, 0.00019, 0.00003]} />
      <mesh geometry={nodes.Sphere_3.geometry} material={materials['Evil Eye 2']} position={[0.01575, 0.10449, 0.00931]} rotation={[-Math.PI / 2, 0, 0]} scale={0.00081} />
      <mesh geometry={nodes.Sphere_1.geometry} material={materials['Evil Eye']} position={[-0.04885, 0.10236, 0.00931]} rotation={[-Math.PI / 2, 0, 0]} scale={0.00081} />
      <mesh geometry={nodes.Box.geometry} material={materials.Kingdom} position={[-0.00951, 0.16056, -0.03716]} rotation={[-2.09305, -0.00063, -0.18262]} scale={[0.0017, 0.0008, 0.0002]} />
      <mesh geometry={nodes.Cone_1.geometry} material={materials.Sienna} position={[0.09675, 0.08501, -0.05039]} rotation={[-Math.PI, 0.536, 0]} scale={0.0005} />
      <mesh geometry={nodes.Cone_2.geometry} material={materials['Andorra 1']} position={[0.06, 0.08573, -0.01608]} rotation={[Math.PI, 0.66736, -1.74533]} scale={0.001} />
      <mesh geometry={nodes.Cone_4.geometry} material={materials['Andorra 3']} position={[-0.0831, 0.08778, -0.01672]} rotation={[Math.PI, -0.11623, -1.74533]} scale={0.00071} />
      <mesh geometry={nodes.Cone_3.geometry} material={materials['Andorra 2']} position={[-0.09049, 0.08573, -0.07453]} rotation={[Math.PI, -0.02763, -1.74533]} scale={0.00048} />
      <mesh geometry={nodes.Cone.geometry} material={materials.Andorra} position={[-0.07907, 0.08573, -0.05169]} rotation={[Math.PI, -0.15956, -1.74533]} scale={0.00072} />
      <mesh geometry={nodes.Sphere.geometry} material={materials.Bilbao} position={[-0.01066, 0, 0.02556]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.0026, 0.00215, 0.00174]} />
    </group>
  )
}

useGLTF.preload('/kont.glb')
