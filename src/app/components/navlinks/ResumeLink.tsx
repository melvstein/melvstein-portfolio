import Link from "next/link";

export default function ResumeLink() {
    return (
        <Link href="/resume" className="fixed bottom-[120px] left-[-70px] rotate-[270deg] text-white text-5xl uppercase tracking-[15px] font-bold">
            Resume
        </Link>
    );
}