'use client'
import Header from './components/Header'
import Footer from './components/Footer'
import IntroductionSection from './components/IntroductionSection';
import SkillSection from './components/SkillSection';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';
import BreakLine from './components/BreakLine';

const Home = () => {
  return (
    <main className='bg-black'>
        <div className='mx-auto font-mono scroll-smooth'>
            <IntroductionSection />
            <BreakLine />
            <SkillSection />
            <BreakLine />
            <ContactSection />
            <Navbar />
        </div>
    </main>
  )
}

export default Home;