import { useState, Suspense, useEffect } from 'react'
import './style.css'
import { Canvas, useFrame } from 'react-three-fiber'
import Kont from './Kont'
import KuistiLogo from '../../svg/kuisti-logo.svg'
import KuistiText from '../../svg/kuisti-text.svg'
import Instagram from '../../svg/ig.svg'
import Down from '../../svg/down.svg'

interface ModelTarget {
  x: number
  y: number
}

const isMobile = (): boolean => ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))

const Model = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [mobile, setMobile] = useState(false)

  const [doingRandom, setDoingRandom] = useState(false);
  const [timeSinceAutoMove, setTimeSinceAutomove] = useState(0)
  const [timeSinceLastMovement, setTimeSinceLastMovemement] = useState(Date.now())
  const [randomProgress, setRandomProgress] = useState<ModelTarget>({ x: 0, y: 0 })
  const [randomTarget, setRandomTarget] = useState<ModelTarget>({ x: 0, y: 0 })

  useEffect(() => {
    const mobileDevice = isMobile()
    setMobile(mobileDevice)
    if (mobileDevice) {
      setDoingRandom(true)
    }
  }, [])

  useFrame(({ mouse }) => {
    const mX = mouse.x * 0.25
    const mY = mouse.y * 0.25

    if ((mX === x && mY === y) || mobile) {
      if (doingRandom) {
        if (randomProgress.x !== randomTarget.x || randomProgress.y !== randomTarget.y) {
          setRandomProgress({
            x: randomProgress.x + (randomTarget.x - randomProgress.x) * 0.001,
            y: randomProgress.y + (randomTarget.y - randomProgress.y) * 0.001
          })
        } else {
          setRandomTarget({
            x: Math.PI / 4 * 2 * Math.random() - Math.PI / 4,
            y: Math.PI / 4 * 2 * Math.random() - Math.PI / 4
          })
        }

        const dt = Date.now() - timeSinceAutoMove

        if (dt > 3000) {
          setRandomTarget({
            x: Math.PI / 4 * 2 * Math.random() - Math.PI / 4,
            y: Math.PI / 4 * 2 * Math.random() - Math.PI / 4
          })
          setTimeSinceAutomove(Date.now())
        }
        return
      }

      const dt = Date.now() - timeSinceLastMovement
      if (dt > 1000) {
        setDoingRandom(true)
        const newRandomTarget = {
          x: Math.PI / 4 * 2 * Math.random() - Math.PI / 4,
          y: Math.PI / 4 * 2 * Math.random() - Math.PI / 4
        } 
        setRandomTarget(newRandomTarget)
        setRandomProgress({ x, y })
        setTimeSinceAutomove(Date.now())
      }
    } else {
      if (!mobile) {
        setX(mX)
        setY(mY)
        setDoingRandom(false)
        setTimeSinceLastMovemement(Date.now())
      }
    }
  })

  return (
    <Kont 
      rotation={[Math.PI/2 - (doingRandom ? randomProgress.y : y), 0, -(doingRandom ? randomProgress.x : x)]} 
      scale={mobile ? 700 : 1000} 
      position={[0 + (doingRandom ? randomProgress.x : x) * 50, (doingRandom ? randomProgress.y : y) * 50, -250]}
      />
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
      <img src={Down} alt="Get down" />
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
