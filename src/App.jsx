// import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';


// function App() {
//   return (
//     <div className="bg-gray-900 min-h-screen text-white">
//       <Hero />
//       <Projects />
//       <Contact />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { motion } from "framer-motion";
import { skills } from './data/projects';
import About from './components/About';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-lg z-50 px-[5%]">
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
            <li className='border border-black/80 p-3 text-[18px] text-white/80' key={index}>
              {data.skill}
            </li>
          )}
        </ul>
      </section>

      {/* About */}
      {/* <section id="about" className="container mx-auto py-20 px-4 h-screen">
        <motion.h2 className="text-3xl font-bold mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>About Me</motion.h2>
        <p className="text-gray-300">I'm a passionate frontend developer who loves building sleek and modern web applications using React and TailwindCSS.</p>
      </section> */}

      <About />

      {/* Projects */}
      <Projects />

      {/* Contact */}
      {/* <Contact /> */}



      <nav className="fixed bottom-0 left-0 w-full bg-gray-800 shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center p-4 text-white/60">
          <h1 className="md:text-2xl font-bold">connect with me</h1>
          <ul className="flex gap-6 text-xs">
            <li><a href="https://github.com/iamonuwacj" className="hover:text-teal-400">Github</a></li>
            <li><a href="https://linkedin.com/in/iamonuwacj" className="hover:text-teal-400">Linkedin</a></li>
            <li><a href="#projects" className="hover:text-teal-400">dev.co</a></li>
            <li><a href="#contact" className="hover:text-teal-400">whatsapp</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default App;