import Footer from '@/components/global/Footer';
import Banner from '@/components/project-page/Banner';
import Image from 'next/image';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function FC24DB() {
    return (
        <div className="w-full flex flex-col items-center relative">
            <div className="max-w-[1160px] w-full px-10 sm:px-20 mb-10 sm:-mb-10">
                <Banner index={2} />
            </div>

            <div className="max-w-[1160px] w-full px-10 sm:px-20 pb-20  z-30">
                <p className="font-medium text-[20px] text-gray-200 leading-relaxed">
                    I built the front-end in <span className="text-dark-blue">React.js</span> with <span className="text-dark-blue">Tailwind</span> for styling.
                    The minor back-end component is an <span className="text-dark-blue">Express</span> server used to
                    scrape player images from an existing database.
                </p>
                <ul className="pl-4 pt-6 text-dark-blue text-[20px]">
                    <li className="flex flex-row gap-4 items-center pb-2">
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
                        <a
                            href="#introduction"
                            className="border-b-2 border-dark-blue border-opacity-30 hover:border-opacity-100 transition duration-300 ease-in-out "
                        >
                            Introduction
                        </a>
                    </li>
                    <li className="flex flex-row gap-4 items-center pb-2">
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
                        <a
                            href="#ui"
                            className="border-b-2 border-dark-blue border-opacity-30 hover:border-opacity-100 transition duration-300 ease-in-out "
                        >
                            UI/UX inspiration
                        </a>
                    </li>
                    <li className="flex flex-row gap-4 items-center pb-2">
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
                        <a
                            href="#data"
                            className="border-b-2 border-dark-blue border-opacity-30 hover:border-opacity-100 transition duration-300 ease-in-out "
                        >
                            Managing large datasets
                        </a>
                    </li>
                    <li className="flex flex-row gap-4 items-center pb-2">
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
                        <a
                            href="#routing"
                            className="border-b-2 border-dark-blue border-opacity-30 hover:border-opacity-100 transition duration-300 ease-in-out "
                        >
                            Routing
                        </a>
                    </li>
                    <li className="flex flex-row gap-4 items-center">
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
                        <a
                            href="#features"
                            className="border-b-2 border-dark-blue border-opacity-30 hover:border-opacity-100 transition duration-300 ease-in-out "
                        >
                            Other features
                        </a>
                    </li>
                </ul>
                <div id="introduction" className="pt-10">
                    <h1 className="font-semibold text-white text-[40px] pb-4">
                        Introduction
                    </h1>
                    <p className="font-medium text-[20px] text-gray-200 leading-relaxed">
                        Outside of web development and building things, football
                        is my passion in life. Like pretty much every industry
                        these days, football is incredibly data-driven. Being
                        someone with an analytical mind, I constantly find
                        myself googling players in the middle of a game to find
                        out more about them. Getting the important info on a
                        player is not as easy as you might think, though. There
                        are plenty of websites that offer profiling on football
                        players but they seem to suffer from performance issues
                        or the data is poorly laid out. I wanted a quick and
                        easy solution, so I decided to build this.
                    </p>
                </div>
                <div id="ui" className="pt-10">
                    <h1 className="font-semibold text-white text-[40px] pb-4">
                        UI/UX inspiration
                    </h1>
                    <p className="font-medium text-[20px] text-gray-200 leading-relaxed">
                        Back in the early 2010s, I played Fifa religiously. My
                        go-to tool to track the game assets was a web
                        application called Futhead (now defunct). I decided to
                        pay homage to it by using a similar color palette and
                        website structure. The aim was to give the website a
                        slightly retro, minimalist feel with modern performance
                        in <span className="text-dark-blue">React.js</span>. The
                        actual logos used are from FC 24.
                    </p>
                    <div className="w-full relative mt-10 mb-8 md:px-20">
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
                <div id="data" className="pt-10">
                    <h1 className="font-semibold text-white text-[40px] pb-4">
                        Managing large datasets
                    </h1>
                    <p className="font-medium text-[20px] text-gray-200 leading-relaxed">
                        The main{' '}
                        <a
                            href="https://www.kaggle.com/datasets/stefanoleone992/ea-sports-fc-24-complete-player-dataset"
                            className="border-b-2 border-dark-blue border-opacity-30 hover:border-opacity-100 transition duration-300 ease-in-out text-dark-blue"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            dataset
                        </a>{' '}
                        for player profiles is from FC 24. Using{' '}
                        <span className="text-dark-blue">Excel</span>, I
                        filtered the dataset to only include players from
                        Europe&apos;s top five leagues and converted it to json
                        format. This was mainly to reduce the amount of
                        different clubs because finding high quality logos for
                        them wasn&apos;t easy and I had to compile that dataset
                        myself. I was able a utilize an existing dataset + API
                        to fetch nation flags (thankfully). The most difficult
                        aspect was fetching player images because they were not
                        included in the players dataset. I was able to scrape
                        the images from an online database (sofifa.com) by
                        virtue of a proxy{' '}
                        <span className="text-dark-blue">Express</span> server.
                        The proxy was necessary to avoid CORS blocking and
                        implement robust error handling.
                    </p>
                    <div className="w-full relative mt-10 mb-10 md:px-20">
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
                <div id="routing" className="pt-10">
                    <h1 className="font-semibold text-white text-[40px] pb-4">
                        Routing
                    </h1>
                    <p className="font-medium text-[20px] text-gray-200 leading-relaxed">
                        The app utilizes{' '}
                        <span className="text-dark-blue">React Router</span>{' '}
                        with a nested layout to manage routing. The entire app
                        is wrapped in a context with the players dataset passed
                        down as a value. The data is imported on each route via
                        a custom hook. A page is generated dynamically for each
                        player, league, club and nation based on a search param.
                        The search param id is used to find the corresponding
                        match in the associated dataset.
                    </p>
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
                    <p className="font-medium text-[20px] text-gray-200 leading-relaxed">
                        Once the player is found in the dataset, his properties
                        are used to fill out a reusable component including
                        charting and navlinks to the pages for his club and
                        nation.
                    </p>
                    <div className="w-full relative mt-10 mb-8 md:px-20">
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
                <div id="features" className="pt-10">
                    <h1 className="font-semibold text-white text-[40px] pb-4">
                        Other features
                    </h1>
                    <ul className="pl-4 ">
                        <li className="pb-2">
                            <div className="flex flex-row gap-4 items-center pb-2">
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
                                <span className="text-dark-blue font-medium text-[20px]">
                                    Search functionality
                                </span>
                            </div>
                            <p className="font-medium text-[20px] text-gray-200 leading-relaxed pl-10">
                                The search tool filters through the data using
                                the user&apos;s input as state. The actual data
                                is not stored in state.
                            </p>
                        </li>
                        <li className="pb-2 pt-2">
                            <div className="flex flex-row gap-4 items-center pb-2">
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
                                <span className="text-dark-blue font-medium text-[20px]">
                                    Sorting data
                                </span>
                            </div>
                            <div className="font-medium text-[20px] text-gray-200 leading-relaxed pl-10">
                                <p>
                                    The filtering and sorting works in a similar
                                    fashion with filters / sorting methods
                                    stored in state and applied to the rendered
                                    list. The filters + sorting states are also
                                    stored in the url so that if the user clicks
                                    onto a player page but then routes backward
                                    using their browser, the rendered list of
                                    players will be exactly how they left it.
                                    Ie. if the user had a filter to only include
                                    CBs in the list and they were on the fourth
                                    page of results, when they returned back,
                                    the list would include the same players and
                                    their scroll position on the page would also
                                    be the same.
                                </p>
                                <div className="my-10">
                                    <SyntaxHighlighter
                                        language="javascript"
                                        style={docco}
                                        customStyle={{ fontSize: '14px' }}
                                    >
                                        {`// player list with filters and sorting applied
    const sortedPlayers = players
        .filter(player => !positionFilter || positionFilter === 'ALL' || player.player_positions.includes(positionFilter))
        .sort((a, b) => {
            const orderFactor = sortOrder === 'asc' ? 1 : -1
            return (a[sortedBy] - b[sortedBy]) * orderFactor
        })
        .slice(0, renderQuantity * currentPage)`}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                        </li>
                        <li className="pb-2 pt-2">
                            <div className="flex flex-row gap-4 items-center pb-2">
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
                                <span className="text-dark-blue font-medium text-[20px]">
                                    Infinite scroll
                                </span>
                            </div>
                            <div className="font-medium text-[20px] text-gray-200 leading-relaxed pl-10">
                                <p>
                                    Only a small portion of the data is rendered
                                    to the DOM initially. This is to decrease
                                    processing time and improve performance. As
                                    the user scrolls down the list of rendered
                                    players, an intersection observer ref at the
                                    bottom of the list becomes visible and
                                    activates a function that increases the
                                    number of players in the rendered list. This
                                    way, the user never runs out of players to
                                    look at.
                                </p>
                                <div className="my-10">
                                    <SyntaxHighlighter
                                        language="javascript"
                                        style={docco}
                                        customStyle={{ fontSize: '14px' }}
                                    >
                                        {`// reference for scroll position in relation to last player in rendered list
    const observer = useRef()
    const lastPlayerElementRef = useCallback(node => {

        // disconnect observer from previous element
        if (observer.current) observer.current.disconnect()
        // set new observer = intersection function
        observer.current = new IntersectionObserver(entries => {
            // if observer intersects with last rendered player, increase the current page number
            if (entries[0].isIntersecting) {
                setCurrentPage(prevNumber => prevNumber + 1)
            }
        })

        // observer the last element
        if (node) observer.current.observe(node)
    }, [])`}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <p className="font-medium text-[20px] text-gray-200 leading-relaxed pt-4">
                    Here&apos;s the{' '}
                    <a
                        href="https://github.com/DWC97/fc-24-db"
                        className="border-b-2 border-dark-blue border-opacity-30 hover:border-opacity-100 transition duration-300 ease-in-out text-dark-blue"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        source code
                    </a>{' '}
                    for the project.
                </p>
            </div>
            <Footer />
        </div>
    );
}
