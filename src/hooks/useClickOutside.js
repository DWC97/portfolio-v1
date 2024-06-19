import { useEffect, useRef } from 'react';

// Generic version of useClickOutside to handle various element types
export function useClickOutside(handler) {
    const domNode = useRef(null);

    useEffect(() => {
        function maybeHandler(e) {
            if (domNode.current && !domNode.current.contains(e.target)) {
                handler(e);
            }
        }

        document.addEventListener('mousedown', maybeHandler);

        return () => {
            document.removeEventListener('mousedown', maybeHandler);
        };
    }, [handler]);

    return domNode;
}
