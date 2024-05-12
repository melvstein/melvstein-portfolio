import Image from "next/image";
import ProfilePic from "../../../public/images/melvstein-dp.jpg";
import MjLogoWhite from "../../../public/images/logo/mj_logo_white.png";
import MjLogoBlack from "../../../public/images/logo/mj_logo_black.png";
import MjLogoVariant1 from "../../../public/images/logo/mj_logo_variant1.png";
import MjLogoVariant2 from "../../../public/images/logo/mj_logo_variant2.png";
import MjLogoVariant3 from "../../../public/images/logo/mj_logo_variant3.png";

export default function DisplayPicture() {
    return (
        <div>
            <Image src={MjLogoVariant3} width={50} height={50} alt="melvstein display picture" className="uppercase"/>
        </div>
    );
}