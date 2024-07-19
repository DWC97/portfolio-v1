"use client"

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

import { useFrame} from '@react-three/fiber'
import * as THREE from "three";
import FakeGlowMaterial from './FakeGlowMaterial';
import { useViewportWidth } from '@/hooks/useViewportWidth';



export function Digital(props) {
  const { nodes, materials } = useGLTF('/models/digital.glb')
  const model = useRef()

  const rotationAxis = new THREE.Vector3(0.5, 0, 0).normalize(); // Adjust this vector to your desired axis
  const [rotationSpeed, setRotationSpeed] = useState(0.2);
  const targetSpeed = useRef(0.2);
  const timeoutRef = useRef();
  const lastScrollPos = useRef(0);
  const viewportWidth = useViewportWidth()

  const lerp = (start, end, t) => start * (1 - t) + end * t;

  useFrame((state, delta, xrFrame) => {
    model.current.position.y = 0 + Math.sin(state.clock.elapsedTime) * 0.05
    const newSpeed = lerp(rotationSpeed, targetSpeed.current, 0.2);
    setRotationSpeed(newSpeed);
    model.current.rotateOnAxis(rotationAxis, newSpeed * delta);
  })

  

  useEffect(() => {
    const handleScrollEvent = (deltaY) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      if (deltaY > 0) {
        // Scroll down, increase speed in the same direction
        targetSpeed.current = 2.5;
      } else {
        // Scroll up, increase speed in the opposite direction
        targetSpeed.current = -2.5;
      }

      timeoutRef.current = setTimeout(() => {
        targetSpeed.current = 0.2; // Reset speed to normal after 1 second
      }, 250);
    };

    const handleWheel = (event) => {
      handleScrollEvent(event.deltaY);
    };

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const deltaY = currentScrollPos - lastScrollPos.current;
      lastScrollPos.current = currentScrollPos;
      handleScrollEvent(deltaY);
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const scale = viewportWidth < 768
    ? [0.035, 0.035, 0.035]
    : viewportWidth < 1280
    ? [0.065, 0.05, 0.05]
    : [0.09, 0.07, 0.07];

    const position = viewportWidth < 768
    ? [0, 0, 0]
    : viewportWidth < 1280
    ? [2.5, 0, 0]
    : [4, 0, 0];
  
  return (
    <group {...props} dispose={null} ref={model}
    scale={scale}
    position={position}
    rotation={[0.3, 0.2, -0.5]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.defaultMat}
        rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
      >
        {/* <FakeGlowMaterial /> */}

        </mesh>
    </group>
  )
}

useGLTF.preload('/models/digital.glb')