'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '@/animations/Reveal';
import Image from 'next/image';

export default function ProjectSection({ title }) {
    const [infoVisible, setInfoVisible] = useState(false);

    return (
        <div className="w-full min-h-[120vh] flex flex-row justify-center items-center gap-20">
            <div className="w-[400px] flex flex-col ">
                <div className="flex flex-row w-full items-center">
                    <motion.span
                        className="text-[48px] text-dark-blue cyberpunk-heading pr-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                    >
                        01
                    </motion.span>
                    <motion.div
                        className="h-[5px] bg-custom-gray bg-opacity-30"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 3, ease: [0.4, 0, 0.1, 1] }}
                    />
                </div>

                <Reveal isPlaying={true} delay={0}>
                    <h1 className="mt-2 text-white font-semibold text-[40px]">
                        {title}
                    </h1>
                </Reveal>
                <Reveal isPlaying={true} delay={0.75}>
                    <p className="font-semibold text-custom-gray mt-3 mb-4">
                        Trading & analytics dashboard for the XRPL blockchain.
                        Development Funded by Ripple as part of their XRPL
                        Grants program.
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
                                <ul>
                                    <li>
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
                                                Live trading via the XRPL DEX
                                            </span>
                                        </div>
                                    </li>
                                    <li>
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
                                                Charts for market/portfolio
                                                analysis
                                            </span>
                                        </div>
                                    </li>
                                    <li>
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
                                                Drag & drop modularity for a
                                                custom UI
                                            </span>
                                        </div>
                                    </li>
                                    <li>
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
                                                Personalized user profiles
                                            </span>
                                        </div>
                                    </li>
                                    <li>
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
                                                Real-time messaging with web
                                                sockets
                                            </span>
                                        </div>
                                    </li>
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
                            View demo
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
            <div className="project-polygon-wrap"
            // style={{ transform: 'rotateX(-20deg) rotateY(14deg) rotateZ(6deg)' }}
            >
                <div className="project-polygon-container w-[468px] h-[538px] flex justify-center items-center bg-med-blue">
                    <div className="w-[460px] h-[530px] project-polygon  bg-primary-dark">
                        <div className="w-[460px] h-[530px] project-polygon  bg-dark-blue bg-opacity-15 ">
                            <div className="relative z-10 w-full h-full flex flex-col overflow-hidden">
                                <div className='w-full h-[371px] bg-black'>

                                </div>
                                {/* <Image
                src={"/test.png"}
                alt="cart item"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                    width: '100%',
                    height: '100%',
                }}
                className="object-cover"
                /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
