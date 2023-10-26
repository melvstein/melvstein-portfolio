'use client'
import Header from './components/Header'
import Footer from './components/Footer'
import IntroductionSection from './components/IntroductionSection';
import SkillSection from './components/SkillSection';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';

const Home = () => {
  return (
    <main className='mx-auto font-mono scroll-smooth'>
        <IntroductionSection />
        <SkillSection />
        <ContactSection />
        <Navbar />
    </main>
  )
}

export default Home;