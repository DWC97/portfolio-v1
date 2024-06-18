'use client';

import { useEffect, useRef, useState } from 'react';
import { Digital } from './Digital';
import RenderModel from './RenderModel';
import DecodeAnimation from 'react-decode-animation';
import { Reveal } from '@/animations/Reveal';

export default function Hero() {
    const nameRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        setPlaying(true);
        nameRef.current.play();
    }, []);

    return (
        <div className="h-screen w-full relative flex justify-center items-center">
            <div className="absolute top-0 left-0 opacity-60 w-full h-screen z-0">
                <RenderModel>
                    <Digital />
                </RenderModel>
            </div>
            <Reveal>
                <div className="w-[800px] h-[324px] z-10 backdrop-blur-sm relative flex flex-col pl-8">
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
                    <h1 className="z-20 font-medium text-[120px] text-white -my-6 -ml-2">
                        Developer
                    </h1>
                    <h1 className="z-20 font-medium text-[120px] text-white  -my-6 -ml-2">
                        <span className="text-custom-gray">+&nbsp;</span>
                        Researcher
                    </h1>
                </div>
            </Reveal>
        </div>
    );
}
