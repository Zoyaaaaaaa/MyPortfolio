"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const technologies = [
  { name: "NEXT.JS", icon: "⚡" },
  { name: "REACT", icon: "⚛️" },
  { name: "NODE.JS", icon: "🚀" },
  { name: "MONGODB", icon: "🍃" },
  { name: "JAVASCRIPT", icon: "📜" },
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "SCSS", icon: "💅" },
  { name: "GIT(HUB)", icon: "📚" },
];

export function HeroSection() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center">
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <div className="text-green-400 font-mono mb-4">Hello, my name is</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Zoya Hassan.
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-300 mb-6">
                I craft web solutions and innovate with AI.
              </h2>
              <p className="text-gray-300 text-lg font-mono max-w-2xl">
                I'm a full-stack web developer and generative AI enthusiast — blending technical expertise 
                with creative innovation to build impactful digital experiences.
              </p>

          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {/* <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="px-3 py-1 bg-gray-800/50 backdrop-blur-sm rounded-full 
                           border border-gray-700/50 text-sm text-gray-300 
                           flex items-center gap-1 hover:bg-gray-700/50 transition-colors"
                >
                  <span>{tech.icon}</span>
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </div> */}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 
                       bg-gradient-to-r from-green-400 to-blue-500 
                       text-white rounded-full font-medium
                       hover:from-green-500 hover:to-blue-600 
                       transition-all duration-200 shadow-lg"
            >
              View My Work
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
          </motion.div>
        </div>

        {/* Right Side - Device Mock */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 mt-12 lg:mt-0"
        >
          <div className="relative w-full max-w-md mx-auto transform rotate-6 hover:rotate-0 transition-transform duration-500">
            <div className="rounded-[2.5rem] border-8 border-gray-800 overflow-hidden shadow-xl">
              <div className="bg-gray-800 h-6 flex items-center px-4">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2" />
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2" />
                <div className="w-2 h-2 bg-green-500 rounded-full" />
              </div>
              <div className="bg-gray-900 p-4">
                <div className="font-mono text-green-400 text-sm mb-4">
                  zoyadev.net <span className="text-gray-500">• Public</span>
                </div>
                <div className="space-y-2 text-white">
                  <p className="font-mono text-sm text-gray-400">/* Digital Resume */</p>
                  <p className="text-lg">Explore my projects and skills</p>
                  <p className="text-green-400">Built with Next.js</p>
                  <p className="text-gray-400 text-sm">
                    A sleek and fast portfolio to showcase my expertise.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;