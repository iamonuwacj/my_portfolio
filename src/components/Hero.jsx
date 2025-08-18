import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/heroImg.jpeg'

export default function Hero() {
  return (
    <section className="flex  lg:h-[90vh] pt-20 flex-wrap-reverse items-center justify-center text-center
    px-[5%]">
      <div className='w-full lg:w-1/2 mt-10'>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4 md:text-left"
        >
          Hi, I'm <span className="text-blue-400">Onuwa Chinedu</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg text-gray-300  md:max-w-full md:text-left mx-auto"
        >
          A passionate Frontend Developer <br />  <span className='text-sm text-gray-500'>React | TailwindCSS | JavaScript</span>
        </motion.p>

        <div className='flex items-start justify-center md:justify-start mt-5'>
          <a href="https://wa.me/2348140154374" target='_blank' className='py-2 inset-1 border
           border-black/80 hover:bg-teal-800 rounded px-4 hover:scale-y-110'>Open to work</a>
        </div>
      </div>

      <div className='h-full lg:w-1/2 w-full'>
        <img src={heroImg} alt="iamonuwacj picture" className='w-[98%] rounded-full'/>
      </div>
    </section>
  );
}
