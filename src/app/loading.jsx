"use client"

import { useGlitch } from 'react-powerglitch';
import { TypeAnimation } from 'react-type-animation';

export default function Loading() {

    const glitch = useGlitch({
        timing: {
            duration: 1000,
        },
        shake: {
            velocity: 5,
            amplitudeX: 0.04,
            amplitudeY: 0.06,
        },
    });
    return (
        <div className="h-screen w-full relative ">
            <div className='absolute bottom-0 right-0 p-[60px] 2xl:p-[80px] flex flex-col'>
                <span ref={glitch.ref} className='text-dark-blue text-xl font-semibold'>LOADING
                    <span className='font-bold' style={{ display: 'inline-block', width: '1.5em', textAlign: 'left' }}>
                    <TypeAnimation
                            sequence={[
                                '', // Initial blank state
                                500, // Wait for 0.5 second
                                '.', // Type the first dot
                                500, // Wait for 0.5 second
                                '..', // Type the second dot
                                500, // Wait for 0.5 second
                                '...', // Type the third dot
                                500, // Wait for 0.5 second
                                '', // Clear all dots together
                                0, // Wait for 0.5 second before restarting
                            ]}
                            wrapper="span"
                            speed={3} // Speed for typing each character
                            repeat={Infinity} // Repeat indefinitely
                            cursor={false} // Hide the cursor
                            omitDeletionAnimation={true}
                        />
                    </span>
                </span>
            </div>
        </div>
    );
}