import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="h-24 border-l-2 border-gray-500 sm:border-white mx-auto"/>

      <h3 className="flex items-end text-xl md:text-2xl mb-3 font-Poppins">
        Hello, I'm Stephen
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Poppins">
        Software Developer 
      </h1>
      <p className="max-w-2xl mx-auto font-Poppins">
        I specialize in creating innovative solutions and building user-friendly experiences. 
        Let’s work together to turn your ideas into reality!
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a href="#contact" className="landing-link relative overflow-hidden group">
          <span className="relative z-10 flex items-center gap-2">
            Contact Me 
            <Image 
              src={assets.right_arrow_white}
              alt="profile"
              className="rounded-full w-4"
            />
          </span>
          <span className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-300 sm:bg-white sm:group-hover:text-black sm:group-hover:bg-white bg-gray-900 group-hover:bg-gray-900"/>
        </a>
      </div>

      <div className="h-24 border-l-2 border-gray-500 sm:border-white mx-auto"/>
    </div>
  )
}

export default LandingPage
