'use client';

import React, {
    useEffect,
    useRef,
    useState,
    useMemo,
    Suspense,
} from 'react';

import DecodeAnimation from 'react-decode-animation';
import { motion } from 'framer-motion';

import animationData from '@/animations/scroll-animation.json';
import { useViewportWidth } from '@/hooks/useViewportWidth';

import dynamic from 'next/dynamic';

const Digital = dynamic(() => import('./Digital').then((mod) => mod.Digital), {
    ssr: false,
});
const RenderModel = dynamic(() => import('./RenderModel'), { ssr: false });

const TypeAnimation = dynamic(
    () => import('react-type-animation').then((mod) => mod.TypeAnimation),
    { ssr: false }
);
const Lottie = dynamic(
    () => import('lottie-react').then((mod) => mod.default),
    { ssr: false }
);

export default function Hero() {
    const nameRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [modelReady, setModelReady] = useState(true);
    const [divVisible, setDivVisible] = useState(false);
    const [textVisible, setTextVisible] = useState(false);
    const [scrollAnimation, setScrollAnimation] = useState(false);
    const scrollAnimationRef = useRef(null);
    const [opacity, setOpacity] = useState(0);
    const viewportWidth = useViewportWidth();


    useEffect(() => {
        if (modelReady) {
            // Start the div animation after the model is ready
            setDivVisible(true);
            // Delay the text animation slightly after the div animation starts
            setTimeout(() => {
                setPlaying(true);
                if (nameRef.current) {
                    nameRef.current.play();
                    setTextVisible(true);
                }
            }, 1000);
            setTimeout(() => {
                setScrollAnimation(true);
                setOpacity(0.7);
            }, 5000);
        }
    }, [modelReady]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setOpacity(scrollY === 0 ? 0.7 : 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const divStyles = useMemo(() => {
        if (viewportWidth < 640) return { height: '170px', width: '328px' };
        if (viewportWidth < 1536) return { height: '256px', width: '600px' };
        return { height: '336px', width: '784px' };
    }, [viewportWidth]);

    return (
        <div className="h-screen w-full relative flex justify-center items-center">
            {divVisible && (
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: divStyles.width }}
                    transition={{ duration: 1.5, ease: [0.4, 0, 0.1, 1] }}
                    style={{ height: divStyles.height }}
                    className="z-10 backdrop-blur-sm relative flex flex-col px-8 overflow-hidden select-none"
                >
                    <div className="absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-b from-med-blue to-[#143A3A] opacity-10" />
                    <div className="absolute top-0 left-0 w-full">
                        <h2
                            className={`z-20 text-[14px] sm:text-[20px] 2xl:text-[24px] ${playing ? 'text-dark-blue weak-glow' : 'text-transparent'}  font-semibold tracking-widest pt-6  px-7 sm:px-8`}
                        >
                       
                                <DecodeAnimation
                                    ref={nameRef}
                                    text={'DOUGLAS WILLIAM CARTON'}
                                    customCharacters="アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨーラリルレロワヰヱヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ"
                                />
                        
                        </h2>
                    </div>

                    <h1
                        className={`z-20 font-medium text-[44px] sm:text-[88px] 2xl:text-[116px] mt-[44px]  sm:mt-[36px] sm:-mb-6 -ml-2 ${textVisible ? 'text-white ' : 'text-transparent'} ease-in-out transition-colors duration-300`}
                    >
                        Developer
                    </h1>
                    <h1
                        className={`z-20 font-medium text-[44px] sm:text-[88px] 2xl:text-[116px] -my-4 sm:-my-6 -ml-2 ease-in-out transition-colors duration-500 ${textVisible ? 'text-white ' : 'text-transparent'}`}
                    >
                        <span
                            className={`${textVisible ? 'text-custom-gray' : 'text-transparent'} ease-in-out transition-colors duration-500`}
                        >
                            +&nbsp;
                        </span>
                        <span
                            className={`${textVisible ? 'text-white' : 'text-transparent'} ease-in-out transition-colors duration-500`}
                        >
                            <Suspense fallback={null}>
                                <TypeAnimation
                                    sequence={[
                                        'Designer',
                                        3000,
                                        'Engineer',
                                        3000,
                                        'Researcher',
                                        3000,
                                    ]}
                                    wrapper="span"
                                    speed={10}
                                    omitDeletionAnimation={true}
                                    deletionSpeed={30}
                                    repeat={Infinity}
                                    cursor={true}
                                    preRenderFirstString={false}
                                />
                            </Suspense>
                        </span>
                    </h1>
                </motion.div>
            )}

            {/* <div
                className={`absolute ${
                    viewportWidth < 768 ? '-top-[12vh]' : 'top-0'
                } left-0 opacity-80 w-full h-screen z-0`}
            >
                <Suspense fallback={null}>
                    <RenderModel setModelReady={setModelReady}>
                        <Digital />
                    </RenderModel>
                </Suspense>
            </div> */}
            <div
                style={{
                    opacity: opacity,
                    transition: 'opacity 0.5s ease-in-out',
                }}
                className={`absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[200px] ${scrollAnimation ? ' opacity-70' : 'opacity-0'} flex justify-center items-center ease-in-out duration-1000 z-30`}
            >
                <Suspense fallback={null}>
                    <Lottie
                        lottieRef={scrollAnimationRef}
                        animationData={animationData}
                        className="w-16"
                        loop={true}
                    />
                </Suspense>
            </div>
        </div>
    );
}
