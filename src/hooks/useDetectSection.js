import { useEffect, useState } from 'react';



// detect whether a given element is in view
export default function useDetectSection(
    ref
) {
    const [isInView, setIsInView] = useState(false);

    function checkInView() {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setIsInView(
                rect.top < window.innerHeight / 2 &&
                    rect.bottom >= window.innerHeight / 2
            );
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', checkInView);
        return () => {
            document.removeEventListener('scroll', checkInView);
        };
    }, []);

    return [isInView];
}
