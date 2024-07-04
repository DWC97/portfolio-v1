import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';



// reveal animation
export function Reveal({ children, isPlaying, delay }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isPlaying){
        if (isInView) {

            mainControls.start('visible');
        }}
    }, [isInView, mainControls, isPlaying]);

    return (
        <div ref={ref} className="">
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1, delay }}
            >
                {children}
            </motion.div>
        </div>
    );
}
