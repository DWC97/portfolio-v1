'use client';

import Footer from '@/components/global/Footer';
import Hero from '@/components/home/hero/Hero';
import ProjectSection from '@/components/home/project/ProjectSection';

import { ActiveSectionContext } from '@/context/ActiveSectionContext';
import useDetectSection from '@/hooks/useDetectSection';
import { useContext, useEffect, useRef } from 'react';

export default function Home() {
    const projectsRef = useRef(null);
    const heroRef = useRef(null);

    const { setActiveSection } = useContext(ActiveSectionContext);

    const [isProjectsInView] = useDetectSection(projectsRef);
    const [isHeroInView] = useDetectSection(heroRef);
   

    useEffect(() => {
        if (isHeroInView) {
            setActiveSection('hero');
        }
        if (isProjectsInView) {
            setActiveSection('projects');
        }
       
    }, [isProjectsInView, setActiveSection]);

    return (
        <>
            <div id="hero" ref={heroRef}>
                <Hero />
            </div>
            <div id="projects" className="min-h-[300vh]" ref={projectsRef}>
                <ProjectSection />
            </div>
 
            {/* <Footer /> */}
        </>
    );
}
