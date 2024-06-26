'use client';

import { useEffect, useState } from 'react';
import { useInView, motion } from 'framer-motion';
import Image from 'next/image';
import Footer from '@/components/global/Footer';

export default function Articles() {
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        setPlaying(true);
    }, []);
    return (
        <>
        <div
            className="min-h-[90vh] w-full flex-col 2xl:flex-row overflow-hidden"
            id="articles"
        >
            <div className="w-full 2xl:w-2/5 flex flex-col px-10">
                <h2 className="text-[28px] font-medium text-white mt-40 mb-10 w-full border-b border-opacity-10 border-white px-4">
                    Latest articles
                </h2>
                <div className="flex flex-col hover:bg-primary-light p-4 cursor-pointer duration-500 ease-in-out">
                    <div className="flex flex-row gap-6">
                        <div
                            className={`w-[220px] relative ${playing ? 'opacity-100' : 'opacity-0'} ease-in-out duration-500`}
                        >
                            <div className="absolute bottom-0 left-0 polygon1 bg-dark-blue w-[112px] h-[12px] border-b border-b-dark-blue" />
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
                            className={`text-dark-blue font-medium ${playing ? 'opacity-100' : 'opacity-0'} ease-in-out duration-500`}
                        >
                            July 28th 2024
                        </span>
                    </div>
                    <h1 className="text-[32px] font-semibold text-white my-6">
                        How I created an interactive 3-D parallax effect in
                        React
                    </h1>
                    <p className="text-custom-gray font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi in nulla egestas, consequat nunc auctor, faucibus
                        arcu. Aenean ligula nulla, venenatis eu lorem vel,
                        vehicula tincidunt justo. Ut aliquet tempus felis, vel
                        convallis lacus porttitor at. Duis viverra nunc quis
                        neque elementum euismod.
                    </p>
                    <div className="flex flex-row justify-between mt-6">
                        <div className="flex flex-row gap-2 items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="#00EEFF"
                                    d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"
                                ></path>
                            </svg>
                            <span className="text-dark-blue font-semibold">
                                Read article
                            </span>
                        </div>
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
                <div className="w-full border-b border-opacity-10 border-white my-6" />
                <SkeletonCard />
                <div className="w-full border-b border-opacity-10 border-white my-6" />
                <SkeletonCard />
                <div className="w-full border-b border-opacity-10 border-white my-6" />
            </div>
            <div className="flex flex-col h-[80vh] w-full 2xl:w-2/5 px-10 mt-6 mb-12 relative featured-container">
            <div className='relative w-full h-full z-0  overflow-hidden'>
                <div
                    className="h-full w-full  opacity-50 featured-bg"
                    style={{
                        backgroundImage: 'url(/images/bg6.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col  z-10 px-28 pb-12 justify-end ">
                    <span className='absolute -top-4 left-20 z-20 bg-primary-dark text-white font-medium py-2 px-4'>Coming soon</span>
                    <div className="flex flex-row gap-6 mb-6">
                        <div
                            className={`w-[220px] relative ${playing ? 'opacity-100' : 'opacity-0'} ease-in-out duration-500`}
                        >
                            <div className="absolute bottom-0 left-0 polygon1 bg-dark-blue w-[112px] h-[12px] border-b border-b-dark-blue" />
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
                            className={`text-dark-blue font-medium ${playing ? 'opacity-100' : 'opacity-0'} ease-in-out duration-500`}
                        >
                            September 2024
                        </span>
                    </div>
                    <h1 className="font-semibold text-white text-[56px] leading-[76px] pb-6">
                        Why Next.js is perfect for your next portfolio website
                    </h1>
                    <p className="text-custom-gray font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi in nulla egestas, consequat nunc auctor, faucibus
                        arcu. Aenean ligula nulla, venenatis eu lorem vel,
                        vehicula tincidunt justo. Ut aliquet tempus felis, vel
                        convallis lacus porttitor at. Duis viverra nunc quis
                        neque elementum euismod.
                    </p>
                    <div className="flex flex-row justify-between mt-6">
                        <div className="flex flex-row gap-2 items-center">
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
                            <span className="text-custom-gray font-semibold">
                                Currently unavailable
                            </span>
                        </div>
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
        </div>
        <Footer />
        </>
    );
}

function SkeletonCard() {
    return (
        <div className="flex flex-col  p-4 opacity-70">
            <div className="flex flex-row gap-6">
                <div
                    className={`w-[220px] relative 'opacity-100' ease-in-out duration-500`}
                >
                    <div className="absolute bottom-0 left-0 polygon1 bg-custom-gray w-[112px] h-[12px] border-b border-custom-gray" />
                    <div className="absolute h-[2px] w-full bg-custom-gray bottom-0 left-0" />
                </div>
                <span className={`text-custom-gray font-medium `}>
                    Coming soon...
                </span>
            </div>
            <div className="w-full h-6 my-6 bg-primary-light" />
            <div className="w-full h-12 bg-primary-light" />

            <div className="flex flex-row justify-between mt-6">
                <div className="flex flex-row gap-2 items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="#6E98AE"
                            d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"
                        ></path>
                    </svg>
                    <span className="text-custom-gray font-semibold">
                        Read article
                    </span>
                </div>
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
                    <span className="font-medium text-custom-gray">? min</span>
                </div>
            </div>
        </div>
    );
}
