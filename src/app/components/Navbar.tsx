import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="nav">
            <Link href='/' className="nav-link">HOME</Link>
            <Link href='/skills' className="nav-link">SKILLS</Link>
            <Link href='/projects' className="nav-link">PROJECTS</Link>
        </nav>
    );
}