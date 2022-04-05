import { useState, Suspense } from 'react'
import './style.css'
import { Canvas, useFrame } from 'react-three-fiber'
import Kont from './Kont'
import KuistiLogo from '../../svg/kuisti-logo.svg'
import KuistiText from '../../svg/kuisti-text.svg'
import Instagram from '../../svg/ig.svg'
import Down from '../../svg/down.svg'

const Model = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  useFrame(({ mouse }) => {
    setX(mouse.x * 0.25)
    setY(mouse.y * 0.25)
  })

  return (
    <Kont rotation={[Math.PI/2 - y, 0, -x]} scale={1000} position={[0 + x * 50, y * 50, -250]}/>
  )
}

const Logo = (): any => {
  return (
    <div className="nav">
      <div className="logos">
        <img src={KuistiLogo} alt="Kuisi Ry" />
        <img src={KuistiText} alt="Ihan Kuistilla" />
      </div>
      <div className="social">
        <a href="https://www.instagram.com/kuistiry"><img src={Instagram} alt="@kuistiry" /></a>
      </div>
    </div>
  )
}

const DownButton = (): any => {
  return (
    <button className="down-button" onClick={() => {
      document.getElementById("kontsa")?.scrollIntoView({ behavior: 'smooth' })
    }}>
      <img src={Down} />
    </button>
  )
}

const Three = (): any => {
  return (
    <div className="header-container">
      <Logo />
      <DownButton />
      <Canvas
        orthographic
        camera={{ position: [0, 0, 0], fov: 70 }}
        onCreated={({ gl, camera }) => {
          camera.lookAt(0, 0, 0)
        }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 30, 15]} intensity={1} color={"#FFB400"}/>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Three
