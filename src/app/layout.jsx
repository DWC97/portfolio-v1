import { Chakra_Petch } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/global/Navbar';
import NextTopLoader from 'nextjs-toploader';

const chakraPetch = Chakra_Petch({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });


export const metadata = {
    title: 'D. W. Carton | Full-Stack Engineer',
    description: 'Web development portfolio for Douglas William Carton. Built with Next.js 14, Three.js and Framer Motion.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <style>{`
                    body {
                        background-color: #0C1523;
                        margin: 0;
                        padding: 0;
                        font-family: ${chakraPetch.className};
                    }
                `}</style>
                <link rel="icon" href="/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            
            <body className={chakraPetch.className}>
  
              <header>
                <Navbar />
              </header>
              <main className=''>
              <NextTopLoader 
              color="#4BD2D5"
              speed={200}
              showSpinner={false}
              />
                {children}
              </main>
          
            </body>
            
        </html>
    );
}
