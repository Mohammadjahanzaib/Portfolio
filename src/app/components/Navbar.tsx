import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { IoCloudDownloadOutline } from "react-icons/io5";
import LOGO from "@/app/components/assest/LOGO.png"


const Navbar = () => {
  return (
    <div className='bg-gray-100 z-50 sticky top-0'><header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg> */}
        
          <Image className="w-10 h-10"
          alt="logo"
          src={LOGO}/>
        
        <span className="ml-3 text-xl">Mohammad Jahanzaib</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link href={"#Hero"} className="mr-5 hover:text-gray-900 hover:font-bold">Home</Link>
        <Link href={"#About"} className="mr-5 hover:text-gray-900 hover:font-bold">About Me</Link>
        <Link href={"#Skill"} className="mr-5 hover:text-gray-900 hover:font-bold">Skills</Link>
        <Link href={"#Project"} className="mr-5 hover:text-gray-900 hover:font-bold">Projects</Link>
        <Link href={"#Contact"} className="mr-5 hover:text-gray-900 hover:font-bold">Contact Us</Link>
      </nav>
      <a href="/CV-1.pdf">
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:font-bold rounded text-base mt-4 md:mt-0">
        Download CV
        <IoCloudDownloadOutline className='ml-2 text-xl hover:font-bold'/>
      </button>
      </a>
    </div>
  </header>
  </div>
  )
}

export default Navbar
