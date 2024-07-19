'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Reveal } from '@/animations/Reveal';
import Image from 'next/image';
import projectsData from '@/data/projects.json';
import Link from 'next/link';

export default function ProjectSection({ index }) {
    const project = projectsData.projects[index];
    const [infoVisible, setInfoVisible] = useState(false);
    const controls = useAnimation();
    const images = project.slides;
    const [currentSlide, setCurrentSlide] = useState(0);
    const initialRotateX = index === 1 ? 20 : -20;
    const initialRotateY = index === 1 ? -16 : 16;
    const initialRotateZ = index === 1 ? -4 : 4;

    useEffect(() => {
        const rotateX = index === 1 ? [20, 10] : [-20, -10];
        const rotateY = index === 1 ? [-16, 4] : [16, -4];
        const rotateZ = index === 1 ? [-4, -2] : [4, 2];
        // Start continuous animation
        controls.start({
            rotateX,
            rotateY,
            rotateZ,
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
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    return (
        <div
            className={`w-full min-h-screen md:min-h-[120vh] flex flex-col ${index === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}  justify-center items-center gap-20  2xl:gap-40 py-0  md:py-40 lg:py-0`}
        >
            <div
                className={`w-full px-10 md:px-0 md:w-[400px] flex flex-col lg:h-[500px] lg:justify-center `}
            >
                <div className={`flex flex-row  w-full items-center`}>
                    <motion.span
                        className={`text-[36px] md:text-[48px] text-dark-blue cyberpunk-heading pr-6 `}
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
                    <h1
                        className={`mt-2 text-white font-semibold text-[32px] md:text-[40px] `}
                    >
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
                                <ul className="text-[14px]">
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
                    <Link
                        href={project.link}
                        className={`flex flex-row items-center justify-center gap-2 bg-dark-blue polygon2  mt-6 w-[200px]  h-[52px] hover:opacity-80 ease-in-out duration-300 cursor-pointer`}
                    >
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
                    </Link>
                </Reveal>
            </div>
            <Reveal isPlaying={true} delay={1}>
                <motion.div
                    className="project-polygon-wrap hidden md:flex"
                    initial={{
                        rotateX: initialRotateX,
                        rotateY: initialRotateY,
                        rotateZ: initialRotateZ,
                    }}
                    animate={controls}
                >
                    <div className="project-polygon-container w-[468px] h-[485px] flex justify-center items-center bg-med-blue bg-opacity-50 rounded-t-2xl">
                        <div className="w-[460px] h-[477px] project-polygon rounded-t-2xl bg-primary-dark">
                            <div className="w-[460px] h-[477px] project-polygon rounded-t-2xl bg-dark-blue bg-opacity-15 ">
                                <div className="relative z-10 w-full h-full flex flex-col overflow-hidden">
                                    <div className="w-full h-[318px] px-[24px] pt-[24px] ">
                                        <div className="w-full h-[294px] bg-black bg-opacity-70">
                                            <div className="absolute top-0 left-0 w-full h-[294px] shine overflow-hidden opacity-90 border-custom-gray border border-opacity-50 ">
                                                <AnimatePresence
                                                    initial={false}
                                                >
                                                    <motion.div
                                                        key={currentSlide}
                                                        className="w-full h-full flex absolute top-0 left-0"
                                                        initial={{ x: 0 }}
                                                        animate={{ x: '-100%' }}
                                                        transition={{
                                                            duration: 1.25,
                                                            ease: [
                                                                0.4, 0, 0.1, 1,
                                                            ],
                                                        }}
                                                    >
                                                        <Image
                                                            src={
                                                                images[
                                                                    currentSlide
                                                                ].imageSrc
                                                            }
                                                            alt={`Slide ${currentSlide}`}
                                                            width={0}
                                                            height={0}
                                                            sizes="100vw"
                                                            style={{
                                                                width: '100%',
                                                                height: '100%',
                                                            }}
                                                            className="object-cover"
                                                            priority={true}
                                                            placeholder="blur"
                                                            blurDataURL={
                                                                images[
                                                                    currentSlide
                                                                ].blurredSrc
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
                                                            className="object-cover"
                                                            priority={
                                                                images[
                                                                    (currentSlide +
                                                                        1) %
                                                                        images.length
                                                                ].priority
                                                            }
                                                            placeholder="blur"
                                                            blurDataURL={
                                                                images[
                                                                    (currentSlide +
                                                                        1) %
                                                                        images.length
                                                                ].blurredSrc
                                                            }
                                                        />
                                                    </motion.div>
                                                </AnimatePresence>
                                            </div>
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
                                                {project.stack.map(
                                                    (stack, i) => {
                                                        return (
                                                            <li
                                                                key={i}
                                                                className="-mr-2 last:mr-0 h-[48px] w-[48px] flex justify-center items-center rounded-full border border-custom-gray border-opacity-30 bg-gradient-to-r from-primary-light to-primary-dark"
                                                            >
                                                                <div
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: stack.svg,
                                                                    }}
                                                                />
                                                            </li>
                                                        );
                                                    }
                                                )}
                                            </ul>
                                        </div>
                                        <a
                                            href={project.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`absolute bottom-8 ${project.repo ? "left-[52px]" : "left-[60px]"}  flex flex-row justify-center items-center gap-3 hover:opacity-80 ease-in-out duration-300`}
                                        >
                                            <span className="text-custom-gray font-semibold">
                                                {project.repo
                                                    ? 'View repo'
                                                    : 'No repo'}
                                            </span>
                                            {project.repo ? (
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
                                            ) : (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 32 32"
                                                >
                                                    <path
                                                        fill="#6E98AE"
                                                        d="M16 3.667C9.19 3.667 3.667 9.187 3.667 16S9.19 28.333 16 28.333c6.812 0 12.333-5.52 12.333-12.333S22.813 3.667 16 3.667m0 3c1.85 0 3.572.548 5.024 1.48L8.147 21.024A9.263 9.263 0 0 1 6.667 16c0-5.146 4.187-9.333 9.333-9.333m0 18.666a9.271 9.271 0 0 1-5.024-1.48l12.876-12.877A9.263 9.263 0 0 1 25.332 16c0 5.146-4.186 9.333-9.332 9.333"
                                                    ></path>
                                                </svg>
                                            )}
                                        </a>
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
