import Image from "next/image";
import ProfilePic from "../../../../public/images/melvstein-dp.jpg";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function WidgetProfile() {
    return (
        <div className="widget w-full flex items-center justify-center flex-col space-y-8">
            <Image
                src={ProfilePic}
                width={100}
                height={100}
                alt="Melvstein Portfolio"
                className="text-white rounded-full border-2 border-sky-500"
            />
            <div className="flex items-center justify-center flex-col">
                <p className="font-bold text-xl">
                    Melvin Justine L. Bayogo
                </p>
                <p className="font-bold text-sm text-slate-400 border-slate-500 border-b border-r rounded-br-lg px-2">
                    Fullstack Web Developer
                </p>
            </div>
            <div className="flex items-center justify-center space-x-4 ">
                
                <a href="">
                    <FaFacebook className="w-[50px] h-[50px]" />
                </a>
                <a href="">
                    <FaGithub className="w-[50px] h-[50px]" />
                </a>
                <a href="">
                    <FaLinkedin className="w-[50px] h-[50px]" />
                </a>
            </div>
        </div>
    );
}