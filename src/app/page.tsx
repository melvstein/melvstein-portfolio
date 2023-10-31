'use client'
import Header from './components/Header'
import Footer from './components/Footer'
import IntroductionSection from './components/IntroductionSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';
import BreakLine from './components/BreakLine';

const Home = () => {
  return (
    <main className='bg-black'>
        <div className='mx-auto font-mono scroll-smooth'>
            <Navbar position="top" />
            <div className='[&>*]:pt-[100px]'>
                <IntroductionSection />
                <SkillsSection />
                <ProjectsSection />
                {/* <BreakLine /> */}
                <ContactSection />
            </div>
            <Footer />
        </div>
    </main>
  )
}

export default Home;