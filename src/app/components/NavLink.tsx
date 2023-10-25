import Link from "next/link";

const NavLink = (obj: { href: string, title: string }) => {
    return (
        <Link href={obj.href} >
            {obj.title}
        </Link>
    )
}

export default NavLink;