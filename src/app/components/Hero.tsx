"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Typewriter from 'typewriter-effect'
import hero from "@/app/components/assest/hero.png"

const Hero = () => {
  return (
    <div id="Hero" className='bg-blue-100'>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-2 py-6 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-28 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#001F3F]">
        I am
        <br className="hidden lg:inline-block text-[#001F3F]"/>
        <Typewriter
  options={{
    strings: ['Web Developer', 'Graphic Designer'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <p className="mb-8 leading-relaxed text-gray-900">
      As a skilled web designer, I blend creativity with technical expertise to craft visually stunning and user-friendly digital experiences. With a passion for innovation and attention to detail, I strive to exceed expectations in every project. From elegant layouts to seamless functionality, I am dedicated to bringing visions to life on the web.
      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-300 rounded text-lg">
          Contact
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={hero}
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero