'use client';

import { useEffect, useState } from 'react';
import projectsData from '@/data/projects.json';
import Image from 'next/image';

export default function Banner({ index }) {
    const project = projectsData.projects[index];
    const [opacity, setOpacity] = useState(1);

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
        <div className="w-full h-auto sm:h-[1040px] xl:h-[700px] relative overflow-hidden">
            <div className="relative hidden sm:flex h-[500px] md:h-[600px] w-full  z-0"
            style={{ opacity }}
            >
                <Image
                    src={project.banner}
                    alt="banner"
                    fill
                    sizes="100vw"
                    priority
                    className="object-contain opacity-90 z-0 "
                />
            </div>
            <div className="absolute hidden sm:flex top-[450px] xl:bottom-0 left-0 w-full h-[250px] bg-primary-dark z-10" />
            <div className="absolute hidden sm:flex bottom-[590px] xl:bottom-[250px] left-0 w-full h-[300px] bg-gradient-to-b from-transparent to-primary-dark z-10" />
            <div className="absolute hidden sm:flex bottom-[590px] xl:bottom-[250px] left-0 w-full h-[320px] bg-gradient-to-b from-transparent to-primary-dark z-10" />
            <div className=" sm:absolute relative sm:mt-0 mt-[160px] flex  sm:top-[320px] w-full  flex-col xl:flex-row gap-10 xl:gap-20 items-center z-20">
                <div className="flex flex-col w-full xl:w-[620px]">
                    <h1 className="text-white text-[40px] md:text-[56px] font-semibold">
                        {project.title}
                    </h1>
                    <p className="font-medium text-[20px] text-custom-gray mt-8">
                        {project.desc}
                    </p>
                    <div className="flex flex-row justify-between items-center mt-8">
                        {project.repo && <a
                        href={project.demo}
                        target="_blank" 
                    rel="noopener noreferrer"
                        className="flex flex-row items-center gap-3 hover:opacity-80 ease-in-out duration-300">
                            <span className="text-dark-blue font-medium text-[20px]">
                                Live demo
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 16 16"
                                className='hidden sm:flex'
                            >
                                <path
                                    fill="#00EEFF"
                                    fillRule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                ></path>
                            </svg>
                        </a>}
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
                <ul className='w-full xl:w-auto xl:flex-grow h-full flex flex-col text-gray-400 text-[20px] border-b border-white border-opacity-20'>
                    {project.roles.map((role, i) => {
                        return (
                            <li key={i} className='py-5 border-t border-white border-opacity-20'>{role}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}
