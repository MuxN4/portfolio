import { assets, infoList, toolkit } from '@/assets/assets'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Color map 
const toolColors = {
  [assets.vscode]: '#007ACC',       
  [assets.javascript]: '#F7DF1E',   
  [assets.react]: '#61DAFB',        
  [assets.postgres]: '#336791',     
  [assets.tailwind]: '#38B2AC',     
  [assets.git]: '#F05032',          
  [assets.go]: '#00ADD8',           
  [assets.python]: '#3776AB',       
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
}

const About = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <motion.div 
      id='about'
      className='w-full px-[12%] py-8 scroll-mt-20'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <motion.h4 className='text-center mb-2 text-lg font-Poppins' variants={fadeIn}>
        Intro
      </motion.h4>
      <motion.h2 className='text-center text-5xl font-Poppins' variants={fadeIn}>
        About
      </motion.h2>

      <motion.div 
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
        variants={fadeIn}
      >
        {/* User Image with Subtle Parallax */}
        <motion.div 
          className='w-64 sm:w-80 rounded-3xl max-w-none'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <Image src={assets.user_image} alt='user image' className='w-full' />
        </motion.div>

        <motion.div className='flex-1' variants={fadeIn}>
          <p className='mb-10 max-w-2xl font-Poppins'>
            I’m a software developer who enjoys building efficient, scalable applications. With a strong focus on problem-solving and continuous learning, I love creating solutions that deliver great user experiences and meet user needs.
          </p>

          <motion.ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {infoList.map(({ icon, iconDark, title, description }, idx) => (
              <motion.li
                key={idx}
                className={`border-[0.5px] rounded-xl border-gray-500 sm:border-white p-4 text-center cursor-pointer 
                            hover:scale-105 transition-all duration-300 
                            ${isLargeScreen ? 'hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]' : 'hover:shadow-[0_0_15px_rgba(0,0,0,0.8)]'}`}
                variants={fadeIn}
              >
                <Image src={isLargeScreen ? iconDark : icon} alt={title} className="mx-auto mt-4" />
                <h3 className="font-semibold">{title}</h3>
                <p className='text-sm'>{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4 className='my-6 font-Poppins' variants={fadeIn}>
            My Toolkit
          </motion.h4>

          <motion.ul className='flex items-center gap-2 sm:gap-4' variants={staggerContainer}>
            {toolkit.map((tool, idx) => (
              <motion.li 
                key={idx} 
                className='flex items-center justify-center w-8 sm:w-10 aspect-square rounded-md transition-all duration-300 hover:scale-105 cursor-pointer'
                style={{
                  boxShadow: `0px 0px 15px ${toolColors[tool] || '#ffffff'}`
                }}
                variants={fadeIn}
              >
                <Image src={tool} alt='tool' className='w-5 sm:w-7' />
              </motion.li>
            ))}
          </motion.ul>

        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
