'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import projectsData from '@/data/projects.json';
import Image from 'next/image';

export default function Banner() {
    const project = projectsData.projects[2];

    return (
        <div className='w-full h-[700px]'>
            <div className="relative h-[530px] w-full -rotate-3 z-0">
                <Image
                    src="/images/fc-24-player-database/saka-header.avif"
                    alt="banner"
                    fill
                    sizes="100vw"
                    priority
                    className="object-contain opacity-90"
                />
                
            </div>
            <div className='absolute bottom-0 left-0 w-full h-[250px] bg-primary-dark' />
            <div className='absolute bottom-[250px] left-0 w-full h-[350px] bg-gradient-to-b from-transparent to-primary-dark' />

            
        </div>
    );
}
