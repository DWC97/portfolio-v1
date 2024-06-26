'use client';

import { useEffect, useState } from 'react';
import { useInView, motion } from 'framer-motion';

export default function Articles() {
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        setPlaying(true);
    }, []);
    return (
        <div
            className="min-h-screen w-full flex-col 2xl:flex-row"
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
                        <span className={`text-dark-blue font-medium ${playing ? 'opacity-100' : 'opacity-0'} ease-in-out duration-500`}>
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
                            <span className='font-medium text-custom-gray'>5 min</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SkeletonCard(){
    return (
        <div>
            
        </div>
    )
}