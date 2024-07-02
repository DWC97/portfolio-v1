'use client';

import Footer from '@/components/global/Footer';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Link from 'next/link';

export default function ParallaxArticle() {
    const [opacity, setOpacity] = useState(1);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        setPlaying(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = window.innerHeight * 0.5; // 75vh
            const newOpacity = Math.max(0, 1 - scrollY / maxScroll);
            setOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="w-full  flex flex-col items-center pb-20">
                <div className="w-full h-[75vh] relative flex flex-col justify-center items-center">
                    <div
                        className="absolute w-full h-full -z-10 overflow-hidden"
                        style={{ opacity }}
                    >
                        <img
                            src="/images/articlebg.png"
                            alt=""
                            className="w-full object-fill opacity-90"
                        />
                    </div>
                    <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-transparent to-primary-dark opacity-100 z-0" />
                    <div
                        className={`w-[700px]  z-10 mt-20 ${playing ? 'opacity-100' : 'opacity-0'} ease-in-out duration-500`}
                    >
                        <div className="flex flex-row gap-6">
                            <div
                                className={`w-[100px] sm:w-[220px] relative ${playing ? 'opacity-100' : 'opacity-0'} ease-in-out duration-500`}
                            >
                                <div className="absolute bottom-0 left-0 polygon1 bg-dark-blue w-[60px] sm:w-[112px] h-[12px] border-b border-b-dark-blue" />
                                <motion.div
                                    className="absolute h-[2px] w-full bg-dark-blue bottom-0 left-0"
                                    initial={{ width: '0%' }}
                                    animate={{ width: playing ? '100%' : '0%' }}
                                    transition={{
                                        duration: 2.5,
                                        ease: [0.4, 0, 0.1, 1],
                                    }}
                                />
                            </div>
                            <span
                                className={`text-dark-blue font-medium  text-[14px] sm:text-[16px]`}
                            >
                                July 28th 2024
                            </span>
                        </div>
                        <h1 className="text-[24px] sm:text-[48px] font-bold text-white my-6 leading-tight mt-10">
                            How I created an interactive 3-D parallax effect in
                            React
                        </h1>
                        <div className="flex flex-row items-center justify-between">
                            <a
                                href="#p1"
                                className="hover:opacity-80 ease-in-out duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={36}
                                    height={36}
                                    viewBox="0 0 1024 1024"
                                >
                                    <path
                                        fill="#6E98AE"
                                        d="M8.2 275.4c0-8.6 3.4-17.401 10-24.001c13.2-13.2 34.8-13.2 48 0l451.8 451.8l445.2-445.2c13.2-13.2 34.8-13.2 48 0s13.2 34.8 0 48L542 775.399c-13.2 13.2-34.8 13.2-48 0l-475.8-475.8c-6.8-6.8-10-15.4-10-24.199"
                                    ></path>
                                </svg>
                            </a>
                            <div className="flex flex-row gap-4 items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill="#6E98AE"
                                        fillRule="evenodd"
                                        d="M6.25 0a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zM13 9A5 5 0 1 1 3 9a5 5 0 0 1 10 0m1.5 0a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-2.28-7.28a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06M8.75 6a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 .3.6l1.333 1a.75.75 0 1 0 .9-1.2L8.75 8.625z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span className="font-medium text-custom-gray">
                                    5 min
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`w-[700px]  text-gray-300 text-[20px] leading-relaxed ${playing ? 'opacity-100' : 'opacity-0'} ease-in-out duration-500`}
                >
                    <p className=" pt-10" id="p1">
                        2024 has seen the rise of interactivity in web design.
                        Designers are pushing the boundaries with 3-D elements
                        to give users a unique experience. Parallax effects with
                        layers in the foreground and background moving at
                        different speeds to create a realistic perspective are
                        paticularly popular. In this article, I&apos;ll break
                        down how I implemented a parallax scroll effect using
                        the mouse position in React.js with Javascript and CSS.
                    </p>
                    <div className="flex flex-row gap-4 pl-4 py-4 items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 1024 1024"
                        >
                            <path
                                fill="#00EEFF"
                                d="M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0a30.59 30.59 0 0 1 0-42.752L764.736 512L452.864 192a30.59 30.59 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0a30.59 30.59 0 0 1 0-42.752L508.736 512L196.864 192a30.59 30.59 0 0 1 0-42.688"
                            ></path>
                        </svg>
                        <a href="https://github.com/DWC97" 
                    target="_blank" 
                    rel="noopener noreferrer" className="border-b-2 border-dark-blue border-opacity-30 hover:border-opacity-100 transition duration-300 ease-in-out text-dark-blue">
                            Demo of the final result.
                        </a>
                    </div>
                    <p className="pt-10">
                        The first and most important decision is to choose a
                        scene. Find a high-resolution image that has layers at
                        varying distances from the point of observation. That
                        means there should be layers in the foreground and in
                        the background of the image, otherwise it will be
                        impossible to create the illusion of depth.
                    </p>
                    <div className="w-full relative mt-10 mb-10">
                        <Image
                            src={'/images/articlebg2.jpg'}
                            alt="scene img"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    </div>
                    <p className="mt-10">
                        Once we have the image, we can move into Photoshop or
                        another photo editing tool of your choice. This isn&apos;t a
                        photoshop tutorial so I will keep the explanation brief.
                        In my case, the image needed color adjustments to dampen
                        the whites so the text content would be able to stand
                        out later on. The main work involved is cutting out each
                        individual layer and{' '}
                        <a
                            href="https://www.adobe.com/products/photoshop/generative-fill.html"
                            aria-label="generative fill tutorial"
                            target="_blank"
                            className="border-b-2 border-dark-blue border-opacity-30 hover:border-opacity-100 transition duration-300 ease-in-out text-dark-blue"
                        >
                            generating a filling
                        </a>{' '}
                        for the cut out sections.
                        <br />
                        <br />
                        Import the layers into React by adding them into the
                        public folder of the root directory. Using CSS, give
                        them an absolute position and tweak their top/left
                        values until they are placed in the correct position on
                        the page. Giving each layer a width of 100% will ensure
                        they are the right size. The layers in the foreground
                        need a higher z-index value so they sit at the top of
                        the stack. Each <code>&lt;img&gt;</code> element has the
                        parallax class so that we can translate the x, y and z
                        coordinates later with a Javascript function. The
                        parallax class is given a scale property so that the scene
                        is slightly zoomed in. This to stop the edge of the
                        background layers from becoming visible after they are
                        shifted due to the parallax effect. The transition
                        property gives the movement a smooth feel.
                    </p>
                    <div className="mt-10">
                        <SyntaxHighlighter
                            language="css"
                            style={docco}
                            customStyle={{ fontSize: '14px' }}
                        >
                            {`.parallax {
    transform: translate(-50%, -50%);
    scale: 1.085;
    transition: 0.45s cubic-bezier(0.2, 0.49, 0.32, .99);
}

.sky {
    position: absolute;
    width: 100%;
    top: 28%;
    left: 54.25%;
    z-index: 0;
}
.sea {
    position: absolute;
    width: 100%;
    top: 89%;
    left: 54.03%;
    z-index: 1;
}`}
                        </SyntaxHighlighter>
                    </div>
                    <p className="mt-10">
                        Before we can begin implementing the parallax effect
                        logic, we need to attach a dataset to each layer. This
                        will allow us to create relative motion between the
                        foreground and background layers when the mouse moves.
                        Layers in the background should generally have higher
                        values for speedX & speedY than the foreground layers
                        but lower values for speedZ and rotation. You will need
                        to tweak the values later on when you can actually see
                        the effect so don&apos;t worry about them too much now.
                    </p>
                    <div className="mt-10">
                        <SyntaxHighlighter
                            language="html"
                            style={docco}
                            customStyle={{ fontSize: '14px' }}
                        >
                            {`
{/* Background layer example */}
<img
    src="/hero/sky6.avif"
    alt="sky"
    className="sky parallax"
    data-speedx="0.08"
    data-speedy="0.075"
    data-speedz="0"
    data-rotation="0"
/>

{/* Foreground layer example */}
<img
    src="/hero/left-cliff.png"
    alt="left cliff"
    className="left-cliff parallax"
    data-speedx="0.05"
    data-speedy="0.045"
    data-speedz="0.6"
    data-rotation="0.15"
/>
    `}
                        </SyntaxHighlighter>
                    </div>
                    <p className="mt-10">
                        Finally, we can derive the logic for the mousemove
                        function. The basic idea is to determine the position of
                        the mouse relative to the center of the screen and
                        displace the layers according to their dataset values
                        using a transform inside a for loop. We use a isInLeft
                        var to check which side of the page the layer is on.
                        Layers will rotate clockwise or anti-clockwise around
                        the y-axis depending the boolean value.
                    </p>
                    <div className="mt-10">
                        <SyntaxHighlighter
                            language="javascript"
                            style={docco}
                            customStyle={{ fontSize: '14px' }}
                        >
                            {`function handleMousemove(e) {
    // Determine the x coordinate of the mouse relative to the center of the screen
    const xValue = e.clientX - window.innerWidth / 2;

    // Determine the y coordinate of the mouse relative to the center of the screen
    const yValue = e.clientY - window.innerHeight / 2;

    // Calculate the degree of rotation based on the x coordinate value
    const rotateDegree = (xValue / (window.innerWidth / 2)) * 25;

    // Get all elements with the class 'parallax'
    const parallaxElements = Array.from(document.getElementsByClassName('parallax'));

    // Iterate over each parallax element
    parallaxElements.forEach((el) => {
        // Destructure the dataset attributes (speedx, speedy, speedz, rotation) from the element
        const { speedx, speedy, speedz, rotation } = el.dataset;

        // Determine if the element is on the left side of the screen
        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;

        // Calculate the z-axis value based on the mouse x coordinate and element's left position
        let zValue = (e.clientX - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.06;

        // Apply the transform to the element
        el.style.transform = \`translateX(calc(-50% + \${-xValue * parseFloat(speedx)}px)) translateY(calc(-50% + \${yValue * parseFloat(speedy)}px))  translateZ(\${zValue * parseFloat(speedz)}px) rotateY(\${rotateDegree * parseFloat(rotation)}deg)\`;
    });
}`}
                        </SyntaxHighlighter>
                        <p className="mt-10">
                            Use a loadEvents function to attach the mousemove
                            event listener to the parallax layers upon component
                            mounting. This function checks whether the window
                            object is defined or not to avoid errors in React.
                        </p>
                        <div className="mt-10">
                            <SyntaxHighlighter
                                language="javascript"
                                style={docco}
                                customStyle={{ fontSize: '14px' }}
                            >
                                {`function loadEvents() {
    if (typeof window !== 'undefined') {
        window.addEventListener('mousemove', handleMousemove);
    }

    // Cleanup function to remove event listener when the component unmounts
    return () => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('mousemove', handleMousemove);
        }
    };
}

loadEvents();`}
                            </SyntaxHighlighter>
                        </div>
                        <p className="mt-10">
                            You should be all set now! Feel free to reach out
                            through my{' '}
                            <Link
                                href={'/contact'}
                                className="border-b-2 border-dark-blue border-opacity-30 hover:border-opacity-100 transition duration-300 ease-in-out text-dark-blue"
                            >
                                Contact
                            </Link>{' '}
                            form if you have any questions. You can find the
                            full repo for the project{' '}
                            <a
                                href="https://github.com/DWC97"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-b-2 border-dark-blue border-opacity-30 hover:border-opacity-100 transition duration-300 ease-in-out text-dark-blue"
                            >
                                here.
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
