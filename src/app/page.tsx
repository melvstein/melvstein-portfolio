import Image from "next/image";
import MyHome from "./components/MyHome";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
        <Skills />
        <Projects />
        <MyHome />

        <div className="min-h-screen mx-[150px] py-[150px]">
            <div className="flex items-center justify-center flex-col uppercase space-y-[100px]">
                <div className="flex items-center justify-center space-x-[50px]">
                    <p className="font-bold text-9xl">Hi {"I'm"}</p>
                    <p className="font-bold">a Fullstack web developer</p>
                </div>
                <p className="font-bold text-9xl">Melvin Justine</p>
            </div>
        </div>
    </div>
  );
}
