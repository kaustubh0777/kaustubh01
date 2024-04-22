"use client"

import React from 'react';
import { TbBrandCpp, TbBrandNextjs, TbSql } from "react-icons/tb";
import { FaHtml5, FaCss3, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiLinuxserver, SiMongodb, SiSap, SiSocketdotio, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaBootstrap, FaDocker, FaGit, FaJava, FaPython } from 'react-icons/fa6';
import Particless from '../(components)/Particless';

const Page = () => {
  return (
    <>
      <Particless />
      <h1 className='flex justify-center items-center py-5 font-bold text-3xl'>ABOUT</h1>
      <div id='intro' className='mx-auto max-w-md'>
        <h1 className='flex justify-center items-center py-5 font-bold text-2xl text-yellow-300'>Introduction</h1>
        <div className='flex justify-center items-center py-5 font-thin font-sans'>
          <p className='text-center text-xl'>
            A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Next.js / Reactjs / Nodejs / Typescript and some other cool libraries and frameworks.
          </p>
        </div>
      </div>
      <h1 className='flex justify-center items-center py-5 font-bold text-2xl text-yellow-300'>Technical Skills</h1>
      <div className='flex flex-wrap-3 gap-4 px-4 py-4 justify-center items-center text-5xl'>

        <TbBrandCpp />
        <FaJava />
        <FaPython />
        <FaHtml5 />
        <FaCss3 />
        <SiTailwindcss />
        <FaBootstrap />
        <IoLogoJavascript />
        <SiTypescript />
        <FaReact />
        <TbBrandNextjs />
        <FaNode />
        <SiSocketdotio />
        <SiExpress />
        <TbSql />
        <SiMongodb />
        <FaGit />
        <SiSap />
        <SiLinuxserver />
        <FaDocker />
      </div>
      <h1 className='flex justify-center items-center py-5 font-bold text-2xl text-yellow-300'>Work Experience</h1>
      <h1 className=' flex items-center justify-center font-bold text-2xl mt-4 text-green-100'>Tata Steel Ltd. - Software Engineer</h1>
      <div className='mx-auto max-w-80 font-thin text-center mt-5 '>
        <ul className='px-4 mt-4'>
          <li className='mb-2'>
            &rarr; Developed robust APIs using Node.js to seamlessly integrate SQL Server and SAP databases, enabling efficient data access and retrieval for improved cross-functional collaboration and decision-making within the organization.
          </li>
          <li className='mb-2'>
            &rarr; Developed user-friendly interfaces using React and Next.js.
          </li>
          <li className='mb-2'>
            &rarr; Utilized ABAP programming for SAP database optimization, alongside working with SAP BW HANA and SAP Fiori for efficient data handling and interface design.
          </li>
        </ul>
      </div>
      <hr class="my-12 h-0.5 w-auto border-t-0 dark:bg-white" />
      <h1 className=' flex items-center justify-center font-bold text-2xl mt-4 text-green-100'>SISTMR Australlia - Research Intern</h1>
      <div className='mx-auto max-w-80 font-thin text-center mt-5 '>
        <ul className='px-4 mt-4'>
          <li className='mb-2'>
            &rarr; Developed proficiency in cybersecurity techniques and methodologies.
          </li>
          <li className='mb-2'>
            &rarr; Hands-on experience with Kali Linux and its comprehensive suite of cybersecurity tools.
          </li>
          <li className='mb-2'>
          &rarr; Explored and tested crucial networking and hacking concepts, effectively applying them in real-world scenarios.
          </li>
        </ul>
      </div>
      <hr class="my-12 h-0.5 w-auto border-t-0 dark:bg-white" />
      <h1 className=' flex items-center justify-center font-bold text-2xl mt-4 text-green-100'>Achievements</h1>
      <div className='mx-auto max-w-80 font-thin text-center mt-5 mb-16'>
        <ul className='px-4 mt-4'>
          <li className='mb-2'>
            &rarr; Achieved finale rank 738, selected for TechGig Code Gladiators finals by <b>Cognizant.</b>
          </li>
          <li className='mb-2'>
            &rarr; Cleared <b>TCS NQT</b>
          </li>
          <li className='mb-2'>
          &rarr; <b>Interview Bit</b> Rank Under Top 10 of My University
          </li>
          <li className='mb-2'>
          &rarr; <b>Geeks for Geeks</b> Rank Under Top 35 of My University
          </li>
        </ul>
      </div>




    </>
  );
};

export default Page;
