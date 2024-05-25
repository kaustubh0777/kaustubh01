"use client"

import Link from "next/link";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Typewriter from "./(components)/Typewriter";
import Particless from "./(components)/Particless";


export default function Home() {
  return (
    <>
      <Particless />
      <div className="container  py-7 ">
        <h1 className=" flex justify-center  items-center py-6 font-bold text-6xl">Hello Everyone </h1>
        <span className="flex justify-center  items-center py-5 font-bold text-4xl text-blue-600 ">This is Kaustubh Pathak </span>

        <div className="btn flex justify-center ">
          <Link href="/resume">
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Download Resume
            </button>
          </Link>
        </div>

        <div className="logo flex justify-center items-center py-4  my-4  mx-auto space-x-2">
          <Link href="https://twitter.com/thisiskaustubh1">
            <CiTwitter size={50} />
          </Link>
          <Link href='https://www.linkedin.com/in/kaustubh-pathak-18123b172/'>
            <FaLinkedin size={45} />
          </Link>
          <Link href="https://github.com/kaustubh0777">
            <FaGithub size={45} />
          </Link>
          <Link href="https://leetcode.com/Kaustubh_0777/">
            <SiLeetcode size={45} />
          </Link>
        </div>

        <Typewriter />

      </div>
    </>

  );
}
