import React, { useRef, Suspense, useEffect } from 'react'
import clsx from 'clsx'
import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import StudioLights from './StudioLights'
import Macbook from './models/Macbook'
import { features } from '../constants/index.js'
import useMacbookStore from '../store'
import { featureSequence } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const ModelScroll = () => {
  const groupRef = useRef(null)
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)'})
  const {texture} = useMacbookStore();

  // Preload all feature videos during component mount
  useEffect(() => {
     featureSequence.forEach((feature) => {
      const v = document.createElement('video');

      Object.assign(v, {
        src: feature.videoPath,
        playsInline: true,
        muted: true,
        preload: 'auto',
        crossOrigin: 'anonymous',
      });

      v.load();

  }) 
  }, []);

  useGSAP(() => {

    //3D Model Rotation Animation
      const modelTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '#f-canvas',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          pin: true,
        }
      });

      //Sync The Feature Content
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: '#f-canvas',
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
        }
        })

         //3D Spin
         if(groupRef.current) {
          modelTimeline.to(groupRef.current.rotation,{ y: Math.PI * 2, ease: 'power1.inOut'})
        }

        //Content and Texture Sync
        timeline 
        .call(() => setTexture('/videos/feature-1.mp4'))
        .to('.box1', { opacity: 1, y:0, delay: 1})
        .call(() => setTexture('/videos/feature-2.mp4'))
        .to('.box2', { opacity: 1, y:0})
        .call(() => setTexture('/videos/feature-3.mp4'))
        .to('.box3', { opacity: 1, y:0})
        .call(() => setTexture('/videos/feature-4.mp4'))
        .to('.box4', { opacity: 1, y:0})
        .call(() => setTexture('/videos/feature-5.mp4'))
        .to('.box5', { opacity: 1, y:0})

  }, []);
  
  return (
    <group ref={groupRef}>
      <Suspense fallback={<Html><h1 className='text-white text-3xl'>Thinking...</h1></Html>}>
        <Macbook scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]}/>
      </Suspense>
    </group>
  )
}

const Features = () => {
  return (
    <section id='features'>
      <h2>See it all in a new light</h2>

      <Canvas id='f-canvas' camera={{ }}>
        <StudioLights />
        <ambientLight intensity={0.5} />
        <ModelScroll />
      </Canvas>
      <div className='absolute inset-0'>
        {features.map((feature) => (
          <div key={feature.id} className={clsx('box', `box${feature.id}`, feature.styles)}>
            <img src={feature.icon} alt={feature.highlight} />
            <p>
              <span className='text-white'>{feature.highlight}</span>
              {feature.text}
              </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features