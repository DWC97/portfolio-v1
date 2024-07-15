'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import projectsData from '@/data/projects.json';
import Image from 'next/image';

export default function Banner() {
    const project = projectsData.projects[2];

    return (
        <div className="w-full h-[700px]">
            <div className="relative h-[600px] w-full -rotate-3 z-0">
                <Image
                    src="/images/fc-24-player-database/saka-header.avif"
                    alt="banner"
                    fill
                    sizes="100vw"
                    priority
                    className="object-contain opacity-90"
                />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[250px] bg-primary-dark" />
            <div className="absolute bottom-[250px] left-0 w-full h-[300px] bg-gradient-to-b from-transparent to-primary-dark" />
            <div className="absolute bottom-[250px] left-0 w-full h-[320px] bg-gradient-to-b from-transparent to-primary-dark" />
            <div className="absolute top-[320px] w-full flex flex-row gap-20 items-center">
                <div className="flex flex-col w-[620px]">
                    <h1 className="text-white text-[56px] font-semibold">
                        FC 24 Player Database
                    </h1>
                    <p className="font-medium text-[20px] text-custom-gray mt-8">
                        Search & visualization tool for the FC 24 player
                        dataset. Includes ~5000 players from Europe's top five
                        leagues. Non-commerical product created purely for skill
                        development.
                    </p>
                    <div className="flex flex-row justify-between items-center mt-8">
                        <div className="flex flex-row items-center gap-3">
                            <span className="text-dark-blue font-medium text-[20px]">
                                Live demo
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill="#00EEFF"
                                    fillRule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                ></path>
                            </svg>
                        </div>
                        <ul className="flex flex-row ">
                            {project.stack.map((stack, i) => {
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
                            })}
                        </ul>
                    </div>
                </div>
                <ul className='w-[300px] h-full flex flex-col text-gray-400 text-[20px]'>
                    <li className='py-5 border-t border-white border-opacity-20'>Conceptualization</li>
                    <li className='py-5 border-t border-white border-opacity-20'>UI/UX Design</li>
                    <li className='py-5 border-t border-white border-opacity-20'>Front End Development</li>
                    <li className='py-5 border-y border-white border-opacity-20'>Back End Development</li>
                </ul>
            </div>
        </div>
    );
}
