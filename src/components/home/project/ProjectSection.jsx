'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Reveal } from '@/animations/Reveal';
import Image from 'next/image';
import projectsData from '@/data/projects.json';

export default function ProjectSection({ index }) {
    const project = projectsData.projects[index];
    const [infoVisible, setInfoVisible] = useState(false);
    const controls = useAnimation();
    const images = project.slides
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        // Start continuous animation
        controls.start({
            rotateX: [-20, -10], // Example of rotating from 10 to -20 degrees
            rotateY: [16, -4], // Example of rotating from 10 to -20 degrees
            rotateZ: [4, 2], // Example of rotating from 10 to -20 degrees
            transition: {
                duration: 5,
                repeat: Infinity, // Repeat indefinitely
                repeatType: 'reverse', // Reverse animation on each repeat
                ease: 'linear', // Linear easing for continuous rotation
            },
        });

        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 5000);

        return () => {
            controls.stop();
            clearInterval(interval);
        };
    }, [controls, images.length]);

    const slideVariants = {
        initial: {
            x: 0,
        },
        animate: {
            x: '-100%',
            transition: {
                duration: 1.25,
                ease: [0.4, 0, 0.1, 1],
            },
        },
    };

    return (
        <div className="w-full min-h-screen md:min-h-[120vh] flex flex-col lg:flex-row justify-center items-center gap-20  2xl:gap-40 py-0  md:py-40 lg:py-0">
            <div className="w-full px-10 md:px-0 md:w-[400px] flex flex-col lg:h-[500px] lg:justify-center">
                <div className="flex flex-row w-full items-center">
                    <motion.span
                        className="text-[36px] md:text-[48px] text-dark-blue cyberpunk-heading pr-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                    >
                        0{index + 1}
                    </motion.span>
                    <motion.div
                        className="h-[5px] bg-custom-gray bg-opacity-30"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 3, ease: [0.4, 0, 0.1, 1] }}
                    />
                </div>

                <Reveal isPlaying={true} delay={0}>
                    <h1 className="mt-2 text-white font-semibold text-[32px] md:text-[40px]">
                        {project.title}
                    </h1>
                </Reveal>
                <Reveal isPlaying={true} delay={0.75}>
                    <p className="font-semibold text-custom-gray mt-3 mb-4">
                        {project.desc}
                    </p>
                </Reveal>
                <Reveal isPlaying={true} delay={0.75}>
                    <AnimatePresence>
                        {infoVisible && (
                            <motion.div
                                className=" overflow-hidden"
                                initial={{ height: 0 }}
                                animate={{ height: 'auto' }}
                                exit={{ height: 0 }}
                                transition={{
                                    duration: 0.5,
                                    ease: 'easeInOut',
                                }}
                            >
                                <ul className="md:text-[16px] text-[14px]">
                                    {project.bullets.map((bullet, i) => {
                                        return (
                                            <li key={i}>
                                                <div className="flex flex-row pl-2 gap-2 items-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 1024 1024"
                                                    >
                                                        <path
                                                            fill="#6E98AE"
                                                            d="M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0a30.59 30.59 0 0 1 0-42.752L764.736 512L452.864 192a30.59 30.59 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0a30.59 30.59 0 0 1 0-42.752L508.736 512L196.864 192a30.59 30.59 0 0 1 0-42.688"
                                                        ></path>
                                                    </svg>
                                                    <span className="text-custom-gray italic font-medium">
                                                        {bullet}
                                                    </span>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <div
                        className="flex flex-row w-[110px] items-center mt-3 cursor-pointer relative hover:opacity-80 ease-in-out duration-300"
                        onClick={() => setInfoVisible(!infoVisible)}
                    >
                        <span className="text-light-blue">
                            {infoVisible ? 'See less' : 'See more'}
                        </span>
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            animate={{ rotate: infoVisible ? 180 : 0 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className={'absolute top-50 left-[4.5rem]'}
                        >
                            <path
                                fill="none"
                                stroke="#BDE6EC"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m7 10l5 5m0 0l5-5"
                            ></path>
                        </motion.svg>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-2 bg-dark-blue polygon2 mt-6 w-[200px]  h-[52px] hover:opacity-80 ease-in-out duration-300 cursor-pointer">
                        <span className="text-primary-dark font-semibold">
                            More info
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill="#0C1523"
                                fillRule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                            ></path>
                        </svg>
                    </div>
                </Reveal>
            </div>
            <Reveal isPlaying={true} delay={1}>
                <motion.div
                    className="project-polygon-wrap hidden md:flex"
                    initial={{ rotateX: -20, rotateY: 16, rotateZ: 4 }}
                    animate={controls}
                >
                    <div className="project-polygon-container w-[468px] h-[485px] flex justify-center items-center bg-med-blue bg-opacity-50">
                        <div className="w-[460px] h-[477px] project-polygon  bg-primary-dark">
                            <div className="w-[460px] h-[477px] project-polygon  bg-dark-blue bg-opacity-15 ">
                                <div className="relative z-10 w-full h-full flex flex-col overflow-hidden">
                                    <div className="w-full h-[318px] ">
                                        <div className="absolute top-0 left-0 w-full h-[318px] border border-custom-gray border-opacity-30 shine overflow-hidden opacity-90">
                                            <AnimatePresence initial={false}>
                                                <motion.div
                                                    key={currentSlide}
                                                    className="w-full h-full flex absolute top-0 left-0"
                                                    initial="initial"
                                                    animate="animate"
                                                    variants={slideVariants}
                                                >
                                                    <Image
                                                        src={
                                                            images[currentSlide]
                                                                .imageSrc
                                                        }
                                                        alt={`Slide ${currentSlide}`}
                                                        width={0}
                                                        height={0}
                                                        sizes="100vw"
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                        }}
                                                        className="object-cover "
                                                        priority={
                                                            images[currentSlide]
                                                                .priority
                                                        }
                                                    />
                                                    <Image
                                                        src={
                                                            images[
                                                                (currentSlide +
                                                                    1) %
                                                                    images.length
                                                            ].imageSrc
                                                        }
                                                        alt={`Slide ${(currentSlide + 1) % images.length}`}
                                                        width={0}
                                                        height={0}
                                                        sizes="100vw"
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                        }}
                                                        className="object-cover "
                                                        priority={
                                                            images[currentSlide]
                                                                .priority
                                                        }
                                                    />
                                                </motion.div>
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                    <div className="relative w-full h-[159px] ">
                                        <div className="absolute left-[188px] top-[24px]">
                                            <ul className="flex flex-row gap-2">
                                                {images.map((_, index) => (
                                                    <li
                                                        key={index}
                                                        className={`rounded-full ${
                                                            currentSlide ===
                                                            index
                                                                ? 'bg-med-blue'
                                                                : ''
                                                        } w-[10px] h-[10px] border-2 border-med-blue duration-500 ease-in-out`}
                                                    />
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="absolute right-[32px] top-[60px] ">
                                            <ul className="flex flex-row ">
                                            {project.stack.map((stack, i) => {
                                                    return (
                                                        <li key={i}
                                                    className="-mr-2 last:mr-0 h-[48px] w-[48px] flex justify-center items-center rounded-full border border-custom-gray border-opacity-30 bg-gradient-to-r from-primary-light to-primary-dark"
                                                >
                                                    <div dangerouslySetInnerHTML={{ __html: stack.svg }} />
                                                </li>
                                                    )
                                                })}
                                                {/* <li
                                                    className="-mr-2 h-[48px] w-[48px] flex justify-center items-center rounded-full border border-custom-gray border-opacity-30 bg-gradient-to-r from-primary-light to-primary-dark"
                                                    data-tip="Description for Item 1"
                                                >
                                               
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            fill="white"
                                                            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m4-14h-1.35v4H16zM9.346 9.71l6.059 7.828l1.054-.809L9.683 8H8v7.997h1.346z"
                                                        ></path>
                                                    </svg>
                                                </li>
                                                <li className="-mr-2 h-[48px] w-[48px] flex justify-center items-center rounded-full border border-custom-gray border-opacity-30 bg-gradient-to-r from-primary-light to-primary-dark">
                                           
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 256 256"
                                                    >
                                                        <g fill="none">
                                                            <rect
                                                                width={256}
                                                                height={256}
                                                                fill="#007acc"
                                                                rx={60}
                                                            ></rect>
                                                            <path
                                                                fill="#fff"
                                                                d="m56.611 128.849l-.081 10.484h33.32v94.679h23.57v-94.679h33.32v-10.281c0-5.689-.121-10.443-.284-10.565c-.122-.162-20.399-.244-44.983-.203l-44.739.122zm149.956-10.741c6.501 1.626 11.459 4.511 16.01 9.224c2.357 2.52 5.851 7.112 6.136 8.209c.081.325-11.053 7.802-17.798 11.987c-.244.163-1.22-.894-2.317-2.519c-3.291-4.795-6.745-6.868-12.028-7.233c-7.761-.529-12.759 3.535-12.718 10.321c0 1.991.284 3.169 1.097 4.795c1.706 3.535 4.876 5.648 14.832 9.955c18.326 7.884 26.168 13.085 31.045 20.48c5.445 8.249 6.664 21.415 2.966 31.208c-4.063 10.646-14.141 17.879-28.323 20.277c-4.388.772-14.791.65-19.504-.203c-10.281-1.829-20.033-6.908-26.047-13.572c-2.357-2.601-6.949-9.387-6.664-9.875c.121-.162 1.178-.812 2.356-1.503c1.138-.65 5.446-3.129 9.509-5.486l7.355-4.267l1.544 2.276c2.154 3.291 6.867 7.802 9.712 9.305c8.167 4.308 19.383 3.698 24.909-1.259c2.357-2.154 3.332-4.389 3.332-7.68c0-2.967-.366-4.267-1.91-6.502c-1.991-2.844-6.054-5.242-17.595-10.24c-13.206-5.689-18.895-9.224-24.096-14.832c-3.007-3.25-5.852-8.452-7.03-12.8c-.975-3.616-1.219-12.678-.447-16.335c2.722-12.759 12.353-21.658 26.25-24.3c4.511-.853 14.994-.528 19.424.569"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </li>
                                                <li className="-mr-2 h-[48px] w-[48px] flex justify-center items-center rounded-full border border-custom-gray border-opacity-30 bg-gradient-to-r from-primary-light to-primary-dark">
                                                
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 128 128"
                                                    >
                                                        <path
                                                            fill="#38bdf8"
                                                            d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602q-9.6 12.803-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602Q9.603 76.799 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597q-9.6 12.797-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0"
                                                        ></path>
                                                    </svg>
                                                </li>
                                                <li className="-mr-2 h-[48px] w-[48px] flex justify-center items-center rounded-full border border-custom-gray border-opacity-30 bg-gradient-to-r from-primary-light to-primary-dark">
                                      
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 256 256"
                                                    >
                                                        <g fill="none">
                                                            <rect
                                                                width={256}
                                                                height={256}
                                                                fill="#677eeb"
                                                                rx={60}
                                                            ></rect>
                                                            <path
                                                                fill="#f7fafc"
                                                                fillRule="evenodd"
                                                                d="M52.658 165.183a9.385 9.385 0 0 1-.075-9.929L123.045 40.32c3.919-6.393 13.382-5.834 16.521.975l64.369 139.631c2.388 5.181-.361 11.277-5.826 12.917l-100.13 30.039a9.384 9.384 0 0 1-10.622-3.964zm78.515-91.257c.679-3.382 5.312-3.87 6.68-.703l44.401 102.74a3.518 3.518 0 0 1-2.224 4.768l-69.182 20.652c-2.543.759-4.979-1.463-4.456-4.065z"
                                                                clipRule="evenodd"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </li>
                                                <li className="h-[48px] w-[48px] flex justify-center items-center rounded-full border border-custom-gray border-opacity-30 bg-gradient-to-r from-primary-light to-primary-dark">
                                                
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
	<path fill="white" d="M10.74 12.89v-.11c.06-.15.12-.29.19-.43a5.15 5.15 0 0 0 .26-3.74a.86.86 0 0 0-.66-.74a3.12 3.12 0 0 0-2.08.61v.18a11.34 11.34 0 0 1-.06 2.41a2.37 2.37 0 0 0 .62 2a2 2 0 0 0 1.43.63a8.05 8.05 0 0 1 .3-.81M10 8.58a.36.36 0 0 1-.09-.23a.19.19 0 0 1 .09-.12a.74.74 0 0 1 .48-.07c.25 0 .5.16.48.34a.51.51 0 0 1-.49.33h-.06a.63.63 0 0 1-.41-.25"></path>
	<path fill="white" d="M7.88 11a12.58 12.58 0 0 0 .06-2.3v-.28a7 7 0 0 1 1.54-4.55c-1-.32-3.4-1-4.87.1c-.9.64-1.32 1.84-1.23 3.55a24.85 24.85 0 0 0 1 4.4c.68 2.22 1.45 3.62 2.11 3.85c.1 0 .41.13.86-.41c.64-.76 1.23-1.41 1.5-1.7l-.19-.19A2.89 2.89 0 0 1 7.88 11m3.5 3.4c-.16-.06-.24-.1-.42.11a2.52 2.52 0 0 0-.29.35c-.35.43-.5.58-1.51.79a2 2 0 0 0-.4.11a1 1 0 0 0 .37.16a2.21 2.21 0 0 0 2.5-.8a.41.41 0 0 0 0-.35a.59.59 0 0 0-.25-.37m6.29-5.82a5.29 5.29 0 0 0 .08-.79c-.66-.08-1.42-.07-1.72.36c-.58.83.56 2.88 1 3.75a4.34 4.34 0 0 1 .26.48a1.79 1.79 0 0 0 .15.31a3.72 3.72 0 0 0 .16-2.13a7.51 7.51 0 0 1-.07-1.05a6 6 0 0 1 .14-.93m-.56-.16a.6.6 0 0 1-.32.17h-.06a.47.47 0 0 1-.44-.3c0-.14.2-.24.44-.28s.48 0 .5.15a.38.38 0 0 1-.12.26"></path>
	<path fill="white" d="M17 4.88a6.06 6.06 0 0 1 1.37 2.57a.71.71 0 0 1 0 .15a5.67 5.67 0 0 1-.09 1.06a7.11 7.11 0 0 0-.09.86a6.61 6.61 0 0 0 .07 1a4 4 0 0 1-.36 2.71l.07.08c2.22-3.49 3-7.54 2.29-8.43a4.77 4.77 0 0 0-3.81-1.8a7.34 7.34 0 0 0-1.63.16A6.17 6.17 0 0 1 17 4.88"></path>
	<path fill="white" d="M21.65 14c-.07-.2-.37-.85-1.47-.62a6.28 6.28 0 0 1-1 .13a19.74 19.74 0 0 0 2.06-4.88c.37-1.45.66-3.39-.11-4.38A5.91 5.91 0 0 0 16.37 2a8.44 8.44 0 0 0-2.46.35a9.38 9.38 0 0 0-1.45-.14a4.8 4.8 0 0 0-2.46.62a12.22 12.22 0 0 0-1.77-.44A5.44 5.44 0 0 0 4 3.05c-1.24.87-1.81 2.39-1.71 4.52a26.28 26.28 0 0 0 1 4.67A15.76 15.76 0 0 0 4.4 15a3.39 3.39 0 0 0 1.75 1.83a1.71 1.71 0 0 0 1.69-.37a2 2 0 0 0 1 .59a3.65 3.65 0 0 0 2.35-.14v.81a8.46 8.46 0 0 0 .31 2.36a1 1 0 0 1 0 .13a3 3 0 0 0 .71 1.24a2.08 2.08 0 0 0 1.49.56a3 3 0 0 0 .7-.08a3.27 3.27 0 0 0 2.21-1.27a7.34 7.34 0 0 0 .91-4v-.26h.17a5.24 5.24 0 0 0 2.4-.4c.45-.23 1.91-1 1.56-2m-1.81 1.47a4.7 4.7 0 0 1-1.8.34a2.62 2.62 0 0 1-.79-.1c-.1.94-.32 2.69-.45 3.42a2.47 2.47 0 0 1-2.25 2.3a3.23 3.23 0 0 1-.66.07A2 2 0 0 1 12 20a16.77 16.77 0 0 1-.28-4.06a2.56 2.56 0 0 1-1.78.66a3.94 3.94 0 0 1-.94-.13c-.09 0-.87-.23-.86-.73s.66-.59.9-.64c.86-.18.92-.25 1.19-.59a2.79 2.79 0 0 1 .19-.24a2.56 2.56 0 0 1-1.11-.3c-.23.25-.86.93-1.54 1.74a1.43 1.43 0 0 1-1.11.63a1.23 1.23 0 0 1-.35 0C5.43 16 4.6 14.55 3.84 12a25.21 25.21 0 0 1-1-4.53c-.1-1.92.4-3.28 1.47-4c1.92-1.36 5-.31 5.7-.06a4 4 0 0 1 2.41-.66a5.58 5.58 0 0 1 1.4.18a7.51 7.51 0 0 1 2.5-.4a5.35 5.35 0 0 1 4.32 2c.69.88.23 3 0 3.89a18.84 18.84 0 0 1-2.41 5.41c.16.11.65.31 2 0c.46-.1.73 0 .82.25c.22.55-.7 1.13-1.21 1.37z"></path>
	<path fill="white" d="M17.43 13.59a4 4 0 0 1-.62-1c0-.07-.12-.24-.23-.43c-.58-1-1.79-3.22-1-4.34a2.16 2.16 0 0 1 2.12-.61a6.28 6.28 0 0 0-1.13-1.94a5.41 5.41 0 0 0-4.13-2a3.34 3.34 0 0 0-2.55.95A5.82 5.82 0 0 0 8.51 7.8l.15-.08A3.7 3.7 0 0 1 10 7.3a1.45 1.45 0 0 1 1.76 1.19a5.73 5.73 0 0 1-.29 4.09a3.29 3.29 0 0 0-.17.39v.11c-.1.27-.19.52-.25.73a.94.94 0 0 1 .57.07a1.16 1.16 0 0 1 .62.74v.16a.28.28 0 0 1 0 .09a22.22 22.22 0 0 0 .22 4.9a1.5 1.5 0 0 0 2 1.09A1.92 1.92 0 0 0 16.25 19c.15-.88.45-3.35.49-3.88c0-1.06.52-1.27.84-1.36z"></path>
	<path fill="white" d="m18 14.33l-.08-.06h-.12c-.26.07-.5.14-.47.8a1.9 1.9 0 0 0 .93.12a4.29 4.29 0 0 0 1.38-.29a3 3 0 0 0 .79-.52a3.47 3.47 0 0 1-2.43-.05"></path>
</svg>
                                                </li> */}
                                            </ul>
                                        </div>
                                        <div className="absolute bottom-8 left-[52px] flex flex-row justify-center items-center gap-3">
                                            <span className="text-custom-gray font-semibold">
                                                View repo
                                            </span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fill="#6E98AE"
                                                    fillRule="evenodd"
                                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Reveal>
        </div>
    );
}
