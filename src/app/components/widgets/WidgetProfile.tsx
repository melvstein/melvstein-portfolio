import Image from "next/image";
import ProfilePic from "../../../../public/images/melvstein-dp.jpg";

export default function WidgetProfile() {
    return (
        <div className="widget w-full flex items-center justify-center flex-col space-y-8">
            <Image
                src={ProfilePic}
                width={100}
                height={100}
                alt="Melvstein Portfolio"
                className="text-white rounded-full"
            />
            <div className="flex items-center justify-center flex-col">
                <p className="font-bold text-xl">
                    Melvin Justine L. Bayogo
                </p>
                <p className="font-bold text-sm text-slate-400">
                    Fullstack Web Developer
                </p>
            </div>
        </div>
    );
}