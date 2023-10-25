import Link from "next/link";
import ProfilePicture from "./ProfilePicture";
import NavLink from "./NavLink";

const navLinks = [
    {
        id: "skills",
        href: "#skills",
        title: "Skills"
    },
    {
        id: "contactme",
        href: "#contactme",
        title: "Contact Me"
    }
];

const Navbar = () => {
    const navLinksLastKey = navLinks.length - 1;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-10 flex items-center justify-center mx-auto">
            <nav className="flex items-stretch justify-between mx-auto bg-slate-900 bg-opacity-90 rounded-t-3xl border-t-[1px] border-x-[1px] border-slate-400 uppercase">
            <Link href="/" className="flex items-center justify-center gap-2 px-6 py-2 hover:bg-blue-500 hover:rounded-tl-3xl">
                <ProfilePicture /> {"Melvstein"}
            </Link>

            {
                navLinks.map((link, key) => (
                    <Link href={link.href} className={navLinksLastKey == key ? "flex items-center justify-center px-6 hover:bg-blue-500 hover:rounded-tr-3xl" : "flex items-center justify-center px-6 hover:bg-blue-500"} key={link.id}>
                        {link.title}
                    </Link>
                ))
            }

            {/* <ul className="flex items-stretch justify-between">
                {
                    navLinks.map((link) => (
                        <li className={link.id == "contactme" ? "flex items-center justify-center px-8 hover:bg-blue-500 hover:rounded-tr-3xl" : "flex items-center justify-center p-4 hover:bg-blue-500"} key={link.id}>
                            <NavLink href={link.href} title={link.title} />
                        </li>
                    ))
                }
            </ul> */}
        </nav>
        </div>
    );
}

export default Navbar;