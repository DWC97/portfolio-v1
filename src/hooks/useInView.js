import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const useInView = (sectionIds, initialActive = '') => {
    const [activeSection, setActiveSection] = useState(initialActive);
    const path = usePathname(); // find current path

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sectionIds.forEach((id) => {
            const section = document.getElementById(id);
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            sectionIds.forEach((id) => {
                const section = document.getElementById(id);
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, [sectionIds]);

    useEffect(() => {
        if (path.includes('articles')) {
            setActiveSection('articles');
        }
    }, [path]);

    return activeSection;
};
