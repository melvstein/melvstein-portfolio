import Link from "next/link";
import DisplayPicture from "../DisplayPicture";

export default function HomeLink() {
    return (
        <Link href="/" className="fixed top-[20px] left-[20px] uppercase flex items-center justify-center border-white border-2 rounded-full">
            <DisplayPicture />
        </Link>
    );
}