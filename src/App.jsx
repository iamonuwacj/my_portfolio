// import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import { Github, LinkedinIcon } from 'lucide-react';
import { FaDev, FaWhatsapp } from "react-icons/fa"


import React from "react";
import { motion } from "framer-motion";
import { skills } from './data/projects';
import About from './components/About';

function App() {
  return (
    <div className="bg-[#0a192f] text-white min-h-screen overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#0a192f] shadow-lg z-50 px-[5%]">
        <div className="container mx-auto flex justify-between items-center py-4">
          <h1 className="md:text-2xl text-sm font-bold">iamonuwacj</h1>
          <ul className="flex gap-6">
            <li><a href="#home" className="hover:text-teal-400">Home</a></li>
            <li><a href="#about" className="hover:text-teal-400">About</a></li>
            <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
            {/* <li><a href="#contact" className="hover:text-teal-400">Contact</a></li> */}
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <Hero />

      <section className='bg-gray-800 py-20 flex px-[5%] flex-col items-center justify-center mt-20 w-full'>
        <h2 className='text-3xl font-bold'>My Tech Arsenal</h2>
        <ul className='flex flex-wrap rounded-full lg:w-1/2 w-full  gap-5 container text-center items-center justify-center mt-20'>
          { skills && skills.map((data, index) => 
            <li className='border border-black/80 px-3 py-2 text-[18px] text-white/80' key={index}>
              {data.skill}
            </li>
          )}
        </ul>
      </section>

      {/* About */}
      <About />

      {/* Projects */}
      <Projects />

      {/* Contact */}
      {/* <Contact /> */}



      <nav className="fixed bottom-0 left-0 w-full bg-blue-400 shadow-lg z-50 px-[5%]">
        <div className="container mx-auto flex justify-between items-center py-5 text-black">
          <h1 className="md:text-2xl font-bold">connect with me</h1>
          <ul className="flex gap-6 text-xs">
            <li>
              <a href="https://github.com/iamonuwacj" className='flex flex-col items-center justify-center group'>
                <Github className='group-hover:text-white transition-all'/>
                <span className="group-hover:text-white transition-all">Github</span>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/iamonuwacj" className='flex flex-col items-center justify-center group'>
                <LinkedinIcon className='group-hover:text-white transition-all'/>
                <span className="group-hover:text-white transition-all">Linkedin</span>
              </a>
            </li>
            <li>
              <a href="https://dev.to/iamonuwacj" className='flex flex-col items-center justify-center group'>
                <FaDev size={25} className='group-hover:text-white transition-all'/>
                <span className="group-hover:text-white transition-all">Dev.to</span>
              </a>
            </li>
            <li>
              <a href="https://wa.me/2348140154374" className='flex flex-col items-center justify-center group'>
                <FaWhatsapp size={25} className='group-hover:text-white transition-all'/>
                <span className="group-hover:text-white transition-all">Whatsapp</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default App;