import Image from "next/image";
import MelvsteinLogoWhite from "../../public/images/logo/melvstein_logo_white.png";
import MelvsteinLogoBlue from "../../public/images/logo/melvstein_logo_blue.png";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="flex items-center justify-center">
            <Image src={MelvsteinLogoWhite} width={50} height={50} alt="melvstein display picture" className="uppercase"/>
        </div>
    );
  }