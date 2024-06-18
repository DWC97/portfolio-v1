import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';



// reveal animation
export function Reveal({ children, modelReady }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            if (modelReady){
            mainControls.start('visible');}
        }
    }, [isInView, mainControls, modelReady]);

    return (
        <div ref={ref} className="">
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1, delay: 0.25 }}
            >
                {children}
            </motion.div>
        </div>
    );
}
