
"use client"

import { useState } from "react";
import DisplayPicture from "./DisplayPicture";
import Link from "next/link";
import HomeLink from "./navlinks/HomeLink";

export default function Sidebar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed group-hover:flex">
            <div onClick={() => {setOpen(!open)}}>
                <div className="fixed top-[20px] left-[20px] uppercase flex items-center justify-center border-white border-2 rounded-full cursor-pointer">
                    <DisplayPicture />
                </div>
            </div>
            <div className={`${open ? 'flex items-start justify-center flex-col' : 'hidden'} fixed top-[100px] uppercase`}>
                <Link href='/' className=" hover:bg-slate-800 p-4 w-full">
                    Home
                </Link>
                <Link href='/resume' className=" hover:bg-slate-800 p-4 w-full">
                    Resume
                </Link>
                <Link href='/projects' className=" hover:bg-slate-800 p-4 w-full">
                    Projects
                </Link>
                <Link href='/contact' className=" hover:bg-slate-800 p-4 w-full">
                    Contact
                </Link>
            </div>
        </nav>
    );
}