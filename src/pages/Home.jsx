import React, { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Loader from '../components/Loader'
import Mill from '../models/Mill'
import Sky from '../models/Sky'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'

import water from '../assets/water.mp3'
import { soundon, soundoff } from '../assets/icons'

const Home = () => {
  const audioRef = useRef(new Audio(water));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [ isRotating, setIsRotating ] = useState(false);
  const [ currentStage, setCurrentStage ] = useState(1)
  const [ isPlayingMusic, setIsPlayingMusic ] = useState(false)

  useEffect(() =>{
    if(isPlayingMusic){
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    }
  },[isPlayingMusic])

  const adjustMillForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -39];
    let rotation = [0.1, 1.5, 0];

    if(window.innerWidth < 768) {
      screenScale = [6.5, 6.5, 6.5];
    } else {
      screenScale = [7.5, 7.5, 7.5];
    }
    return [screenScale, screenPosition, rotation];
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if(window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0.5]
    } else {
      screenScale = [3, 3, 3]; 
      screenPosition = [0, -2.5, -2]
    }
    return [screenScale, screenPosition];
  }

  const [millScale, millPosition, millRotation] = adjustMillForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight 
            position={[1, 1, 1]}
            intensity={2}
          />
          <ambientLight 
            intensity={2}
          />
          <hemisphereLight 
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={4}
          />
          <Sky isRotating={isRotating}/>
          <Mill 
            position={millPosition}
            scale={millScale}
            rotation={millRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane 
            isRotating={isRotating}
            position={planePosition}
            scale={planeScale}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img 
          src={!isPlayingMusic ? soundoff : soundon} 
          alt='sound' 
          className='w-10 h-10 cursor-pointer object-contain'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  )
}

export default Home