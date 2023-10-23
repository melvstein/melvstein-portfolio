import Link from "next/link";

const NavLink = (obj: { href: string, title: string }) => {
    return (
        <Link href={obj.href} className='flex items-center justify-center p-4 hover:bg-blue-500'>
            {obj.title}
        </Link>
    )
}

export default NavLink;