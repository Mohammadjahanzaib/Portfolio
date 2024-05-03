import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import about from "@/app/components/assest/about.png"

const About = () => {
  return (
    <div id="About" className='bg-blue-100'>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        src={about}
        className="object-cover object-center rounded"
        alt="hero"
        
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-[#001F3F]">
        About Me
      </h1>
      <p className="mb-8 leading-relaxed font-sans text-gray-900">
      Greetings! I am Mohammad Jahanzaib, a Karachi University graduate with a knack for marrying aesthetics with functionality. My journey as a graphic designer and web developer is fueled by a passion for creating impactful digital experiences. Currently honing my craft through PIAIC, I specialize in TypeScript, Next.js, HTML, and CSS, leveraging these tools to craft visually stunning and user-friendly websites. With a keen eye for detail and a commitment to excellence, I bring ideas to life through elegant design and seamless functionality. Let us collaborate and elevate your online presence with compelling visuals and intuitive interfaces!
      </p>
      <div className="flex justify-center">
        <Link href="CV-1.pdf">
        <button className="inline-flex text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-300 rounded text-lg">
          View CV
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About