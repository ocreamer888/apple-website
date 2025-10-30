import React, { useRef } from 'react'
import { PresentationControls } from '@react-three/drei'
import Macbookmodel14 from '../models/Macbook-14'
import Macbookmodel16 from '../models/Macbook-16'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import useMacbookStore from '../../store'

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 10;

const fadeMeshes = (group, opacity) => {
    if(!group) return;
    group.traverse((child) => {
        if(child.isMesh) {
            child.material.transparent = true;
            gsap.to(child.material, {
                opacity: opacity,
                duration: ANIMATION_DURATION,
               
            });
        }
    });
}

const moveGroup = (group, x) => {
    if(!group) return;
    gsap.to(group.position, {x, duration: ANIMATION_DURATION});
}

const ModelSwitcher = ({scale, isMobile}) => {
    const SCALE_LARGE_DESKTOP = 0.08;
    const SCALE_LARGE_MOBILE = 0.05;
    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();
    const {color} = useMacbookStore();
    const showLargeMacbook = scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;

    useGSAP(() => {
        if(showLargeMacbook) { 
            moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
            moveGroup(largeMacbookRef.current, 0);

            fadeMeshes(smallMacbookRef.current, 0);
            fadeMeshes(largeMacbookRef.current, 1);
        } else {
            moveGroup(smallMacbookRef.current, 0);
            moveGroup(largeMacbookRef.current, OFFSET_DISTANCE);

            fadeMeshes(smallMacbookRef.current, 1);
            fadeMeshes(largeMacbookRef.current, 0);
        }
    }, [scale]);

    const controlsConfig = {
       snap: true,
       speed:1,
       zoom: 1,
       azimuth: [-Infinity, Infinity],
       config: {mass: 1, tension: 0, friction: 26},
    }
  return (
    <>
    <PresentationControls {...controlsConfig}>
        <group ref={largeMacbookRef}>
            <Macbookmodel16 color={color} scale={isMobile ? 0.05 : 0.08} />
        </group>
    </PresentationControls>
    <PresentationControls {...controlsConfig}>
        <group ref={smallMacbookRef}>
            <Macbookmodel14 color={color} scale={isMobile ? 0.03 : 0.06} />
        </group>
    </PresentationControls>
    </>
  )
}

export default ModelSwitcher