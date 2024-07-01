"use client"

import Footer from '@/components/global/Footer';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ParallaxArticle() {

    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = window.innerHeight * 0.75; // 75vh
            const newOpacity = Math.max(0, 1 - scrollY / maxScroll);
            setOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
        <div className="w-full h-[200vh] flex flex-col items-center">
            <div className="w-full h-[75vh] relative">
                <div className="absolute w-full h-full -z-10"
                style={{ opacity }}

                >
                    <Image
                        src="/images/articlebg.png"
                        alt="article banner"
                        fill
                        sizes="(height: 100%)"
                        className="object-cover object-top"
                        priority
                    />
                </div>
                <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-transparent to-primary-dark opacity-100 z-0" />
            </div>
        </div>
        <Footer />
        </>
    );
}
