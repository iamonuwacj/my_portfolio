import React from 'react';
import {projects} from '../data/projects';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section className="pt-20 pb-40 px-[5%] bg-gray-800" id="projects">
      <h2 className="text-4xl font-bold text-center mb-20">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 p-6 rounded-xl shadow-lg"
          >
            <div className='flex w-full justify-center mb-5'>
              <img src={project.image} alt={project.title} className="rounded-lg mb-4 h-fit" />
            </div>
            <h3 className="text-2xl font-semibold mb-5">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-5">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-sm bg-gray-700 px-2 py-1 rounded-md">{tag}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={project.github} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">GitHub</a>
              <a href={project.demo} target="_blank" rel="noreferrer" className="text-green-400 hover:underline">Demo</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
