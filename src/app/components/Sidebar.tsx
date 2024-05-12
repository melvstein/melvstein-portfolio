
"use client"

import { useState } from "react";
import MelvsteinLogoSvg from "./logo/MelvsteinLogoSvg";
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
        <nav className={`flex items-center justify-center md:justify-start flex-col md:flex-row z-10 text-black ${isOpen ? "bg-white" : ""}`}>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {setIsOpen(!isOpen)}}
                className={`z-10 uppercase flex items-center justify-center cursor-pointer p-4`}
            >
                <DisplayPicture />
            </motion.button>
            <motion.nav
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                className={`flex items-center justify-center flex-col md:flex-row uppercase w-full font-bold ${isOpen ? "" : "hidden"}`}
            >
                <Link href='/' className="flex items-center justify-center hover:text-sky-500 size-full p-4">
                    Home
                </Link>
                <Link href='/resume' className="flex items-center justify-center hover:text-sky-500 w-full p-4">
                    Resume
                </Link>
                <Link href='/projects' className="flex items-center justify-center hover:text-sky-500 w-full p-4">
                    Projects
                </Link>
                <Link href='/contact' className="flex items-center justify-center hover:text-sky-500 w-full p-4">
                    Contact
                </Link>
            </motion.nav>
        </nav>
    );
}