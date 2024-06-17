export default function Navbar(){
    return (
        <div className="absolute h-screen top-0 left-0 p-[60px] 2xl:p-[80px] border border-red-600 flex flex-col">
            <span className="text-white cyberpunk-heading text-4xl 2xl:text-5xl pb-6">DWC</span>
            <div className="flex flex-col justify-between h-full">
                <div className="text-white text-3xl ">
                    <ul>
                        <li>Projects</li>
                        <li>Contact</li>
                        <li>Articles</li>
                    </ul>
                </div>
                <div className="text-white">
                    test2
                </div>
            </div>
        </div>
    )
}