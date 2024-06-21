import { useEffect, useState } from 'react';

export function useViewportWidth() {
    const [viewportWidth, setViewportWidth] = useState(0);

    useEffect(() => {
        const updateViewportWidth = () => {
            setViewportWidth(window.innerWidth);
        };

        // Update viewport width on initial mount
        updateViewportWidth();

        window.addEventListener('resize', updateViewportWidth);

        return () => {
            window.removeEventListener('resize', updateViewportWidth);
        };
    }, []);

    return viewportWidth;
}