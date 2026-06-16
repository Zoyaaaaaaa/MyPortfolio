
"use client";
import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "AI & ML",
    color: "from-violet-500 to-purple-500",
    skills: [
      "Vertex AI",
      "LangGraph",
      "LangChain",
      "Prompt Engineering",
      "RAG Systems",
      "Fine-Tuning",
      "CrewAI",
      "HuggingFace",
    ],
  },
  {
    name: "Backend & Databases",
    color: "from-emerald-500 to-cyan-500",
    skills: [
      "NestJS",
      "FastAPI",
      "Node.js",
      "PostgreSQL",
      "Qdrant",
      "MongoDB",
      "Neo4j",
      "MySQL",
    ],
  },
  {
    name: "Frontend & Tools",
    color: "from-blue-500 to-cyan-500",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "JavaScript",
      "Git",
      "Docker",
    ],
  },
  {
    name: "Cloud & DevOps",
    color: "from-orange-500 to-red-500",
    skills: [
      "Google Cloud",
      "AWS",
      "Vercel",
      "Docker",
      "JWT/OAuth2",
      "REST APIs",
      "BM25 Search",
      "Embeddings",
    ],
  },
];

export function SkillsShowcase() {
  return (
    <section id="skills" className="w-full relative overflow-hidden py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Specialized in AI systems, backend architecture, and full-stack development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: categoryIndex * 0.15,
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              
              <div className="relative bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-800 rounded-xl p-8 hover:border-emerald-500/40 transition-all duration-300">
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                  className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                >
                  {category.name}
                </motion.h3>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4,
                        delay: categoryIndex * 0.15 + skillIndex * 0.05,
                      }}
                      className="group/skill"
                    >
                      <div className="px-4 py-2.5 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 group-hover/skill:bg-gray-700/60">
                        <p className="text-sm font-medium text-gray-300 group-hover/skill:text-emerald-300 transition-colors">
                          {skill}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
