
"use client"

import { useState } from "react";
import DisplayPicture from "./DisplayPicture";
import Link from "next/link";
import HomeLink from "./navlinks/HomeLink";
import { motion } from "framer-motion";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
      }

    return (
        <nav className="fixed group-hover:flex z-10">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {setIsOpen(!isOpen)}}
                className="z-10 fixed top-[20px] left-[20px] uppercase flex items-center justify-center border-white border-2 rounded-full cursor-pointer"
            >
                <DisplayPicture />
            </motion.button>
            <motion.nav
                animate={isOpen ? "open" : "closed"}
                variants={variants}
            >
                <div className="flex items-start justify-start flex-col fixed top-[0] uppercase bg-slate-950 min-h-screen pt-[100px]">
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
            </motion.nav>
        </nav>
    );
}