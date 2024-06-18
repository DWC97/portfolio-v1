"use client"

import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import { Suspense } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function RenderModel({ children, className, setModelReady }){
    
    return (
        <Canvas 
        className={clsx("w-screen h-screen relative -z-10", className)}
        onCreated={() => setModelReady(true)}
        >
            <Suspense fallback={null}>
                {children}
            </Suspense>
            <EffectComposer>
                <Bloom 
                    intensity={2} 
                    luminanceThreshold={0} 
                    luminanceSmoothing={0.3} 
                    height={300} 

                />
            </EffectComposer>
            <Environment preset="studio" />
        
            {/* <ambientLight /> */}
        </Canvas>
    )
}