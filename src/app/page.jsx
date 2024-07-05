'use client';

import Footer from '@/components/global/Footer';
import Hero from '@/components/home/hero/Hero';
import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Contact from '@/components/home/Contact';

// Dynamic import for ProjectSection to enable lazy loading
const ProjectSection = dynamic(
    () => import('@/components/home/project/ProjectSection'),
    {
        ssr: false,
    }
);

export default function Home() {
    const [sectionsInView, setSectionsInView] = useState([
        false,
        false,
        false,
        false,
    ]);
    const sectionRefs = [useRef(), useRef(), useRef(), useRef()];

    useEffect(() => {
        const observers = sectionRefs.map(
            (ref, index) =>
                new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                setSectionsInView((prevState) => {
                                    const newState = [...prevState];
                                    newState[index] = true;
                                    return newState;
                                });
                                observers[index].disconnect(); // Disconnect observer after the section is in view
                            }
                        });
                    },
                    { threshold: 0.1 }
                )
        );

        sectionRefs.forEach((ref, index) => {
            if (ref.current) {
                observers[index].observe(ref.current);
            }
        });

        // Clean up observers on unmount
        return () => {
            observers.forEach((observer, index) => {
                if (sectionRefs[index].current) {
                    observer.unobserve(sectionRefs[index].current);
                }
            });
        };
    }, []);
    return (
        <>
            <Hero />
            <div ref={sectionRefs[0]} className="min-h-screen" id="projects">
                {sectionsInView[0] && <ProjectSection title="XRPL Dash" />}
            </div>
            <div ref={sectionRefs[1]} className="min-h-screen">
                {sectionsInView[1] && <ProjectSection title="Project Two" />}
            </div>
            <div ref={sectionRefs[2]} className="min-h-screen">
                {sectionsInView[2] && <ProjectSection title="Project Three" />}
            </div>
            <div ref={sectionRefs[3]} className="min-h-screen" id="contact">
                {sectionsInView[3] && <Contact />}
            </div>
            {/* <Footer /> */}
        </>
    );
}
