"use client"
import { motion } from "framer-motion"
import { GraduationCap, Award, BookOpen } from "lucide-react"

const educationData = {
  degree: {
    title: "Bachelor of Engineering in Computer Science",
    school: "Thadomal Shahani College of Engineering, Mumbai University",
    period: "2022 – 2026",
    cgpa: "9.3/10",
    description: "Pursuing excellence in Computer Science with focus on AI, ML, and systems design. Ranked among top performers with 9.3/10 CGPA.",
  },
  certifications: [
    { title: "Prompt Engineering Guide", issuer: "Google", date: "Aug 2025", category: "AI" },
    { title: "Long-Term Agentic Memory with LangGraph", issuer: "DeepLearning.AI", date: "Dec 2025", category: "AI" },
    { title: "Semantic Caching for AI Agents", issuer: "DeepLearning.AI", date: "Nov 2025", category: "AI" },
    { title: "Building AI Voice Agents for Production", issuer: "DeepLearning.AI", date: "Aug 2025", category: "AI" },
    { title: "Safe and Reliable AI via Guardrails", issuer: "DeepLearning.AI", date: "Jul 2025", category: "AI" },
    { title: "Multi AI Agent Systems with crewAI", issuer: "DeepLearning.AI", date: "Jul 2025", category: "AI" },
    { title: "Generative AI Applications Certification", issuer: "Build Fast With AI", date: "Nov 2024", category: "AI" },
    { title: "Computer Vision & Image Processing", issuer: "OpenCV University", date: "Jun 2024", category: "ML" },
    { title: "LangChain for LLM Application Development", issuer: "DeepLearning.AI", date: "May 2024", category: "AI" },
    { title: "Full Stack Development", issuer: "Apna College", date: "Dec 2023", category: "Dev" },
  ],
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function Education() {
  return (
    <section className="w-full py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education & Certifications</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 rounded"></div>
        </motion.div>

        {/* Degree Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="group relative bg-gradient-to-br from-emerald-900/20 to-blue-900/20 border border-emerald-500/30 rounded-lg p-8 hover:border-emerald-500/60 hover:bg-emerald-900/30 transition-all duration-300 overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-emerald-400 mb-1">{educationData.degree.school}</h3>
                  <p className="text-lg text-gray-300 font-semibold mb-2">{educationData.degree.title}</p>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                    <span>{educationData.degree.period}</span>
                    <span>•</span>
                    <span className="text-emerald-300 font-semibold">CGPA: {educationData.degree.cgpa}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {educationData.degree.description}
              </p>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-500 group-hover:w-full transition-all duration-300"></div>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-gray-200 mb-8 tracking-wide flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-400" />
            Professional Certifications
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {educationData.certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-800 rounded-lg p-5 hover:border-blue-500/40 hover:bg-gray-900/80 transition-all duration-300 overflow-hidden"
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="p-2 bg-blue-500/10 rounded group-hover:bg-blue-500/20 transition-colors flex-shrink-0 mt-0.5">
                      <BookOpen className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-gray-200 font-semibold text-sm leading-snug">{cert.title}</h4>
                    </div>
                  </div>

                  <div className="ml-11">
                    <p className="text-xs text-gray-500 mb-2">{cert.issuer} • {cert.date}</p>
                    <span className="inline-flex px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded text-xs text-blue-300 font-medium">
                      {cert.category}
                    </span>
                  </div>
                </div>

                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
