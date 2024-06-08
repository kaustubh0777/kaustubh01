"use client";

import React from 'react';
import { TbBrandCpp, TbBrandNextjs, TbSql } from "react-icons/tb";
import { FaHtml5, FaCss3, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiLinuxserver, SiMongodb, SiSap, SiSocketdotio, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaBootstrap, FaDocker, FaGit, FaJava, FaPython } from 'react-icons/fa6';

const Page = () => {
  return (
    <>
      <h1 className='flex justify-center items-center py-5 font-bold text-3xl'>ABOUT</h1>
      
      <div id='intro' className='mx-auto max-w-4xl px-4'>
        <h2 className='flex justify-center items-center py-5 font-bold text-2xl text-yellow-300'>Introduction</h2>
        <div className='flex justify-center items-center py-5 font-thin font-sans'>
          <p className='text-center text-xl'>
            A passionate Full Stack Software Developer 🚀 having experience in building Web and Mobile applications with JavaScript / Next.js / Reactjs / Nodejs / Typescript and other cool libraries and frameworks.
          </p>
        </div>
      </div>

      <h2 className='flex justify-center items-center py-5 font-bold text-2xl text-yellow-300'>Technical Skills</h2>
      <div className='grid grid-cols-5 sm:grid-cols-5 lg:grid-cols-5 xl:grid-cols-8 gap-6 px-4 py-4'>
        <TbBrandCpp className='w-12 h-12 mx-auto' />
        <FaJava className='w-12 h-12 mx-auto' />
        <FaPython className='w-12 h-12 mx-auto' />
        <FaHtml5 className='w-12 h-12 mx-auto' />
        <FaCss3 className='w-12 h-12 mx-auto' />
        <SiTailwindcss className='w-12 h-12 mx-auto' />
        <FaBootstrap className='w-12 h-12 mx-auto' />
        <IoLogoJavascript className='w-12 h-12 mx-auto' />
        <SiTypescript className='w-12 h-12 mx-auto' />
        <FaReact className='w-12 h-12 mx-auto' />
        <TbBrandNextjs className='w-12 h-12 mx-auto' />
        <FaNode className='w-12 h-12 mx-auto' />
        <SiSocketdotio className='w-12 h-12 mx-auto' />
        <SiExpress className='w-12 h-12 mx-auto' />
        <TbSql className='w-12 h-12 mx-auto' />
        <SiMongodb className='w-12 h-12 mx-auto' />
        <FaGit className='w-12 h-12 mx-auto' />
        <SiSap className='w-12 h-12 mx-auto' />
        <SiLinuxserver className='w-12 h-12 mx-auto' />
        <FaDocker className='w-12 h-12 mx-auto' />
      </div>

      <h2 className='flex justify-center items-center py-5 font-bold text-2xl text-yellow-300'>Work Experience</h2>

      <div className='mx-auto max-w-4xl px-4'>
        <h3 className='flex items-center justify-center font-bold text-2xl mt-4 text-green-100'>Tata Steel Ltd. - Software Engineer</h3>
        <ul className='font-thin text-center mt-5 list-disc list-inside'>
          <li>Developed robust APIs using Node.js to seamlessly integrate SQL Server and SAP databases, enabling efficient data access and retrieval for improved cross-functional collaboration and decision-making within the organization.</li>
          <li>Developed user-friendly interfaces using React and Next.js.</li>
          <li>Utilized ABAP programming for SAP database optimization, alongside working with SAP BW HANA and SAP Fiori for efficient data handling and interface design.</li>
        </ul>
      </div>
      
      <hr className="my-12 h-0.5 w-auto border-t-0 dark:bg-white" />
      
      <div className='mx-auto max-w-4xl px-4'>
        <h3 className='flex items-center justify-center font-bold text-2xl mt-4 text-green-100'>SISTMR Australia - Research Intern</h3>
        <ul className='font-thin text-center mt-5 list-disc list-inside'>
          <li>Developed proficiency in cybersecurity techniques and methodologies.</li>
          <li>Hands-on experience with Kali Linux and its comprehensive suite of cybersecurity tools.</li>
          <li>Explored and tested crucial networking and hacking concepts, effectively applying them in real-world scenarios.</li>
        </ul>
      </div>

      <hr className="my-12 h-0.5 w-auto border-t-0 dark:bg-white" />

      <div className='mx-auto max-w-4xl px-4 mb-16'>
        <h3 className='flex items-center justify-center font-bold text-2xl mt-4 text-green-100'>Achievements</h3>
        <ul className='font-thin text-center mt-5 list-disc list-inside'>
          <li>Achieved finale rank 738, selected for TechGig Code Gladiators finals by <b>Cognizant.</b></li>
          <li>Cleared <b>TCS NQT</b></li>
          <li><b>Interview Bit</b> Rank Under Top 10 of My University</li>
          <li><b>Geeks for Geeks</b> Rank Under Top 35 of My University</li>
        </ul>
      </div>
    </>
  );
};

export default Page;
