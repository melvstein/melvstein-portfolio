import Image from "next/image";
import LaravelIcon from "../../../../public/images/icons/laravel.png";
import NextjsIcon from "../../../../public/images/icons/nextjs.png";
import MongodbIcon from "../../../../public/images/icons/mongodb.png";

export default function WidgetSkills() {
    return (
        <div className="widget w-full">
            <h1 className="font-bold text-3xl">Skills</h1>
            <ul className="list-disc list-inside space-y-4">
                <li className="flex items-center justify-between">
                    <p className="text-3xl">Laravel</p> <Image src={LaravelIcon} width={50} height={50} alt="laravel" />
                </li>
                <li className="flex items-center justify-between">
                    Nextjs <Image src={NextjsIcon} width={50} height={50} alt="laravel" />
                </li>
                <li className="flex items-center justify-between">
                    MongoDB <Image src={MongodbIcon} width={50} height={50} alt="laravel" />
                </li>
                <li>Mysql</li>
                <li>Docker</li>
            </ul>
        </div>
    );
}