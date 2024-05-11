import Image from "next/image";
import ProfilePic from "../../../public/images/melvstein-dp.jpg"
import MelvsteinLogo from "../../../public/images/logo/melvstein_logo.png"
import MelvsteinLogo1 from "../../../public/images/logo/melvstein_logo1.png"
import MelvsteinLogo2 from "../../../public/images/logo/melvstein_logo2.png"

export default function DisplayPicture() {
    return (
        <div>
            <Image src={MelvsteinLogo2} width={50} height={50} alt="melvstein display picture" className=""/>
        </div>
    );
}