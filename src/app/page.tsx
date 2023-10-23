"use client"
import Image from 'next/image'
import Header from './components/Header'
import Footer from './components/Footer'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <main>
        <Header/>
        <div className='relative p-4 h-screen mt-[70px]'>
            <div className='flex items-start justify-start p-4 m-4'>
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Hi',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'My name is',
                    1000,
                    'Melvin Justine L. Bayogo',
                    1000,
                    'Just call me Melvstein',
                    1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
                className='text-white font-bold text-9xl'
            />
                {/* <h1 className='text-white font-bold text-9xl rounded-lg relative w-[max-content] font-mono
                    before:absolute before:inset-0 before:animate-typewriter
                    before:bg-black
                    after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
                after:bg-black'>
                    {"HI I'M MELVSTEIN"}
                </h1> */}
            </div>
            <div>
                <div className='bg-blue-500 h-[100px]'></div>
            </div>
        </div>
        <Footer/>
    </main>
  )
}

export default Home;