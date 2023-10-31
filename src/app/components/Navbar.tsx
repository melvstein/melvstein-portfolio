import Link from "next/link";
import ProfilePicture from "./ProfilePicture";
import NavLink from "./NavLink";
import BreakLine from "./BreakLine";

const navLinks = [
    {
        id: "skills",
        href: "#skills",
        title: "Skills"
    },
    {
        id: "projects",
        href: "#projects",
        title: "Projects"
    },
    {
        id: "contactme",
        href: "#contactme",
        title: "Contact Me"
    }
];

const Navbar = (props: { position: string }) => {
    const navLinksLastKey = navLinks.length - 1;


    if (props.position == 'bottom') {
        return (
            <div className="fixed bottom-0 left-0 right-0 z-10 mx-auto bg-black">
                <nav className="flex items-stretch justify-between mx-auto rounded-t-3xl uppercase bg-gradient-to-t from-cyan-500 to-blue-500 pt-[1px]">
                <Link href="/" className="flex items-center justify-center gap-2 px-4 py-2 bg-black hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-tl-3xl">
                    <ProfilePicture width={50} height={50}/> {"Melvstein"}
                </Link>
    
                {
                    navLinks.map((link, key) => (
                        <Link href={link.href} key={link.id} className="flex items-center justify-center px-4 bg-black hover:bg-gradient-to-r from-cyan-500 to-blue-500">
                            {link.title}
                        </Link>
                    ))
                }
    
                {/* <ul className="flex items-stretch justify-between">
                    {
                        navLinks.map((link) => (
                            <li className={link.id == "contactme" ? "flex items-center justify-center px-8 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:rounded-tr-3xl" : "flex items-center justify-center p-4 hover:bg-gradient-to-r from-cyan-500 to-blue-500"} key={link.id}>
                                <NavLink href={link.href} title={link.title} />
                            </li>
                        ))
                    }
                </ul> */}
            </nav>
            </div>
        );
    } else {
        return (
            <div className="fixed top-0 left-0 right-0 z-10 mx-auto bg-black">
                <nav className="container flex items-stretch justify-between mx-auto uppercase">
                <Link href="/" className="flex items-center justify-center gap-2 px-6 py-2 hover:bg-gradient-to-r from-cyan-500 to-blue-500">
                    <ProfilePicture width={50} height={50}/> {"Melvstein"}
                </Link>

                <div className="flex items-stretch justify-center">
                    {
                        navLinks.map((link, key) => (
                            <Link href={link.href} key={link.id} className="flex items-center justify-center px-6 hover:bg-gradient-to-r from-cyan-500 to-blue-500">
                                {link.title}
                            </Link>
                        ))
                    }
                </div>
    
                {/* <ul className="flex items-stretch justify-between">
                    {
                        navLinks.map((link) => (
                            <li className={link.id == "contactme" ? "flex items-center justify-center px-8 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:rounded-tr-3xl" : "flex items-center justify-center p-4 hover:bg-gradient-to-r from-cyan-500 to-blue-500"} key={link.id}>
                                <NavLink href={link.href} title={link.title} />
                            </li>
                        ))
                    }
                </ul> */}
            </nav>
            <BreakLine />
            </div>
        );
    }
}

export default Navbar;