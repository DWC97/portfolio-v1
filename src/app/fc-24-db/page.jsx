import Banner from '@/components/project-page/Banner';
import Image from 'next/image';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function FC24DB() {
    return (
        <div className="w-full flex flex-col items-center relative">
            <div className="max-w-[1160px] w-full px-10 sm:px-20 mb-10 sm:-mb-10">
                <Banner />
            </div>

            <div className="max-w-[1160px] w-full px-10 sm:px-20   z-30">
                <p className="font-medium text-[20px] text-gray-200 leading-relaxed">
                    I built the front-end in React.js with Tailwind for styling.
                    The minor back-end component is an Express server used to
                    scrape player images from an existing database.
                </p>
                <ul className='pl-4 pt-6 text-dark-blue text-[20px]'>
                    <li className='flex flex-row gap-4 items-center pb-2'>
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
                        <a href='#introduction' className='border-b-2 border-dark-blue border-opacity-30 hover:border-opacity-100 transition duration-300 ease-in-out '>Introduction</a>
                    </li>
                    <li className='flex flex-row gap-4 items-center pb-2'>
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
                        <span className='border-b-2 border-dark-blue border-opacity-30 hover:border-opacity-100 transition duration-300 ease-in-out '>UI/UX inspiration</span>
                    </li>
                    <li className='flex flex-row gap-4 items-center pb-2'>
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
                        <span className='border-b-2 border-dark-blue border-opacity-30 hover:border-opacity-100 transition duration-300 ease-in-out '>Managing large datasets</span>
                    </li>
                    <li className='flex flex-row gap-4 items-center pb-2'>
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
                        <span className='border-b-2 border-dark-blue border-opacity-30 hover:border-opacity-100 transition duration-300 ease-in-out '>Routing</span>
                    </li>
                    <li className='flex flex-row gap-4 items-center'>
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
                        <span className='border-b-2 border-dark-blue border-opacity-30 hover:border-opacity-100 transition duration-300 ease-in-out '>Other features</span>
                    </li>
                </ul>
                <div id='introduction' className='pt-10'>
                    <h1 className='font-semibold text-white text-[40px] pb-4'>Introduction</h1>
                    <p className='font-medium text-[20px] text-gray-200 leading-relaxed'>Outside of web development and building things, football is my passion in life. Like pretty much every industry these days, football is incredibly data-driven. Being someone with an analytical mind, I constantly find myself googling players in the middle of a game to find out more about them. Getting the important info on a player is not as easy as you might think, though. There are plenty of websites that offer profiling on football players but they seem to suffer from performance issues or the data is poorly laid out. I wanted a quick and easy solution, so I decided to build this.</p>
                </div>
                <div id='ui' className='pt-10'>
                    <h1 className='font-semibold text-white text-[40px] pb-4'>UI/UX inspiration</h1>
                    <p className='font-medium text-[20px] text-gray-200 leading-relaxed'>Back in the early 2010s, I played Fifa religiously. My go-to tool to track the game assets was a web application called Futhead (now defunct). I decided to pay homage to it by using a similar color palette and website structure. The aim was to give the website a slightly retro, minimalist feel with modern performance in React.js. The actual logos used are from FC 24.</p>
                    <div className="w-full relative mt-10 mb-8 px-20">
                        <Image
                            src={'/images/fc-24-player-database/home.avif'}
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
                </div>
                <div id='data' className='pt-10'>
                    <h1 className='font-semibold text-white text-[40px] pb-4'>Managing large datasets</h1>
                    <p className='font-medium text-[20px] text-gray-200 leading-relaxed'>The main dataset [link to dataset] for player profiles is from FC 24. Using Excel, I filtered the dataset to only include players from Europe's top five leagues and converted it to json format. This was mainly to reduce the amount of different clubs because finding high quality logos for them wasn't easy and I had to compile that dataset myself. I was able a utilize an existing dataset + API to fetch nation flags (thankfully). The most difficult aspect was fetching player images because they were not included in the players dataset. I was able to scrape the images from an online database (sofifa.com) by virtue of a proxy Express server. The proxy was necessary to avoid CORS blocking and implement robust error handling.</p>
                    <div className="w-full relative mt-10 mb-10 px-20">
                        <Image
                            src={'/images/fc-24-player-database/players.avif'}
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
                </div>
                <div id='routing' className='pt-10'>
                    <h1 className='font-semibold text-white text-[40px] pb-4'>Routing</h1>
                    <p className='font-medium text-[20px] text-gray-200 leading-relaxed'>The app utilizes React Router with a nested layout to manage routing. The entire app is wrapped in a context with the players dataset passed down as a value. The data is imported on each route via a custom hook. A page is generated dynamically for each player, league, club and nation based on a search param. The search param id is used to find the corresponding match in the associated dataset.</p>
                    <div className="my-10">
                        <SyntaxHighlighter
                            language="javascript"
                            style={docco}
                            customStyle={{ fontSize: '14px' }}
                        >
                            {`const players = usePlayers() // import player list
    const { id } = useParams() // access search param (eg. Martin Ødegaard)
    // find the player in players data based off search param
    const player = players.find(item => {
        return item.long_name === id
    })`}
                        </SyntaxHighlighter>
                    </div>
                    <p className='font-medium text-[20px] text-gray-200 leading-relaxed'>Once the player is found in the dataset, his properties are used to fill out a reusable component including charting and navlinks to the pages for his club and nation.</p>
                    <div className="w-full relative mt-10 mb-8 px-20">
                        <Image
                            src={'/images/fc-24-player-database/saka.avif'}
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
                </div>
            </div>
        </div>
    );
}
