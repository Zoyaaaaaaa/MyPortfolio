'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building, Clock, Star, Code, Database, Bot } from 'lucide-react';

interface Experience {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    company: "Cantilever Labs",
    role: "Backend Developer",
    period: "June 2025 – Present",
    responsibilities: [
      "Developing AI-powered EdTech platform integrating multiple LLMs for student progress tracking and personalized learning experiences",
      "Implementing QdrantDB vector database for storing and retrieving multimodal educational content including text, images",
      "Building scalable backend APIs supporting real-time student analytics and AI-driven assessment systems"
    ]
  },
  {
    company: "AmberFlux",
    role: "Backend Developer – LLM Integration Specialist",
    period: "December 2024 – June 2025",
    responsibilities: [
      "Implemented hybrid search in RAG systems, enhancing search accuracy and reducing retrieval latency by 15%",
      "Developed 21+ scalable REST APIs, improving system throughput by 25%",
      "Built multimodal conversational agents and virtual bots for voice, text, and visual inputs in applications",
      "Created embedding SDK for vector databases, optimizing AI model integrations across platforms",
      "Built multi-agent workflows with LangGraph to streamline and automate the SDLC process"
    ]
  },
  {
    company: "BuildFastWithAI",
    role: "Full Stack Developer – AI/EdTech Focus",
    period: "August 2024 – November 2024",
    responsibilities: [
      "Built 7+ AI-powered applications using Vercel AI SDK and Hugging Face APIs, boosting user engagement by 20%",
      "Revamped EdTech platform UI/UX and integrated backend systems with LLM-powered features",
      "Engineered multimodal chatbots with generative AI, driving a 15% increase in website traffic"
    ]
  }
];

const getIcon = (index: number) => {
  const icons = [Bot, Database, Code];
  const IconComponent = icons[index % icons.length];
  return <IconComponent className="w-5 h-5" />;
};

export const WorkExperience = () => {
  return (
    <section className="w-full relative overflow-hidden py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(34,197,94,0.1),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500 mb-4">
            Work Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building innovative AI-powered solutions and scalable backend systems
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-blue-500 to-purple-500 opacity-30" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  ease: [0.25, 0.1, 0.25, 1] 
                }}
                className="relative pl-16 sm:pl-24"
              >
                {/* Timeline node */}
                <motion.div 
                  className="absolute left-2 sm:left-6 w-4 h-4 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                />

                {/* Experience card */}
                <motion.div 
                  className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-gray-800/50 hover:border-emerald-500/30 transition-all duration-500 group"
                  whileHover={{ scale: 1.01, y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Company header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                    <motion.div 
                      className="flex items-center mb-3 sm:mb-0"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="p-2 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-lg mr-4">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">{exp.company}</h3>
                        <div className="flex items-center text-emerald-400">
                          <Star className="w-4 h-4 mr-2" />
                          <span className="text-lg font-semibold">{exp.role}</span>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      className="flex items-center text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </motion.div>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-300 mb-4">Key Responsibilities & Achievements:</h4>
                    {exp.responsibilities.map((resp, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.4 + (idx * 0.1),
                          ease: "easeOut"
                        }}
                        className="flex items-start group/item hover:bg-gray-800/30 rounded-xl p-3 transition-all duration-300"
                      >
                        <div className="p-1.5 bg-gradient-to-r from-emerald-400/20 to-blue-500/20 rounded-lg mr-4 mt-0.5">
                          {getIcon(idx)}
                        </div>
                        <p className="text-gray-300 leading-relaxed flex-1">{resp}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom accent */}
                  <motion.div 
                    className="mt-6 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-400/10 to-blue-500/10 rounded-full border border-emerald-500/20">
            <Briefcase className="w-5 h-5 text-emerald-400 mr-2" />
            <span className="text-gray-300 font-medium">Continuously building innovative solutions</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}