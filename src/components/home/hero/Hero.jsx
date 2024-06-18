'use client';

import { useEffect, useRef, useState } from 'react';
import { Digital } from './Digital';
import RenderModel from './RenderModel';
import DecodeAnimation from 'react-decode-animation';
import { Reveal } from '@/animations/Reveal';
import { motion } from 'framer-motion';

export default function Hero() {
    const nameRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [modelReady, setModelReady] = useState(false);
    const [divVisible, setDivVisible] = useState(false);

    useEffect(() => {
        if (modelReady) {
            // Start the div animation after the model is ready
            setDivVisible(true);
            // Delay the text animation slightly after the div animation starts
            setTimeout(() => {
                setPlaying(true);
                if (nameRef.current) {
                    nameRef.current.play();
                }
            }, 1000); // Adjust this delay as needed
        }
    }, [modelReady]);

    return (
        <div className="h-screen w-full relative flex justify-center items-center">
            {/* <Reveal modelReady={modelReady}> */}
            {divVisible && (
                <motion.div 
                initial={{ width: 0 }}
                    animate={{ width: '800px' }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                className=" h-[324px] z-10 backdrop-blur-sm relative flex flex-col pl-8">
                    <div className="absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-b from-med-blue to-[#143A3A] opacity-10" />
                    <h2
                        className={`z-20 text-[24px] ${playing ? 'text-dark-blue' : 'text-transparent'}  font-semibold tracking-widest pt-6`}
                    >
                        <DecodeAnimation
                            ref={nameRef}
                            text={'DOUGLAS WILLIAM CARTON'}
                            customCharacters="アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨーラリルレロワヰヱヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ"
                        />
                    </h2>
                    {/* <h1 className="z-20 font-medium text-[120px] text-white -my-6 -ml-2">
                        Developer
                    </h1>
                    <h1 className="z-20 font-medium text-[120px] text-white  -my-6 -ml-2">
                        <span className="text-custom-gray">+&nbsp;</span>
                        Researcher
                    </h1> */}
                </motion.div>
                )}
            {/* </Reveal> */}
            <div className="absolute top-0 left-0 opacity-60 w-full h-screen z-0">
                <RenderModel setModelReady={setModelReady}>
                    <Digital />
                </RenderModel>
            </div>
        </div>
    );
}
