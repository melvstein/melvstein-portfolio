import Link from "next/link";
import ProfilePicture from "./ProfilePicture";
import NavLink from "./NavLink";

const navLinks = [
    {
        href: '/',
        title: 'Melvstein'
    },
    {
        href: '/contactme',
        title: 'Contact Me'
    }
];

const Nav = () => {
    return (
        <nav className='fixed top-0 left-0 right-0 z-10 flex flex-wrap items-stretch justify-between mx-auto bg-slate-500 bg-opacity-90'>
            <Link href="/" className='flex items-center justify-center gap-2 p-4 hover:bg-blue-500'>
                <ProfilePicture />
            </Link>

            <ul className="flex items-stretch justify-center">
                {
                    navLinks.map((link, index) => (
                        <li className="flex items-stretch justify-center" key={index}>
                            <NavLink href={link.href} title={link.title} />
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Nav;