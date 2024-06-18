import Link from 'next/link'
import React from 'react'
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";


const Contact = () => {
  return (
    <div id="Contact" className='bg-blue-100'>
        <section className="text-gray-600 body-font relative">
  <div className="container px-2 py-6 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
        Contact Us
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Get in touch, we had love to hear from you.
      </p>
    </div>
    <form
    action="https://formspree.io/f/xayrrgyo"
    method="POST">
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="subject" className="leading-7 text-sm text-gray-600">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            required
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-blue-900 border-0 py-2 px-8 focus:outline-none hover:bg-blue-300 hover:text-black rounded text-lg">
            Send
          </button>
          </div>
        <div className="p-2 w-full pt-4 mt-2 border-t border-gray-200 text-center">
          <a className="text-gray-900">Mohammadjahanzaib7@gmail.com</a>

            <p className="leading-normal">
            <p>+92 300 8217668</p>
            <br/>
            Karachi, Pakistan.
            <br/>
            <a className='inline-flex flex-wrap text-lg justify-center'>
           <Link href="https://www.facebook.com/share/x2VJwZ8UKsR77r6k/?mibextid=qi2Omg">     
          <IoLogoFacebook className='ml-2 hover:text-blue-600'/>
          </Link>
          <Link href="https://www.instagram.com/jahanzaib4881?igsh=ZXpkdjhvcGNwOHUz">
          <IoLogoInstagram className='ml-2 hover:text-red-600' />
          </Link>
          <Link href="https://www.linkedin.com/in/jahanzaib-ayaz-a66675b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <IoLogoLinkedin className='ml-2 hover:text-blue-600' />
          </Link>
          </a>
          </p>
        </div>
      </div>
    </div>
    </form>
  </div>
</section>
  </div>
  )
}

export default Contact