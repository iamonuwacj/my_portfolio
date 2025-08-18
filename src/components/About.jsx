import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6 md:px-[5%]">
      {/* Intro */}
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
        >
          About Me
        </motion.h1>

        {/* Typewriter effect */}
        <motion.p
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          className="text-lg text-gray-600 leading-relaxed 
          pr-2  whitespace-wrap font-mono"
        >
          Hi, I’m Chinedu Onuwa  — A frontend developer passionate about building
          modern, scalable, and user-friendly web applications.
        </motion.p>
      </div>

      {/* Sections */}
      <div className="max-w-4xl mx-auto mt-12 space-y-12">
        {/* What I Do */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-3"> What I Do</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Building clean, responsive UIs with React, Next.js, and TailwindCSS</li>
            <li>Designing smooth user experiences that balance aesthetics with performance</li>
            <li>Exploring new tools and frameworks to stay ahead in web development</li>
          </ul>
        </motion.div>

        {/* Why I Do It */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Why I Do It</h2>
          <p className="text-gray-700 leading-relaxed">
            I believe technology should solve real problems and empower people. For me, frontend
            development isn’t just about writing code—it’s about crafting{" "}
            <span className="font-semibold">interfaces that feel effortless</span> for the user.
          </p>
        </motion.div>

        {/* Beyond Code */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Beyond Code</h2>
          <p className="text-gray-700 leading-relaxed">
            When I’m not coding, you’ll find me learning about{" "}
            <span className="font-semibold">startups</span>, exploring{" "}
            <span className="font-semibold">business ideas</span>, or brainstorming ways to make tech
            more accessible.
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">🤝 Let’s Connect</h2>
          <p className="text-gray-700 mb-6">
            I’m always open to collaboration, freelance projects, or just a chat about tech.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:iamonuwacj@gmail.com" target="_blank"
              className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
            >
              Email Me
            </a>
            <a
              href="https://wa.me/2348140154374"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-green-600 text-green-600 rounded-lg shadow hover:bg-green-50 transition"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}