export default function ProjectSection() {
    return (
        <div className="w-full min-h-screen flex flex-row justify-center items-center gap-20">
            <div className="w-[400px] flex flex-col border border-orange-600">
                <div className="flex flex-row w-full items-center">
                    <span className="text-[48px] text-dark-blue cyberpunk-heading pr-6">
                        01
                    </span>
                    <div className="w-full h-[5px] bg-custom-gray bg-opacity-30" />
                </div>
                <h1 className="mt-2 text-white font-semibold text-[40px]">
                    XRPL Dash
                </h1>
                <p className="font-semibold text-custom-gray mt-3">
                    Trading & analytics dashboard for the XRPL blockchain.
                    Development Funded by Ripple as part of their XRPL Grants
                    program.
                </p>
                <div className="flex flex-row gap-2 items-center mt-3">
                    <span className="text-light-blue ">See more</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="none"
                            stroke="#BDE6EC"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m7 10l5 5m0 0l5-5"
                        ></path>
                    </svg>
                </div>
                <div className="flex flex-row items-center justify-center gap-2 bg-dark-blue polygon2 mt-6 w-[180px]  h-[48px]">
                    <span className="text-primary-dark font-semibold">View demo</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill="#0C1523"
                            fillRule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}
