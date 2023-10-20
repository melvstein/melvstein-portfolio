import Image from 'next/image'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
        <Header/>
        <div className='my-body'>
            <div className='flex items-start justify-start p-4 m-4'>
                <h1 className='text-white font-bold text-9xl rounded-lg relative w-[max-content] font-mono
                    before:absolute before:inset-0 before:animate-typewriter
                    before:bg-black
                    after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
                after:bg-black'>
                    {"HI I'M MELVSTEIN"}
                </h1>
            </div>
        </div>
        <Footer/>
    </main>
  )
}
