import Footer from '@/components/global/Footer';
import Banner from '@/components/project-page/Banner';
import Image from 'next/image';
import Link from 'next/link';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function JRGroupTours() {
    return (
        <div className="w-full flex flex-col items-center relative">
            <div className="max-w-[1160px] w-full px-10 sm:px-20 mb-10 sm:-mb-10">
                <Banner index={1} />
            </div>
            <div className="max-w-[1160px] w-full px-10 sm:px-20 pb-20  z-30">
                <p className="font-medium text-[20px] text-gray-200 leading-relaxed">
                    I built the entire app in{' '}
                    <span className="text-dark-blue">Next.js 14</span> with{' '}
                    <span className="text-dark-blue">TypeScript</span>. On the
                    back-end, a serverless architecture utilizes{' '}
                    <span className="text-dark-blue">Prisma</span> + Supabase (
                    <span className="text-dark-blue">Postgresql</span>) with
                    server actions. I leveraged{' '}
                    <span className="text-dark-blue">Stripe</span> to handle
                    payments.
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
                            UI/UX design
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
                            href="#bookings"
                            className="border-b-2 border-dark-blue border-opacity-30 hover:border-opacity-100 transition duration-300 ease-in-out "
                        >
                            Managing bookings + payment auth
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
                            Ecommerce store section
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
                        In early 2024, I was hired to create a booking website
                        for a group tour operator based in the UK. They wanted a
                        website that would not only showcase their business and
                        tour selection but also give them the capability to
                        manage the tours and bookings themselves. I decided the
                        best way to facilitate content management would be in a
                        private admin dashboard that would interact with the
                        back-end database using a more accessible UI.
                    </p>
                </div>
                <div id="ui" className="pt-10">
                    <h1 className="font-semibold text-white text-[40px] pb-4">
                        UI/UX design
                    </h1>
                    <p className="font-medium text-[20px] text-gray-200 leading-relaxed">
                        After discussions with the company rep, a vision for the
                        visuals came together. We decided to use black as the
                        primary color to align with their pirate theme. The idea
                        was to use as many images of the tour destinations and
                        activities as possible to add color and to give users an
                        idea of what the experience would be like. This is done
                        with image sliders, galleries and scenic backgrounds,
                        wherever possible. My favorite section is the hero
                        section which creates a 3-D parallax effect when the
                        mouse moves. I feel it gives the user a unique and
                        engaging experience! I broke down the code in an article{' '}
                        <Link
                            className="border-b-2 border-dark-blue border-opacity-30 hover:border-opacity-100 transition duration-300 ease-in-out text-dark-blue"
                            href={'/articles/3D-parallax-effect-in-react'}
                        >
                            here
                        </Link>
                        . I also used{' '}
                        <span className="text-dark-blue">Framer Motion</span> to
                        create a scroll effect where polaroid columns move at
                        different speeds to create the illusion they are moving
                        in opposite directions.
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
                <div id="bookings" className="pt-10">
                    <h1 className="font-semibold text-white text-[40px] pb-4">
                    Managing bookings + payment auth
                    </h1>
                    <p className="font-medium text-[20px] text-gray-200 leading-relaxed">
                    User bookings are handled with <span className="text-dark-blue">Stripe</span> and <span className="text-dark-blue">Prisma</span>. When the user enters booking page, the stripe API generates a payment intent and checkout form.
                    </p>
                    <div className="w-full relative mt-10 mb-8 md:px-20">
                        <Image
                            src={'/images/jr/booking.avif'}
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
                    When the user submits with their details, a server action is first called to check whether the booking (for that email + destination) exists already to avoid duplicates. The payment intent is then sent to Stripe and authenticated by them. Once authenticated, the stripe webhook creates a POST request to add the booking with the user/tour info to the database.
                    </p>
                    <div className="my-10">
                        <SyntaxHighlighter
                            language="javascript"
                            style={docco}
                            customStyle={{ fontSize: '14px' }}
                        >
                            {`// route.ts webhook
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: NextRequest) {
    const event = await stripe.webhooks.constructEvent(
        await req.text(),
        req.headers.get('stripe-signature') as string,
        process.env.STRIPE_WEBHOOK_SECRET as string
    );

    if (event.type === 'charge.succeeded') {
        const charge = event.data.object;
        const tourId = parseInt(charge.metadata.tourId);
        const email = charge.billing_details.email;
        const price = charge.amount;
        const id = charge.id;

        const tour = toursData.tours.find((tour) => {
            return tour.id === tourId;
        });
        if (tour == null || email == null) {
            return new NextResponse('Bad request', { status: 400 });
        }

        try {
            await prisma.booking.create({
                data: {
                    id,
                    tourId,
                    email,
                    destination: tour.region,
                    price,
                },
            });
        } catch (e) {
            console.error(e);
            throw new Error('Failed to add booking to database');
        }
    }

    return new NextResponse();
}`}
                        </SyntaxHighlighter>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
