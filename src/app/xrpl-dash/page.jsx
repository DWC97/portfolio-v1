import Footer from '@/components/global/Footer';
import Banner from '@/components/project-page/Banner';
import Image from 'next/image';
import Link from 'next/link';

export default function XRPLDash() {
    return (
        <div className="w-full flex flex-col items-center relative">
            <div className="max-w-[1160px] w-full px-10 sm:px-20 mb-10 sm:-mb-10">
                <Banner index={0} />
            </div>
            <div className="max-w-[1160px] w-full px-10 sm:px-20 pb-20  z-30">
                <p className="font-medium text-[20px] text-gray-200 leading-relaxed">
                    The platform is built with a{' '}
                    <span className="text-dark-blue">Next.js</span> +{' '}
                    <span className="text-dark-blue">Tailwind</span> +{' '}
                    <span className="text-dark-blue">Redux</span> on the
                    front-end, and{' '}
                    <span className="text-dark-blue">Express</span> +{' '}
                    <span className="text-dark-blue">Supabase</span> on the
                    back-end. Currently no live repo or demo is available as the
                    back-end is still being polished but you can see code + live
                    builds for Projects{' '}
                    <Link
                        className="border-b-2 border-dark-blue border-opacity-30 hover:border-opacity-100 transition duration-300 ease-in-out text-dark-blue"
                        href={'/jr-group-tours'}
                    >
                        2
                    </Link>{' '}
                    and{' '}
                    <Link
                        className="border-b-2 border-dark-blue border-opacity-30 hover:border-opacity-100 transition duration-300 ease-in-out text-dark-blue"
                        href={'/fc-24-db'}
                    >
                        3
                    </Link>
                    .
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
                            href="#problem"
                            className="border-b-2 border-dark-blue border-opacity-30 hover:border-opacity-100 transition duration-300 ease-in-out "
                        >
                            The problem
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
                            UI modules
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
                            Managing on-chain data
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
                        The XRP Ledger (
                        <span className="text-dark-blue">XRPL</span>) is a
                        blockchain built and managed by Ripple. In an effort to
                        grow the ecosystem, they released their XRPL Grants
                        program a few years ago. The XRPL Dash is an idea that
                        myself and four other developers put forward to Ripple,
                        with the aim of improving user experience on the XRPL.
                        Being an inexperienced developer, who'd only ever worked
                        on personal projects, I wanted the opportunity to work
                        on a commercial project, where I could learn best
                        practices from more senior mentors. After a rigorous
                        application process, we received funding in 2023 and
                        began development.
                    </p>
                </div>
                <div id="problem" className="pt-10">
                    <h1 className="font-semibold text-white text-[40px] pb-4">
                        The problem
                    </h1>
                    <p className="font-medium text-[20px] text-gray-200 leading-relaxed">
                        The XRPL is a platform with huge potential, mostly for
                        financial institutions, but also for retail users too.
                        While resources for retail users are limited compared to
                        other chains like Ethereum or Solana, there are still a
                        number of tools available. The issue our team found when
                        using the XRPL was the{' '}
                        <span className="text-dark-blue">
                            lack of integration
                        </span>{' '}
                        between these tools. You would have to go to one website
                        to trade an asset, another to analyse the asset's
                        charts, another to get updates from the team behind the
                        project etc. We thought having everything in one place
                        would{' '}
                        <span className="text-dark-blue">take friction</span>{' '}
                        out of the user experience. That's where the idea for
                        the XRPL Dash came from. A one-stop shop for anyone
                        interested in the XRPL.
                    </p>
                </div>
                <div id="ui" className="pt-10">
                    <h1 className="font-semibold text-white text-[40px] pb-4">
                        UI modules
                    </h1>
                    <p className="font-medium text-[20px] text-gray-200 leading-relaxed">
                        It's all well and good having a tonne of features for
                        the user but how can you realistically fit them into a
                        UI without it getting cluttered? The solution we came up
                        with was to make our platform a dashboard with a{' '}
                        <span className="text-dark-blue">modular layout</span>.
                        This way, the user can pick and choose what tools and
                        assets are useful for them to create a custom interface.
                        For the MVP, we wanted to offer the user the most
                        important trading/tracking modules:
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
                                    fill="#eeeeee"
                                    d="M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0a30.59 30.59 0 0 1 0-42.752L764.736 512L452.864 192a30.59 30.59 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0a30.59 30.59 0 0 1 0-42.752L508.736 512L196.864 192a30.59 30.59 0 0 1 0-42.688"
                                ></path>
                            </svg>
                            <span className="font-medium text-[20px] text-gray-200 leading-relaxed">
                                Charts for price, volume, new holders (daily,
                                weekly, monthly timeframes) for each XRPL asset
                            </span>
                        </li>
                        <li className="flex flex-row gap-4 items-center pb-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 1024 1024"
                            >
                                <path
                                    fill="#eeeeee"
                                    d="M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0a30.59 30.59 0 0 1 0-42.752L764.736 512L452.864 192a30.59 30.59 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0a30.59 30.59 0 0 1 0-42.752L508.736 512L196.864 192a30.59 30.59 0 0 1 0-42.688"
                                ></path>
                            </svg>
                            <span className="font-medium text-[20px] text-gray-200 leading-relaxed">
                                Trading via XRPL's DEX
                            </span>
                        </li>
                        <li className="flex flex-row gap-4 items-center pb-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 1024 1024"
                            >
                                <path
                                    fill="#eeeeee"
                                    d="M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0a30.59 30.59 0 0 1 0-42.752L764.736 512L452.864 192a30.59 30.59 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0a30.59 30.59 0 0 1 0-42.752L508.736 512L196.864 192a30.59 30.59 0 0 1 0-42.688"
                                ></path>
                            </svg>
                            <span className="font-medium text-[20px] text-gray-200 leading-relaxed">
                                Profit and Loss charts for entire wallet or
                                individual tokens
                            </span>
                        </li>
                        <li className="flex flex-row gap-4 items-center pb-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 1024 1024"
                            >
                                <path
                                    fill="#eeeeee"
                                    d="M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0a30.59 30.59 0 0 1 0-42.752L764.736 512L452.864 192a30.59 30.59 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0a30.59 30.59 0 0 1 0-42.752L508.736 512L196.864 192a30.59 30.59 0 0 1 0-42.688"
                                ></path>
                            </svg>
                            <span className="font-medium text-[20px] text-gray-200 leading-relaxed">
                                Token richlists
                            </span>
                        </li>
                        <li className="flex flex-row gap-4 items-center pb-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 1024 1024"
                            >
                                <path
                                    fill="#eeeeee"
                                    d="M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0a30.59 30.59 0 0 1 0-42.752L764.736 512L452.864 192a30.59 30.59 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0a30.59 30.59 0 0 1 0-42.752L508.736 512L196.864 192a30.59 30.59 0 0 1 0-42.688"
                                ></path>
                            </svg>
                            <span className="font-medium text-[20px] text-gray-200 leading-relaxed">
                                Fear/greed index
                            </span>
                        </li>
                        <li className="flex flex-row gap-4 items-center pb-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 1024 1024"
                            >
                                <path
                                    fill="#eeeeee"
                                    d="M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0a30.59 30.59 0 0 1 0-42.752L764.736 512L452.864 192a30.59 30.59 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0a30.59 30.59 0 0 1 0-42.752L508.736 512L196.864 192a30.59 30.59 0 0 1 0-42.688"
                                ></path>
                            </svg>
                            <span className="font-medium text-[20px] text-gray-200 leading-relaxed">
                                Top climbers on the ledger
                            </span>
                        </li>
                    </ul>
                    <div className="w-full relative mt-10 mb-8 md:px-20">
                        <Image
                            src={'/images/jr/about.avif'}
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
                    <p className="font-medium text-[20px] text-gray-200 leading-relaxed">
                        <span className="text-dark-blue">Material UI</span> is
                        used for charting and the module cards UI. This pairs
                        well with{' '}
                        <span className="text-dark-blue">
                            React-Grid-Layout
                        </span>{' '}
                        which enables drag and drop functionality for each
                        module. We built a custom React hook for resizing the
                        modules too.{' '}
                        <span className="text-dark-blue">Framer Motion</span> is
                        used to ensure clean transitions between states.
                    </p>
                    <div className="w-full relative mt-10 mb-8 md:px-20">
                        <Image
                            src={'/images/jr/about.avif'}
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
                        Managing on-chain data
                    </h1>
                    <p className="font-medium text-[20px] text-gray-200 leading-relaxed">
                        The biggest challenge for the project has been managing
                        and delivering quality data to the dashboard front-end.
                        Our main data source is our node on the XRPL network. We
                        utilize{' '}
                        <span className="text-dark-blue">
                            Next.js server actions
                        </span>{' '}
                        alongside an{' '}
                        <span className="text-dark-blue">Express</span> server
                        which does the heavy lifitng. Certain methods are
                        performed by serverless API routes (login, trading)
                        whilst the main Express server is used for fetching
                        large amounts of data from the node (on-chain data) and
                        database (user data) quickly.{' '}
                        <span className="text-dark-blue">Redux</span> is used
                        for state management to better organize state so some of
                        it can be cached in local storage while more important
                        data goes to the Supabase (
                        <span className="text-dark-blue">Postgresql</span>)
                        database.
                    </p>
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
                                    Trading via the DEX
                                </span>
                            </div>
                            <p className="font-medium text-[20px] text-gray-200 leading-relaxed pl-10">
                                There are a number of options for trading
                                including quick trade (market buy/sell) or limit
                                orders. The dash facilitates trading between any
                                two assets running on the XRPL using{' '}
                                <span className="text-dark-blue">
                                    serverless API route handlers
                                </span>{' '}
                                and the Xaman API. XRP, the native currency of
                                the ledger is used as an intermediary bridge
                                asset with pathfinding.
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
                                    Security and auth
                                </span>
                            </div>
                            <div className="font-medium text-[20px] text-gray-200 leading-relaxed pl-10">
                                <p>
                                    Most of our features are custom to the user
                                    so we require the user to login with their
                                    Xaman wallet to access the dash. Xaman is a
                                    non-custodial wallet service for users to
                                    store their XRPL assets. Our dashboard
                                    interacts with the Xaman API to authenticate
                                    the user's signature and then return to us
                                    their XRPL address.{' '}
                                    <span className="text-dark-blue">
                                        NextAuth.js
                                    </span>{' '}
                                    is used with{' '}
                                    <span className="text-dark-blue">
                                        React-Cookies
                                    </span>{' '}
                                    for session management and route protection.
                                </p>
                                <div className="w-full relative mt-10 mb-8 md:px-20">
                                    <Image
                                        src={'/images/jr/contact.avif'}
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
                                    User personalization
                                </span>
                            </div>
                            <div className="font-medium text-[20px] text-gray-200 leading-relaxed pl-10">
                                <p>
                                    Once logged in to the dash, the user can
                                    customize their dashboard module layout and
                                    save it. They also have the option of
                                    choosing a profile picture + banner from
                                    their NFT collection and writing a personal
                                    bio. This gives their wallet an identity.
                                    They can also search for other users based
                                    on their wallet address and view their
                                    profile.
                                </p>
                                <div className="w-full relative mt-10 mb-8 md:px-20">
                                    <Image
                                        src={'/images/jr/contact.avif'}
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
                                Messaging system
                                </span>
                            </div>
                            <div className="font-medium text-[20px] text-gray-200 leading-relaxed pl-10">
                                <p>
                                The messaging system utilizes <span className="text-dark-blue">web sockets</span> for real-time communication between users. Users can send/receive messages, see previous conversations and search through old chats. They have the option of sending the message as an XRPL transaction with or without payment for a minimal fee. This provides a way of sending money/messages on a blockchain with transparency and immutability.
                                </p>
                                <div className="w-full relative mt-10 mb-8 md:px-20">
                                    <Image
                                        src={'/images/jr/contact.avif'}
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
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}
