import React, { useRef, useState, Suspense, useEffect } from 'react'
import './style.css'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from 'react-three-fiber'
import Kont from './Kont.js'

const Three = (): any => {
  return (
    <div className="header-container">
      <p className="header-title">Kuistilla since 2020</p>
      <Canvas
        camera={{ position: [0, 0, 0], fov: 70 }}
        onCreated={({ gl, camera }) => {
          camera.lookAt(0, 0, 0)
        }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 30, 15]} intensity={1.5} color={"#FFB400"}/>
        <Suspense fallback={null}>
          <Kont rotation={[Math.PI/2, 0, 0]} scale={4} position={[0, 0, -3]}/>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Three
