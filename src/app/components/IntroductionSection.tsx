
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const IntroductionSection = () => {
    return (
        <section id='introduction' className='h-screen bg-slate-800'>
        <div className='grid grid-cols-1 md:grid-cols-12'>
            <div className='col-span-6 md:h-screen p-4'>
                <div className='flex flex-col space-y-4'>
                    <span className='select-none uppercase text-slate-300 text-3xl md:text-5xl lg:text-7xl font-bold'>
                        {"Hi, I'm"}
                    </span>
                    <TypeAnimation
                        sequence={[
                            "Melvstein",
                            1000,
                            "a Programmer",
                            1000,
                            "a Web Developer",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className='select-none uppercase font-bold text-4xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500'
                    />
                </div>
                <ul className='space-y-4 list-disc p-4 text-lg'>
                    <li>
                        I live in Type B NBP Reservation, Poblacion, Muntinlupa City
                    </li>
                    <li>
                        {"I'm 27 years old"}
                    </li>
                </ul>
            </div>
            <div className='col-span-6 flex items-center justify-center h-full md:h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
                <div className='w-[200px] h-[200px] md:w-[400px] md:h-[400px]'>
                    <Image
                        src="/images/melvstein.jpg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        priority={true}
                        className='border-slate-500 border rounded-full'
                    />
                </div>
            </div>
        </div>
        {/* <h1 className='text-white font-bold text-9xl rounded-lg relative w-[max-content] font-mono
            before:absolute before:inset-0 before:animate-typewriter
            before:bg-black
            after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
        after:bg-black'>
            {"HI I'M MELVSTEIN"}
        </h1> */}
        </section>
    )
}

export default IntroductionSection;