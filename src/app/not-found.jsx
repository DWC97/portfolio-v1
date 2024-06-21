"use client"

import Link from 'next/link';
import { useGlitch } from 'react-powerglitch';

// 404 page
export default function NotFound() {

    const glitch = useGlitch({
        timing: {
            duration: 2500,
        },
        shake: {
            velocity: 20,
            amplitudeX: 0.06,
            amplitudeY: 0.08,
        },
    });

    return (
        <div className="w-full h-screen relative flex justify-center items-center">
     

            <div className="z-10 flex flex-col items-center justify-center gap-2">
                <span className="text-white text-[96px] font-medium cyberpunk-heading"
                ref={glitch.ref}
                >404</span>
                <h1 className="text-white font-bold text-[40px] leading-snug">
                    Page not found
                </h1>
                <span className="text-gray-300 px-10 text-center">
                    Sorry, we couldn&apos;t find the page you&apos;re looking
                    for.
                </span>
                <Link
                    href={'/'}
                    className="mt-8 flex flex-row items-center hover:opacity-80 ease-in-out duration-300 gap-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="rotate-180"
                        width={20}
                        height={20}
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill="white"
                            fillRule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                        ></path>
                    </svg>
                    <span className="text-gray-200 text-[14px] font-semibold">
                        BACK TO HOME
                    </span>
                </Link>
            </div>
        </div>
    );
}
