"use client"

import { FloatingLabel } from 'flowbite-react';
import { useState } from 'react';

export default function Contact(){

    

    function handleSubmit(){
        console.log("submitted")
    }

    return (
        <div className="h-screen w-full flex justify-center items-center z-50" id="contact">
            <div className="flex flex-col justify-center w-[530px] border border-red-600">
                <h1 className="text-white text-[40px] font-semibold pb-10">Drop me a line</h1>
                <div className="w-full relative">
                    <div className="polygon1 bg-dark-blue w-[112px] h-[12px] border-b border-b-dark-blue" />
                    <div className="absolute h-[2px] w-full bg-dark-blue bottom-0 left-0" />
                </div>
                <form onSubmit={handleSubmit} className='pt-12'>
                    <div className='w-full'>
                    <FloatingLabel
                                variant="filled"
                                label="Email"
                                type="text"
                                id="email"
                                name="email"
                                // value={formData.email}
                                // onChange={handleChange}
                                autoComplete="off"
                                className={`bg-primary-dark border-b border-custom-gray w-full text-custom-gray`}
                            />
                    </div>
                    <button className='cursor-pointer' onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}