import { assets } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const LandingPage = () => {
  return (
    <motion.div initial='hidden' animate='visible' className='landing-container'>
      <motion.div className='h-24 border-l-2 border-gray-500 sm:border-white mx-auto' 
        initial={{ scaleY: 0 }} 
        animate={{ scaleY: 1 }} 
        transition={{ duration: 0.8 }}
      />

      <motion.h3 className='flex items-end text-xl md:text-2xl mb-3 font-Poppins' variants={fadeIn}>
        Hello, I'm Stephen
      </motion.h3>

      <motion.h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Poppins' 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        Software Developer 
      </motion.h1>

      <motion.p className='max-w-2xl mx-auto font-Poppins' variants={fadeIn}>
        I specialize in creating innovative solutions and building user-friendly experiences. 
        Let’s work together to turn your ideas into reality!
      </motion.p>

      <motion.div className='flex flex-col sm:flex-row items-center gap-4 mt-4' variants={fadeIn}>
        <motion.a href='#contact' className='landing-link relative overflow-hidden group' whileHover={{ scale: 1.1 }}>
          <span className='relative z-10 flex items-center gap-2'>
            Contact Me 
            <Image 
              src={assets.right_arrow_white}
              alt='profile'
              className='rounded-full w-4'
            />
          </span>
          <span className='absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-300 sm:bg-white sm:group-hover:text-black sm:group-hover:bg-white bg-gray-900 group-hover:bg-gray-900'/>
        </motion.a>
      </motion.div>

      <motion.div className='h-24 border-l-2 border-gray-500 sm:border-white mx-auto' 
        initial={{ scaleY: 0 }} 
        animate={{ scaleY: 1 }} 
        transition={{ duration: 0.8 }}
      />
    </motion.div>
  );
};

export default LandingPage;
