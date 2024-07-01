'use client';

import Footer from '@/components/global/Footer';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ParallaxArticle() {
    const [opacity, setOpacity] = useState(1);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        setPlaying(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = window.innerHeight * 0.5; // 75vh
            const newOpacity = Math.max(0, 1 - scrollY / maxScroll);
            setOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="w-full h-[200vh] flex flex-col items-center pb-20">
                <div className="w-full h-[75vh] relative flex flex-col justify-center items-center">
                    <div
                        className="absolute w-full h-full -z-10"
                        style={{ opacity }}
                    >
                        <Image
                            src="/images/articlebg.png"
                            alt="article banner"
                            fill
                            sizes="(height: 100%)"
                            className="object-cover object-top opacity-90"
                            priority
                        />
                    </div>
                    <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-transparent to-primary-dark opacity-100 z-0" />
                    <div
                        className={`w-[700px]  z-10 mt-20 ${playing ? 'opacity-100' : 'opacity-0'} ease-in-out duration-500`}
                    >
                        <div className="flex flex-row gap-6">
                            <div
                                className={`w-[100px] sm:w-[220px] relative ${playing ? 'opacity-100' : 'opacity-0'} ease-in-out duration-500`}
                            >
                                <div className="absolute bottom-0 left-0 polygon1 bg-dark-blue w-[60px] sm:w-[112px] h-[12px] border-b border-b-dark-blue" />
                                <motion.div
                                    className="absolute h-[2px] w-full bg-dark-blue bottom-0 left-0"
                                    initial={{ width: '0%' }}
                                    animate={{ width: playing ? '100%' : '0%' }}
                                    transition={{
                                        duration: 2.5,
                                        ease: [0.4, 0, 0.1, 1],
                                    }}
                                />
                            </div>
                            <span
                                className={`text-dark-blue font-medium  text-[14px] sm:text-[16px]`}
                            >
                                July 28th 2024
                            </span>
                        </div>
                        <h1 className="text-[24px] sm:text-[48px] font-bold text-white my-6 leading-tight mt-10">
                            How I created an interactive 3-D parallax effect in
                            React
                        </h1>
                        <div className="flex flex-row items-center justify-between">
                            <a
                                href="#p1"
                                className="hover:opacity-80 ease-in-out duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={36}
                                    height={36}
                                    viewBox="0 0 1024 1024"
                                >
                                    <path
                                        fill="#6E98AE"
                                        d="M8.2 275.4c0-8.6 3.4-17.401 10-24.001c13.2-13.2 34.8-13.2 48 0l451.8 451.8l445.2-445.2c13.2-13.2 34.8-13.2 48 0s13.2 34.8 0 48L542 775.399c-13.2 13.2-34.8 13.2-48 0l-475.8-475.8c-6.8-6.8-10-15.4-10-24.199"
                                    ></path>
                                </svg>
                            </a>
                            <div className="flex flex-row gap-4 items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill="#6E98AE"
                                        fillRule="evenodd"
                                        d="M6.25 0a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zM13 9A5 5 0 1 1 3 9a5 5 0 0 1 10 0m1.5 0a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-2.28-7.28a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06M8.75 6a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 .3.6l1.333 1a.75.75 0 1 0 .9-1.2L8.75 8.625z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span className="font-medium text-custom-gray">
                                    5 min
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`w-[700px]  text-gray-300 text-[20px] leading-relaxed ${playing ? 'opacity-100' : 'opacity-0'} ease-in-out duration-500`}
                >
                    <p className=" pt-10" id="p1">
                        2024 has seen the rise of interactivity in web design.
                        Designers are pushing the boundaries with 3-D elements
                        to give users a unique experience. Parallax effects with
                        layers in the foreground and background moving at
                        different speeds to create a realistic perspective are
                        paticularly popular. In this article, I'll break down
                        how I implemented such an effect in React.js using basic
                        Javascript and CSS.
                    </p>
                    <div className="flex flex-row gap-4 pl-4 py-4 items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 1024 1024"
                        >
                            <path
                                fill="#00EEFF"
                                d="M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0a30.59 30.59 0 0 1 0-42.752L764.736 512L452.864 192a30.59 30.59 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0a30.59 30.59 0 0 1 0-42.752L508.736 512L196.864 192a30.59 30.59 0 0 1 0-42.688"
                            ></path>
                        </svg>
                        <span className="border-b-2 border-dark-blue border-opacity-30 hover:border-opacity-100 transition duration-300 ease-in-out">
                            Demo of the final result.
                        </span>
                    </div>
                    <p className="pt-10">
                        The first and most important decision is to choose a
                        scene. Find an image that has layers at varying distance
                        from the point of observation. That means there should
                        be layers in the foreground and in the background of the
                        image, otherwise it will be impossible to create the
                        illusion of depth.
                    </p>
                    <div className="w-full relative mt-10 mb-16">
                    <Image
                                            src={"/images/articlebg2.jpg"}
                                            alt="scene img"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                            }}
                                        />
                    </div>
                    <p className="mt-10">
                        The first and most important decision is to choose a
                        scene. Find an image that has layers at varying distance
                        from the point of observation. That means there should
                        be layers in the foreground and in the background of the
                        image, otherwise it will be impossible to create the
                        illusion of depth.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}
