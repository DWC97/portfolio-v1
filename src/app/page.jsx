import Footer from '@/components/global/Footer';
import Hero from '@/components/home/hero/Hero';
import ProjectSection from '@/components/home/project/ProjectSection';

export default function Home() {
    return (
        <>
            <Hero />
            <div className="min-h-[300vh]">
                <ProjectSection />
            </div>
            {/* <Footer /> */}
        </>
    );
}
