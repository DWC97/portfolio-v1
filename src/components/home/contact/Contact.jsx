'use client';

import { FloatingLabel } from 'flowbite-react';
import { useCallback, useState } from 'react';
import debounce from 'lodash/debounce';

export default function Contact() {
    const initFormData = {
        email: '',
        message: '',
    };
    const [formData, setFormData] = useState(initFormData);
    const [formErrors, setFormErrors] = useState({ email: '', message: "" });

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

    const debouncedValidate = useCallback(
        debounce((name, value) => {
            let error = '';
            if (name === 'email') {
                error = validateEmail(value);
            } else if (name === 'message') {
                error = validateMessage(value);
            }
            setFormErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
        }, 1000),
        []
    );

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        debouncedValidate(name, value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
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
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete="off"
                            className={`bg-primary-dark w-full  text-gray-200 ${formErrors.email ? "border-custom-red focus:border-custom-red" : "border-opacity-30 border-custom-gray focus:border-dark-blue"}   ease-in-out duration-500 outline-none transition peer-focus:text-custom-gray `}
                        />
                        {formErrors.email && <div className="flex flex-row gap-2 items-center">
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
                        </div>}
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
                        {formErrors.message && <div className="flex flex-row gap-2 items-center">
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
                        </div>}
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
            </div>
        </div>
    );
}
