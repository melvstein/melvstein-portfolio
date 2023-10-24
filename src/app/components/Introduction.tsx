
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <>
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Hi',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "I'm a Web Developer",
                1000,
                "I'm Melvstein"
            ]}
            wrapper="span"
            speed={50}
            repeat={0}
            cursor={true}
            className='text-white font-bold text-9xl font-mono bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500'
        />
        {/* <h1 className='text-white font-bold text-9xl rounded-lg relative w-[max-content] font-mono
            before:absolute before:inset-0 before:animate-typewriter
            before:bg-black
            after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
        after:bg-black'>
            {"HI I'M MELVSTEIN"}
        </h1> */}
        </>
    )
}

export default Introduction;