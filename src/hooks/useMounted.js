import { useEffect, useState } from 'react';

export const useMounted = () => {
    const [mounted, setMounted] = useState();
    // effects run only client-side
    // so we can detect when the component is hydrated/mounted
    useEffect(() => {
        setMounted(true);
    }, []);
    return mounted;
};