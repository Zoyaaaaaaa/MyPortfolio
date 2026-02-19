"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, Building, Clock, Star, Code, Database, Bot, Zap, Users, TrendingUp, ChevronDown } from "lucide-react"

interface CaseStudy {
  title: string
  challenge: string
  solution: string
  impact: string
}

interface Experience {
  id: number
  company: string
  role: string
  period: string
  responsibilities: string[]
  achievements: string[]
  technologies: string[]
  companyIcon: string
  caseStudies: CaseStudy[]
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
    caseStudies: [
      {
        title: "Multimodal Content Retrieval System",
        challenge: "EdTech platform needed to retrieve relevant learning content (text, images, videos) based on student queries with 95%+ accuracy",
        solution: "Architected hybrid retrieval pipeline using QdrantDB with dual embedding models: semantic embeddings for text understanding + visual embeddings for images. Implemented re-ranking mechanism to surface most pedagogically relevant content.",
        impact: "Improved content discovery accuracy from 72% to 94%, reducing student search time by 65% and increasing content engagement by 41%"
      },
      {
        title: "Real-time Adaptive Assessment Engine",
        challenge: "Traditional assessments don't adapt to student learning pace. System needed to adjust difficulty dynamically while tracking mastery",
        solution: "Built state machine-based assessment engine that analyzes response patterns in real-time. Each student gets unique question sequences based on performance thresholds and learning velocity metrics.",
        impact: "Students completing adaptive assessments showed 38% faster mastery compared to static quizzes. Platform identified learning gaps 48 hours earlier than traditional methods."
      }
    ]
  },
  {
    id: 2,
    company: "AmberFlux",
    role: "Backend Developer – Conversational AI Specialist",
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
    caseStudies: [
      {
        title: "Hybrid RAG System for Enterprise Knowledge",
        challenge: "Enterprise customers' RAG systems had 28% false positive retrieval rate. Traditional embeddings alone couldn't capture domain-specific semantics and failed on technical terminology",
        solution: "Implemented 3-stage retrieval: fast BM25 for term matching → dense embeddings for semantic understanding → LLM-based re-ranking with domain context. Added query expansion to handle synonyms and technical jargon.",
        impact: "Reduced false positives from 28% to 9%. Retrieval accuracy improved 15%. Customer support tickets from RAG failures dropped 68%. Latency stayed at <150ms for 95th percentile."
      },
      {
        title: "Multi-Agent Workflow Automation",
        challenge: "Software teams wasted 6+ hours daily on code review, PR analysis, and documentation. Manual processes bottlenecked releases.",
        solution: "Built LangGraph-based agent swarm: CodeAnalyzer agent (detects issues), DocWriter agent (generates docs), TestPlanner agent (outlines test cases), ReviewCoordinator (synthesizes decisions). Agents communicate through a shared context graph.",
        impact: "Reduced code review time by 58%. Automated doc generation saved 240+ hours/year per team. Release cycle accelerated from 3.2 days to 1.1 days. Code coverage increased from 62% to 81%."
      },
      {
        title: "Conversational Voice+Text Multimodal Agent",
        challenge: "Enterprises need customer service that understands both voice and text, switching context seamlessly while maintaining conversation history",
        solution: "Built multimodal agent that processes voice (with speaker identification) and text simultaneously. Used turn-taking logic to manage interruptions. Maintained unified conversation graph for both modalities.",
        impact: "Handled 15K+ daily conversations across voice and text. 89% customer satisfaction (up from 71%). System reduced avg resolution time from 8min to 3.2min. Seamlessly switched modalities without losing context."
      }
    ]
  },
  {
    id: 3,
    company: "BuildFastWithAI",
    role: "Full Stack Developer – Generative AI",
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
    caseStudies: [
      {
        title: "AI-Powered Tutorial Assistant",
        challenge: "EdTech platform had 34% user drop-off during complex tutorials. Students needed personalized explanations that adapted to their level",
        solution: "Built conversational AI tutor using Vercel AI SDK with streaming responses. System analyzes student questions in real-time, determines knowledge gaps, and generates explanations at appropriate depth. Includes diagram generation and code walkthroughs.",
        impact: "Drop-off rate fell to 12%. Students reported 3.2x better concept retention. Average tutorial completion time increased from 18min to 22min (students staying engaged longer). Generated 50K+ personalized explanations in first 3 months."
      },
      {
        title: "Intelligent Document Q&A System",
        challenge: "Students struggled finding specific information in lengthy study materials. Search was basic keyword-matching with poor semantic understanding",
        solution: "Implemented RAG system using Hugging Face embeddings. Students ask questions in natural language; system retrieves relevant document sections and generates concise answers with source citations. Supports PDFs, textbooks, and lecture notes.",
        impact: "Users could now find answers in 30 seconds vs 5+ minutes manual searching. 43% increase in study material engagement. Students rated Q&A feature 4.7/5 stars. System handled 200K+ queries in beta period."
      },
      {
        title: "Personalized Learning Path Generator",
        challenge: "One-size-fits-all curriculum didn't account for student learning styles, pace, or background knowledge. Resulted in frustration and disengagement",
        solution: "Built LLM-based system that analyzes student performance data, learning patterns, and preferences. Generates personalized curriculum paths with adaptive pacing, content variety (videos, articles, practice), and intelligent sequencing.",
        impact: "Personalized learners completed courses 2.3x faster while achieving 19% higher scores. Engagement metrics (time spent, interactions, retention) all improved 30-40%. Platform traffic grew 15% as word spread about personalization."
      }
    ]
  },
];


const getIcon = (index: number) => {
  const icons = [Bot, Database, Code, Zap, Users, TrendingUp]
  const IconComponent = icons[index % icons.length]
  return <IconComponent className="w-4 h-4" />
}

export const WorkExperience = () => {
  const [activeTab, setActiveTab] = useState(1)
  const [expandedCaseStudy, setExpandedCaseStudy] = useState<number | null>(null)
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

                {/* Case Studies */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-300 mb-6 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-emerald-400" />
                    Case Studies & Impact
                  </h4>
                  <div className="space-y-3">
                    {activeExperience.caseStudies.map((caseStudy, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-800/70 rounded-xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300"
                      >
                        <button
                          onClick={() => setExpandedCaseStudy(expandedCaseStudy === idx ? null : idx)}
                          className="w-full p-4 text-left flex items-between justify-between gap-4 hover:bg-gray-800/30 transition-colors"
                        >
                          <div className="flex-1">
                            <h5 className="text-emerald-400 font-semibold text-lg">{caseStudy.title}</h5>
                            <p className="text-gray-400 text-sm mt-2 line-clamp-2">{caseStudy.challenge}</p>
                          </div>
                          <motion.div
                            animate={{ rotate: expandedCaseStudy === idx ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {expandedCaseStudy === idx && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="border-t border-gray-800 px-4 py-4 space-y-3 bg-black/30"
                            >
                              <div>
                                <p className="text-gray-400 text-sm font-semibold uppercase tracking-wide mb-1">Challenge</p>
                                <p className="text-gray-300 text-sm">{caseStudy.challenge}</p>
                              </div>
                              <div>
                                <p className="text-gray-400 text-sm font-semibold uppercase tracking-wide mb-1">Solution</p>
                                <p className="text-gray-300 text-sm">{caseStudy.solution}</p>
                              </div>
                              <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-lg p-3">
                                <p className="text-emerald-400 text-sm font-semibold uppercase tracking-wide mb-1">Impact</p>
                                <p className="text-emerald-200 text-sm font-medium">{caseStudy.impact}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
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
