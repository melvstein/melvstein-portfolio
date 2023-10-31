import Image from 'next/image';

const ProfilePicture = (props: {
    width: number,
    height: number
}) => {
    return (
        <div className='pointer-events-none'>
            <Image
                src="/images/melvstein.jpg"
                width={props.width}
                height={props.height}
                alt="Picture of the author"
                className='rounded-full p-[1px] bg-gradient-to-r from-cyan-500 to-blue-500'
                priority={true}
            />
        </div>
    );
}

export default ProfilePicture;