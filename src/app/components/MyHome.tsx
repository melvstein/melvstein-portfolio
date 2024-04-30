import Link from "next/link";

export default function MyHome() {
    return (
        <section id="home" className="absolute top-[20px] left-[20px] uppercase">
            <Link href="/" className="font-bold">Home</Link>
        </section>
    );
}