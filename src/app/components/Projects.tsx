import Link from "next/link";

export default function Projects() {
    return (
        <section id="projects" className="absolute top-[40px] right-[15px]">
            <Link href="/projects" className="flex items-center justify-center flex-col text-black text-5xl uppercase tracking-[15px] space-y-2 font-bold">
                <p>P</p>
                <p>R</p>
                <p>O</p>
                <p>J</p>
                <p>E</p>
                <p>C</p>
                <p>T</p>
                <p>S</p>
            </Link>
        </section>
    );
}