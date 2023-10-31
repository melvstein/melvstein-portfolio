
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import ProfilePicture from './ProfilePicture';

const IntroductionSection = () => {
    return (
        <section id='introduction' className='container mx-auto h-screen bg-black p-4'>
        <div className='flex flex-col'>
            <div className='flex items-center justify-center py-[50px]'>
                <div className='w-[200px] h-[200px] md:w-[400px] md:h-[400px]'>
                    <ProfilePicture width={500} height={500}/>
                </div>
            </div>
            <div className='flex items-center justify-center p-4'>
                <div className='flex flex-col space-y-4 [&>*]:mx-auto'>
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