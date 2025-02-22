import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

// Animation variants
const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const Work = () => {
  return (
    <motion.div 
      id='work' 
      className='w-full px-[12%] py-16 scroll-mt-20'
      initial="hidden"
      animate="visible"
      variants={fadeInVariant}
    >
      {/* "My Work" heading */}
      <motion.h4 
        className='text-center mb-2 text-lg font-Poppins'
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        My Work
      </motion.h4>

      <motion.h2 
        className='text-center text-5xl font-Poppins'
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        Projects
      </motion.h2>

      <motion.p 
        className='text-center max-w-2xl mx-auto mt-5 font-Poppins'
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      >
        Here are some of my projects that showcase my growth as a developer. Many are open-source, so feel free to explore, contribute, or provide feedback!
      </motion.p>

      {/* Responsive Grid Layout */}
      <motion.div 
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        {workData.map((project, idx) => (
          <motion.a 
            key={idx}
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className='group relative cursor-pointer overflow-hidden rounded-xl bg-cover bg-center block'
            style={{ backgroundImage: `url(${project.bgImage})`, aspectRatio: '16/10' }}
            variants={fadeInVariant}
          >
            {/* Dark Overlay */}
            <div className='absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500' />

            {/* Project Info Card */}
            <div className='project-info-card'>
              <h3 className='text-lg font-semibold'>{project.title}</h3>
              <p className='text-sm'>{project.description}</p>

              {/* Icon changes based on screen size */}
              <div className='flex justify-end mt-3'>
                <Image 
                  src={assets.send_icon} 
                  alt='send icon' 
                  className='w-5 transition-transform duration-300 group-hover:translate-x-1 block sm:block lg:hidden'
                />
                <Image 
                  src={assets.send_icon_white} 
                  alt='send icon' 
                  className='w-5 transition-transform duration-300 group-hover:translate-x-1 hidden lg:block'
                />
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Work
