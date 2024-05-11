import Image from "next/image";
import ProfilePic from "../../../public/images/melvstein-dp.jpg";
import MelvsteinLogo from "../../../public/images/logo/melvstein_main_logo.png";

export default function DisplayPicture() {
    return (
        <div>
            <Image src={MelvsteinLogo} width={50} height={50} alt="melvstein display picture" className="uppercase rounded-full"/>
        </div>
    );
}