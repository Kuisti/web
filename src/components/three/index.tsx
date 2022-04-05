import { useState, Suspense } from 'react'
import './style.css'
import { Canvas, useFrame } from 'react-three-fiber'
import Kont from './Kont.js'
import KuistiLogo from '../../svg/kuisti-logo.svg'
import KuistiText from '../../svg/kuisti-text.svg'

const Model = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  useFrame(({ mouse }) => {
    setX(mouse.x * 0.25)
    setY(mouse.y * 0.25)
  })

  return (
    <Kont rotation={[Math.PI/2 - y, 0, -x]} scale={4} position={[0 + x * 0.3, y * 0.3, -3]}/>
  )
}

const Logo = (): any => {
  return (
    <div className="logos">
      <img src={KuistiLogo} alt="Kuisi Ry" />
      <img src={KuistiText} alt="Ihan Kuistilla" />
    </div>
  )
}

const Three = (): any => {
  return (
    <div className="header-container">
      <Logo />
      <Canvas
        camera={{ position: [0, 0, 0], fov: 70 }}
        onCreated={({ gl, camera }) => {
          camera.lookAt(0, 0, 0)
        }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 30, 15]} intensity={1.5} color={"#FFB400"}/>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Three
