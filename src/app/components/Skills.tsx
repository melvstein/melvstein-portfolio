import Link from "next/link";

export default function Skills() {
    return (
        <section id="skills" className="absolute bottom-[140px] left-[-60px] rotate-[270deg]">
            <Link href="/skills" className="text-black text-5xl uppercase tracking-[15px] font-bold">Skills</Link>
        </section>
    );
}