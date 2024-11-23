'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building, Clock, Star } from 'lucide-react';

interface Experience {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    company: "Intellify",
    role: "Full Stack Developer",
    period: "Aug 2024 - Nov 2024",
    responsibilities: [
      "Generative AI & LLM Integration: Fine-tuned LLMs and created AI-driven applications to enhance EdTech platforms.",
      "Web Application Development: Enhanced UI/UX and added user-focused features for EdTech platforms."
    ]
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const WorkExperience = () => {
  return (
    <section className="w-full relative overflow-hidden mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-center mb-12"
        >
          Work Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.25, 0.1, 0.25, 1] 
              }}
              className="relative pl-8 sm:pl-32 py-4 group"
            >
              {/* Timeline decoration */}
              <motion.div 
                className="absolute left-2 sm:left-0 h-full w-px bg-gradient-to-b from-green-400 via-blue-500 to-green-400 sm:ml-[6.5rem] -translate-x-1/2"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
              
              {/* Date display */}
              <motion.div
                className="sm:absolute left-0 mb-4 sm:mb-0"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-gray-900/80 rounded-xl overflow-hidden shadow-xl w-32 backdrop-blur-sm border border-gray-800/50">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 p-2 text-center">
                    <Clock className="w-4 h-4 inline-block mr-1 mb-1" />
                    <span className="text-xs font-bold text-white">Duration</span>
                  </div>
                  <div className="p-3 text-center">
                    <div className="text-xs text-gray-300 font-medium">
                      {exp.period.split('-')[0].trim()}
                    </div>
                    <div className="text-xs text-green-400 mt-1">to</div>
                    <div className="text-xs text-gray-300 font-medium">
                      {exp.period.split('-')[1].trim()}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Company and role */}
              <motion.div 
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-green-500/30 transition-all duration-500"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div 
                  className="flex items-center mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Building className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                </motion.div>
                
                <motion.div 
                  className="flex items-center mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Star className="w-5 h-5 text-blue-500 mr-3" />
                  <p className="text-xl font-semibold text-green-400">{exp.role}</p>
                </motion.div>

                {/* Responsibilities */}
                <div className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.7 + (idx * 0.2),
                        ease: "easeOut"
                      }}
                      whileHover={{ 
                        scale: 1.01, 
                        transition: { duration: 0.2 },
                      }}
                      className="flex items-start bg-gray-900/80 rounded-xl p-4 shadow-lg border border-gray-800/50 hover:border-green-500/20 transition-all duration-300"
                    >
                      <Briefcase className="w-6 h-6 mr-3 text-green-400 flex-shrink-0 mt-1" />
                      <p className="text-lg text-gray-300 font-mono">{resp}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative gradient line */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}