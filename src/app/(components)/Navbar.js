"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoReorderThreeOutline } from "react-icons/io5";

const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <nav className="border-gray-200 bg-zinc-900 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    Kaustubh Pathak
                </Link>
                <button
                    onClick={toggleNavbar}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none  dark:text-gray-400 dark:hover:bg-black  bg-black"
                    aria-controls="navbar-default"
                    aria-expanded={isNavbarOpen ? "true" : "false"}
                >
                    <IoReorderThreeOutline size={60} />
                    <span className="sr-only">Open main menu</span>
                </button>
                <div className={`w-full md:block md:w-auto ${isNavbarOpen ? "" : "hidden"}`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li className=' focus:text-red-300'>
                            <Link href="/" className="block text-neutral-500 hover:text-neutral-700 focus:text-red-400 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-blue-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400 " aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="block text-neutral-500 hover:text-neutral-700 focus:text-red-400 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-blue-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400 " aria-current="page">About</Link>
                        </li>
                        <li>
                            <Link href="/projects" className="block text-neutral-500 hover:text-neutral-700 focus:text-red-400 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-blue-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400 " aria-current="page">Project</Link>
                        </li>
                        <li>
                            <Link href="/resume" className="block text-neutral-500 hover:text-neutral-700 focus:text-red-400 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-blue-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400 " aria-current="page">Resume</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="block text-neutral-500 hover:text-neutral-700 focus:text-red-400 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-blue-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400 " aria-current="page">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;