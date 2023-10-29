import Image from 'next/image';

const ProfilePicture = () => {
    return (
        <div>
            <Image
                src="/images/melvstein.jpg"
                width={50}
                height={50}
                alt="Picture of the author"
                className='rounded-full p-[1px] bg-gradient-to-r from-cyan-500 to-blue-500'
                priority={true}
            />
        </div>
    );
}

export default ProfilePicture;