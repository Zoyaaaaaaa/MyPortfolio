"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, Building, Clock, Star, Code, Database, Bot, Zap, Users, TrendingUp } from "lucide-react"

interface Experience {
  id: number
  company: string
  role: string
  period: string
  responsibilities: string[]
  achievements: string[]
  technologies: string[]
  companyIcon: string
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "Cantilever Labs",
    role: "Backend Developer – AI/LLM Integration",
    period: "June 2025 – Present",
    companyIcon: "🚀",
    technologies: ["AI/ML", "QdrantDB", "LLMs", "EdTech", "Conversational AI"],
    achievements: [
      "Launched AI-powered EdTech platform",
      "Delivered personalized multimodal content retrieval",
      "Enabled real-time analytics and adaptive assessments"
    ],
    responsibilities: [
      "Developing AI-powered EdTech platform integrating multiple LLMs for personalized learning experiences and student progress tracking",
      "Implementing QdrantDB vector database for storing and retrieving multimodal content including text, images, and audio",
      "Building scalable backend APIs enabling real-time student analytics, adaptive quizzes, and AI-driven assessments",
      "Integrating conversational AI modules to provide interactive tutoring and query resolution for learners"
    ],
  },
  {
    id: 2,
    company: "AmberFlux",
    role: "Backend Developer – Conversational AI & LLM Integration Specialist",
    period: "December 2024 – June 2025",
    companyIcon: "⚡",
    technologies: ["RAG Systems", "LangGraph", "LangChain", "Vector DB", "REST APIs", "Conversational AI"],
    achievements: [
      "Enhanced RAG search accuracy by 15%",
      "Increased API throughput by 25%",
      "Developed 21+ production-grade APIs"
    ],
    responsibilities: [
      "Implemented hybrid search pipelines (TF-IDF, BM25, embeddings) in RAG systems, improving retrieval precision and reducing latency by 15%",
      "Developed 21+ scalable, secure REST APIs with JWT/OAuth2 RBAC, improving system throughput by 25%",
      "Built multimodal conversational AI agents capable of processing voice, text, and visual queries for enterprise workflows",
      "Created embedding SDK for vector DBs, streamlining AI model integrations across multiple platforms",
      "Engineered multi-agent workflows using LangGraph to automate and optimize the software development lifecycle"
    ],
  },
  {
    id: 3,
    company: "BuildFastWithAI",
    role: "Full Stack Developer – Generative AI & EdTech",
    period: "August 2024 – November 2024",
    companyIcon: "🤖",
    technologies: ["Vercel AI SDK", "Hugging Face", "Generative AI", "Conversational AI", "EdTech"],
    achievements: [
      "Shipped 7+ production AI applications",
      "Boosted user engagement by 20%",
      "Increased platform traffic by 15%"
    ],
    responsibilities: [
      "Developed 7+ AI-powered web applications leveraging Vercel AI SDK, Hugging Face APIs, and LLM integrations",
      "Designed multimodal conversational AI chatbots for EdTech platforms, enhancing interactivity and user retention",
      "Revamped UI/UX and integrated real-time backend analytics, driving a 20% boost in user engagement",
      "Implemented LLM-powered features including intelligent Q&A, document summarization, and personalized content generation"
    ],
  },
];


const getIcon = (index: number) => {
  const icons = [Bot, Database, Code, Zap, Users, TrendingUp]
  const IconComponent = icons[index % icons.length]
  return <IconComponent className="w-4 h-4" />
}

export const WorkExperience = () => {
  const [activeTab, setActiveTab] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (activeTab) {
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [activeTab])

  const activeExperience = experiences.find((exp) => exp.id === activeTab) || experiences[0]

  return (
    <section className="w-full relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.15),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.12),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(59,130,246,0.1),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-emerald-400 to-cyan-400 mb-4">
            Work Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building innovative AI-powered solutions across cutting-edge companies
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 rounded-2xl overflow-hidden">
          {/* Sidebar navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-80 flex lg:flex-col gap-2 rounded-2xl bg-black/20 backdrop-blur-xl border border-white/10 p-2"
          >
            {experiences.map((exp, index) => (
              <motion.button
                key={exp.id}
                onClick={() => setActiveTab(exp.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
                  relative group flex items-center w-full p-4 rounded-xl transition-all duration-300
                  ${
                    activeTab === exp.id ? "text-white shadow-lg" : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                  }
                `}
              >
                {activeTab === exp.id && (
                  <motion.div
                    layoutId="tabBackground"
                    className="absolute inset-0 bg-gradient-to-r from-violet-600/80 via-emerald-500/60 to-cyan-500/80 rounded-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                {/* Tab content */}
                <div className="flex items-center gap-4 z-10 w-full">
                  <div className="text-2xl">{exp.companyIcon}</div>
                  <div className="flex-1 text-left">
                    <div className="font-bold text-lg">{exp.company}</div>
                    <div className="text-sm opacity-80">{exp.role}</div>
                    <div className="text-xs opacity-60 mt-1">{exp.period}</div>
                  </div>
                </div>

                {/* Active indicator */}
                {activeTab === exp.id ? (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute right-3 w-3 h-3 rounded-full bg-white/90"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                  />
                ) : (
                  <div className="absolute right-3 w-3 h-3 rounded-full bg-white/0 group-hover:bg-white/20 transition-colors" />
                )}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative rounded-2xl bg-gray-900/40 backdrop-blur-xl border border-white/10 overflow-hidden"
          >
            {/* Loading overlay */}
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  key="loader"
                  className="absolute inset-0 z-20 flex items-center justify-center bg-gray-900/60 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-8 h-8 border-2 border-violet-400 border-t-transparent rounded-full animate-spin" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="p-8 h-full overflow-y-auto"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-gradient-to-r from-violet-500 to-emerald-500 rounded-xl">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                      <span>{activeExperience.companyIcon}</span>
                      {activeExperience.company}
                    </h3>
                    <div className="flex items-center text-emerald-400 mt-1">
                      <Star className="w-5 h-5 mr-2" />
                      <span className="text-xl font-semibold">{activeExperience.role}</span>
                    </div>
                    <div className="flex items-center text-gray-400 mt-2">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{activeExperience.period}</span>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-300 mb-4">Technologies & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeExperience.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="px-3 py-1 bg-gradient-to-r from-violet-500/20 to-emerald-500/20 border border-violet-500/30 rounded-full text-sm text-violet-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-300 mb-4">Key Achievements</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {activeExperience.achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="p-4 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-xl"
                      >
                        <div className="flex items-center mb-2">
                          <TrendingUp className="w-4 h-4 text-emerald-400 mr-2" />
                          <span className="text-emerald-400 font-medium text-sm">{achievement}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-300 mb-6">Responsibilities & Impact</h4>
                  <div className="space-y-4">
                    {activeExperience.responsibilities.map((resp, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        className="flex items-start group hover:bg-white/5 rounded-xl p-4 transition-all duration-300"
                      >
                        <div className="p-2 bg-gradient-to-r from-violet-500/20 to-emerald-500/20 rounded-lg mr-4 mt-1">
                          {getIcon(idx)}
                        </div>
                        <p className="text-gray-300 leading-relaxed flex-1">{resp}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-500/10 via-emerald-500/10 to-cyan-500/10 rounded-full border border-violet-500/20 backdrop-blur-xl">
            <Briefcase className="w-6 h-6 text-violet-400 mr-3" />
            <span className="text-gray-300 font-medium text-lg">
              Continuously innovating with cutting-edge technologies
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
