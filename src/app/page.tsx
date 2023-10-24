"use client"
import Header from './components/Header'
import Footer from './components/Footer'
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';

const Home = () => {
  return (
    <main>
        <Header/>
        <div className='h-auto mx-auto mt-[70px]'>
            <div className='intro flex items-start justify-start p-4 m-4 h-screen'>
                <Introduction />
            </div>
            <div id="skills" className='relative bg-blue-200 text-black space-y-4 h-screen py-[100px] px-4'>
                <Skills />
            </div>
            <div id="contactme" className='contact-form h-screen flex items-center justify-center p-4 bg-gradient-to-r from-cyan-500 to-blue-500'>
                <ContactForm />
            </div>
        </div>
        <Footer/>
    </main>
  )
}

export default Home;