import { useState } from "react";
import Image from "next/image";
import ProfilePic from "../../../public/images/melvstein-dp.jpg";
import MjLogoWhite from "../../../public/images/logo/mj_logo_white.png";
import MjLogoBlack from "../../../public/images/logo/mj_logo_black.png";
import MjLogoVariantMain from "../../../public/images/logo/mj_logo_variant_main.png";
import MjLogoVariant1 from "../../../public/images/logo/mj_logo_variant1.png";
import MjLogoVariant2 from "../../../public/images/logo/mj_logo_variant2.png";

export default function DisplayPicture() {
    const [change, setChange] = useState(false);
    return (
        <div onClick={() => {setChange(!change)}}>
            {
                change ? <Image src={MjLogoVariantMain} width={50} height={50} alt="melvstein display picture" className="uppercase"/> : <Image src={MjLogoWhite} width={50} height={50} alt="melvstein display picture" className="uppercase"/>
            }
        </div>
    );
}