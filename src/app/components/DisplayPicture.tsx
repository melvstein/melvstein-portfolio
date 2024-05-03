import Image from "next/image";
import profilePic from "../../../public/images/melvstein-dp.jpg"

export default function DisplayPicture() {
    return (
        <div>
            <Image src={profilePic} width={50} height={50} alt="melvstein display picture" className="uppercase rounded-full"/>
        </div>
    );
}