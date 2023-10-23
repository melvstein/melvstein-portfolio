import Image from 'next/image';

const ProfilePicture = () => {
    return (
        <div>
            <Image
                src="/images/melvstein.jpg"
                width={50}
                height={50}
                alt="Picture of the author"
                className='border-slate-500 border rounded-full'
                priority={true}
            />
        </div>
    );
}

export default ProfilePicture;