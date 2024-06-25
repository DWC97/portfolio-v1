'use client';

import { FloatingLabel } from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';
import DecodeAnimation from 'react-decode-animation';
import { useInView, motion } from 'framer-motion';
import { Reveal } from '@/animations/Reveal';
import Footer from '@/components/global/Footer';
import emailjs from '@emailjs/browser';

export default function Contact() {

    const titleRef = useRef(null)
    const contactRef = useRef(null)
    const formRef = useRef(null);
    const isInView = useInView(contactRef, { once: true });
    const [playing, setPlaying] = useState(false);
    const [playing2, setPlaying2] = useState(false)
    const initFormData = {
        email: '',
        message: '',
    };
    const [formData, setFormData] = useState(initFormData);
    const [formErrors, setFormErrors] = useState({ email: '', message: "" });

    useEffect(() => {
        if (isInView) {
            setTimeout(() => {
            setPlaying(true);
            if (titleRef.current) {
                titleRef.current.play();
                setPlaying2(true)
            }
        }, 1000);
        }
    }, [isInView]);

    const validateEmail = (email) => {
        if (email.trim() === '') {
            return 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return 'Please enter a valid email address';
        }
        return '';
    };

    const validateMessage = (message) => {
        if (message.trim() === '') {
            return 'Message is required';
        }
        return '';
    };

    function handleChange(e) {
        const { name, value } = e.target;

        // Validate inputs
        let error = '';
        if (name === 'email') {
            error = validateEmail(value);
        } else if (name === 'message') {
            error = validateMessage(value);
        }

        setFormErrors((prevErrors) => ({ ...prevErrors, [name]: error }));

        setFormData((preState) => ({
            ...preState,
            [name]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        const emailError = validateEmail(formData.email);
    const messageError = validateMessage(formData.message);

    if (emailError || messageError) {
        setFormErrors({
            email: emailError,
            message: messageError,
        });
        return;
    }

        emailjs
      .sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }


    return (
        <>
        <div
            ref={contactRef}
            className="min-h-[90vh] w-full flex justify-center items-center z-50"
            id="contact"
        >
            <div className="flex flex-col justify-center w-[530px] ">
                <h1 className={`${playing ? "text-white" : "text-transparent"} text-[36px] font-semibold pb-10`}>
                <DecodeAnimation
                                ref={titleRef}
                                text={'Drop me a line'}
                                customCharacters="アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨーラリルレロワヰヱヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ"
                                playing={playing}
                            />
                </h1>
                <div className={`w-full relative ${playing2 ? "opacity-100" : "opacity-0"} ease-in-out duration-500`}>
                    <div className="polygon1 bg-dark-blue w-[112px] h-[12px] border-b border-b-dark-blue" />
                    <motion.div
                        className="absolute h-[2px] w-full bg-dark-blue bottom-0 left-0"
                        initial={{ width: '0%' }}
                        animate={{ width: playing2 ? '100%' : '0%' }}
                        transition={{ duration: 2.5, ease: [0.4, 0, 0.1, 1] }}
                    />
                </div>
                <Reveal isPlaying={playing2}>
                <form
                ref={formRef}
                    onSubmit={handleSubmit}
                    className="pt-8 flex flex-col gap-6"
                >
                    <div className="w-full relative">
                        <FloatingLabel
                            variant="filled"
                            label="Your email"
                            type="text"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete="off"
                            className={`bg-primary-dark w-full  text-gray-200 ${formErrors.email ? "border-custom-red focus:border-custom-red" : "border-opacity-30 border-custom-gray focus:border-dark-blue"}   ease-in-out duration-500 outline-none transition peer-focus:text-custom-gray `}
                        />
                        <motion.div
                            className="flex flex-row gap-2 items-center"
                            initial={{ maxHeight: 0, opacity: 0 }}
                            animate={{ maxHeight: formErrors.email ? 40 : 0, opacity: formErrors.email ? 1 : 0 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="#FF2463"
                                    d="M1 21L12 2l11 19zm3.45-2h15.1L12 6zM12 18q.425 0 .713-.288T13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18m-1-3h2v-5h-2zm1-2.5"
                                ></path>
                            </svg>
                            <span className="text-custom-red">
                                {formErrors.email}
                            </span>
                        </motion.div>
                    
                    </div>

                    <div className="w-full relative">
                        <FloatingLabel
                            variant="filled"
                            label="Message"
                            type="text"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            autoComplete="off"
                            className={`bg-primary-dark w-full  text-gray-200 ${formErrors.message ? "border-custom-red focus:border-custom-red" : "border-opacity-30 border-custom-gray focus:border-dark-blue"} ease-in-out duration-500 outline-none transition peer-focus:text-custom-gray `}
                        />
                        <motion.div
                            className="flex flex-row gap-2 items-center"
                            initial={{ maxHeight: 0, opacity: 0 }}
                            animate={{ maxHeight: formErrors.message ? 40 : 0, opacity: formErrors.message ? 1 : 0 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="#FF2463"
                                    d="M1 21L12 2l11 19zm3.45-2h15.1L12 6zM12 18q.425 0 .713-.288T13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18m-1-3h2v-5h-2zm1-2.5"
                                ></path>
                            </svg>
                            <span className="text-custom-red">
                                {formErrors.message}
                            </span>
                        </motion.div>
                    </div>

                    <button
                        type="submit"
                        className="cursor-pointer bg-dark-blue w-[200px] py-4 polygon2 hover:opacity-80 ease-in-out duration-300 mt-6"
                    >
                        <div className="flex flex-row justify-center items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={28}
                                height={28}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="#0C1523"
                                    d="M4 18.5v-5.154L9.846 12L4 10.654V5.5L19.423 12z"
                                ></path>
                            </svg>
                            <span className="text-primary-dark font-semibold ">
                                Send message
                            </span>
                        </div>
                    </button>
                </form>
                </Reveal>           
            </div>
        </div>
        <Footer />
        </>
    );
}
