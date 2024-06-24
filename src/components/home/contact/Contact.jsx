'use client';

import { FloatingLabel } from 'flowbite-react';
import { useState } from 'react';

export default function Contact() {
    const [email, setEmail] = useState('');

    function handleChange(e) {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div
            className="h-screen w-full flex justify-center items-center z-50"
            id="contact"
        >
            <div className="flex flex-col justify-center w-[530px] ">
                <h1 className="text-white text-[40px] font-semibold pb-10">
                    Drop me a line
                </h1>
                <div className="w-full relative">
                    <div className="polygon1 bg-dark-blue w-[112px] h-[12px] border-b border-b-dark-blue" />
                    <div className="absolute h-[2px] w-full bg-dark-blue bottom-0 left-0" />
                </div>
                <form
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
                            value={email}
                            onChange={handleChange}
                            autoComplete="off"
                            className={`bg-primary-dark w-full  text-gray-200 border-opacity-30 border-custom-gray focus:border-dark-blue ease-in-out duration-500 outline-none transition peer-focus:text-custom-gray `}
                        />
                    </div>
                    <div className="w-full relative">
                        <FloatingLabel
                            variant="filled"
                            label="Message"
                            type="text"
                            id="message"
                            name="message"
                            value={email}
                            onChange={handleChange}
                            autoComplete="off"
                            className={`bg-primary-dark w-full  text-gray-200 border-opacity-30 border-custom-gray focus:border-dark-blue ease-in-out duration-500 outline-none transition peer-focus:text-custom-gray `}
                        />
                    </div>

                    <button type="submit" className="cursor-pointer bg-dark-blue w-[200px] py-4 polygon2 hover:opacity-80 ease-in-out duration-300 mt-6">
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
            </div>
        </div>
    );
}
