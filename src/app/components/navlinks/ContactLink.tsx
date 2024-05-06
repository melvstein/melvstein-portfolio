import Link from "next/link";

export default function ContactLink() {
    return (
        <Link href="/contact" className="fixed bottom-[20px] right-[20px] text-white text-xl uppercase tracking-[5px] font-bold">
            Get in touch
        </Link>
    );
}