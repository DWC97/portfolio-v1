

export default function Footer() {
    return (
        
        <div className="h-[10vh]  w-full flex justify-center items-start px-10 text-center">
         
            <span className="text-custom-gray font-medium ">
                © 2024 Douglas William Carton.&nbsp;
                <a 
                    className="text-gray-300 border-b-2 border-gray-300 border-opacity-30 hover:border-opacity-100 transition duration-300 ease-in-out"
                    href="https://github.com/DWC97" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Portfolio custom built in Next.js, Three.js and Framer Motion.
                </a>
            </span>
           
        </div>
    );
}
