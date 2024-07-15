import Banner from '@/components/project-page/Banner';

export default function FC24DB() {
    return (
        <div className="w-full h-[200vh] flex flex-col items-center relative">
        
            <div className="max-w-[1160px] w-full px-10 sm:px-20 mb-10 sm:-mb-10">
                <Banner />
            </div>
      
            <div className='max-w-[1160px] w-full px-10 sm:px-20   z-30'>

            
            <p className='font-medium text-[20px] text-gray-200'>I built the front-end in React.js with Tailwind for styling. The minor back-end component is an Express server used to scrape player images from an existing database. </p>
            </div>
        </div>
    );
}
