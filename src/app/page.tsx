"use client"
import Header from './components/Header'
import Footer from './components/Footer'
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';

const Home = () => {
  return (
    <main className='font-mono'>
        {/* <Header/> */}
        <div className='h-auto mx-auto bg-gradient-to-b from-cyan-500 to-blue-500'>
            <div id="introduction">
                <div className='flex items-center justify-center h-screen bg-slate-800'>
                    <Introduction />
                </div>
            </div>
            <div id="skills">
                <div className='relative bg-blue-200 text-black space-y-4 h-screen p-4'>
                    <Skills />
                </div>
            </div>
            <div id="contactme">
                <div className='contact-form h-screen flex items-center justify-center p-4 bg-gradient-to-r from-cyan-500 to-blue-500'>
                    <ContactForm />
                </div>
            </div>
        </div>
        <Navbar />
        {/* <Footer/> */}
    </main>
  )
}

export default Home;