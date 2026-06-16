
"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "AI & ML",
    skills: [
      { id: 1, name: "Vertex AI", image: "/images/vertexai.png" },
      { id: 2, name: "LangGraph", image: "/images/langgraph.png" },
      { id: 3, name: "LangChain", image: "/images/langchain.png" },
      { id: 4, name: "Prompt Engineering", image: "/images/prompteng.png" },
      { id: 5, name: "RAG Systems", image: "/images/rag.png" },
      { id: 6, name: "Fine-Tuning", image: "/images/fintuning.png" },
      { id: 7, name: "CrewAI", image: "/images/crewai.png" },
      { id: 8, name: "HuggingFace", image: "/images/huggingface.png" },
    ],
  },
  {
    name: "Backend & Databases",
    skills: [
      { id: 9, name: "NestJS", image: "/images/nestjs.png" },
      { id: 10, name: "FastAPI", image: "/images/fastapi.png" },
      { id: 11, name: "Node.js", image: "/images/nodejs.jpg" },
      { id: 12, name: "PostgreSQL", image: "/images/postgres.png" },
      { id: 13, name: "Qdrant", image: "/images/qdrant.png" },
      { id: 14, name: "MongoDB", image: "/images/mongo.png" },
      { id: 15, name: "Neo4j", image: "/images/neo4j.png" },
      { id: 16, name: "MySQL", image: "/images/sql.png" },
    ],
  },
  {
    name: "Frontend & Tools",
    skills: [
      { id: 17, name: "Next.js", image: "/images/nextjs.png" },
      { id: 18, name: "React", image: "/images/react.jpg" },
      { id: 19, name: "TypeScript", image: "/images/typescript.png" },
      { id: 20, name: "Tailwind CSS", image: "/images/tailwind.png" },
      { id: 21, name: "Python", image: "/images/python.png" },
      { id: 22, name: "JavaScript", image: "/images/javascript.png" },
      { id: 23, name: "Git", image: "/images/git.png" },
      { id: 24, name: "Docker", image: "/images/docker.png" },
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      { id: 25, name: "Google Cloud", image: "/images/gcp.png" },
      { id: 26, name: "AWS", image: "/images/aws.png" },
      { id: 27, name: "Vercel", image: "/images/vercel.png" },
      { id: 28, name: "Docker", image: "/images/docker.png" },
      { id: 29, name: "JWT/OAuth2", image: "/images/jwt.png" },
      { id: 30, name: "REST APIs", image: "/images/restapi.jpg" },
      { id: 31, name: "BM25 Search", image: "/images/search.png" },
      { id: 32, name: "Embeddings", image: "/images/embeddings.png" },
    ],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export function SkillsShowcase() {
  return (
    <section className="w-full relative overflow-hidden mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <motion.h2
          {...fadeInUp}
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-center mb-12"
        >
          My Skills
        </motion.h2>
          
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: categoryIndex * 0.2,
                ease: "easeOut"
              }}
              className="relative group"
            >
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.3 }}
                className="text-2xl font-semibold mb-6 text-center"
              >
                <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
                  {category.name}
                </span>
              </motion.h3>
              
              {/* Category background glow effect */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-green-500/20 blur-3xl" />
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: categoryIndex * 0.4,
                  ease: "easeOut"
                }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-green-500/30 transition-all duration-300"
              >
                <div className="flex flex-wrap justify-center gap-8">
                  <AnimatedTooltip
                    items={category.skills.map((skill) => ({
                      id: skill.id,
                      name: skill.name,
                      designation: category.name,
                      image: skill.image,
                    }))}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
