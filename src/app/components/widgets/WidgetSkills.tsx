import Image from "next/image";
import LaravelIcon from "../../../../public/images/icons/laravel.png";
import NextjsIcon from "../../../../public/images/icons/nextjs.png";
import TailwindcssIcon from "../../../../public/images/icons/tailwindcss.png";
import MongodbIcon from "../../../../public/images/icons/mongodb.png";
import Mysql from "../../../../public/images/icons/mysql.png";
import Docker from "../../../../public/images/icons/docker.png";

export default function WidgetSkills() {
    return (
        <div className="widget w-full space-y-4">
            <h1 className="font-bold text-3xl border-b border-slate-400">Skills</h1>
            <ul className="list-disc list-inside space-y-4">
                <li className="flex items-center justify-start space-x-2">
                    <Image src={LaravelIcon} width={25} height={25} alt="laravel" />
                    <p className="text-lg">Laravel</p>
                </li>
                <li className="flex items-center justify-start space-x-2">
                    <Image src={NextjsIcon} width={25} height={25} alt="laravel" />
                    <p className="text-lg">Nextjs</p>
                </li>
                <li className="flex items-center justify-start space-x-2">
                    <Image src={TailwindcssIcon} width={25} height={25} alt="laravel" />
                    <p className="text-lg">Tailwindcss</p>
                </li>
                <li className="flex items-center justify-start space-x-2">
                    <Image src={MongodbIcon} width={25} height={25} alt="laravel" />
                    <p className="text-lg">MongoDB</p>
                </li>
                <li className="flex items-center justify-start space-x-2">
                    <Image src={Mysql} width={25} height={25} alt="laravel" />
                    <p className="text-lg">Mysql</p>
                </li>
                <li className="flex items-center justify-start space-x-2">
                    <Image src={Docker} width={25} height={25} alt="laravel" />
                    <p className="text-lg">Docker</p>
                </li>
            </ul>
        </div>
    );
}