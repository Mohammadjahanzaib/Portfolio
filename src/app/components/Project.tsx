import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import atm from "@/app/components/assest/atm.png"
import calculator from "@/app/components/assest/calculator.png"

const Project = () => {
  return (
    <div id="Project" className='bg-blue-100'>
      <section className="text-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-[#001F3F]">
        PROJECT
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      Dive into the standout projects that define my skills and expertise in web development.
        </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={calculator}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
              CALCULATOR
            </h1>
            <p className="leading-relaxed line-clamp-2">
            Simple Calculator project is a user-friendly tool designed to perform basic arithmetic operations quickly and efficiently.
            </p>
            <Link
            target="_blank"
            href={"https://github.com/Mohammadjahanzaib/calculator"}>
            <p className="leading-relaxed underline cursor-pointer text-blue-500">
            View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={atm}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
              ATM
            </h1>
            <p className="leading-relaxed line-clamp-2">
            My Automated Teller Machine Simulation project is a virtual representation of a real-world ATM system.
            </p>
            <Link 
             target="blank"
              href={"https://github.com/Mohammadjahanzaib/ATM"}>
            <p className="leading-relaxed underline cursor-pointer text-blue-500">
            View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Project