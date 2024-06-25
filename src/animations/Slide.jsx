import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';



// slide animation
export function Slide({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            slideControls.start('visible');
        }
    }, [isInView, slideControls]);

    return (
        <div ref={ref} className="">
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: -300 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 1, delay: 2 }}
            >
                {children}
            </motion.div>
        </div>
    );
}
