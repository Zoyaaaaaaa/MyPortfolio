
"use client"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 mb-4">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-emerald-300">AI Systems Architect</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Zoya Hassan
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-light">
            Designing intelligent systems that reason, act, and learn.
          </p>

          <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
            I build production-grade AI systems and enterprise-scale knowledge infrastructure. Specializing in hybrid RAG systems, multi-agent orchestration, and LLM memory management that power real-world intelligence.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-1"
            >
              <p className="text-3xl font-bold text-emerald-400">9.3/10</p>
              <p className="text-sm text-gray-400">CGPA</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-1"
            >
              <p className="text-3xl font-bold text-cyan-400">5+</p>
              <p className="text-sm text-gray-400">Projects Shipped</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-1"
            >
              <p className="text-3xl font-bold text-blue-400">3x</p>
              <p className="text-sm text-gray-400">Hackathon Winner</p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-4 pt-8"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
            >
              View My Work
            </motion.a>
            <motion.a
              href="mailto:zoyah015@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg border border-emerald-500/30 text-white font-semibold hover:bg-emerald-500/10 transition-all"
            >
              Let&apos;s Connect
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side - Code Display */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative bg-black/40 border border-emerald-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <div className="absolute top-4 right-4 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            <pre className="text-sm md:text-base text-gray-300 overflow-x-auto">
              <code>
{`// Production AI Systems Engineer
// Cantilever Labs × AmberFlux

const zoyaHassan = {
  current: 'AI Engineer @ Cantilever Labs',
  expertise: [
    'Vertex AI & Gemini',
    'LangGraph & LangChain',
    'Hybrid RAG Systems',
    'Multi-Agent Orchestration',
    'NestJS Backend Architecture'
  ],
  
  impact: {
    interviewAnalysis: 'Reduced latency 40s → 15-20s',
    resumeGeneration: 'Improved ATS alignment +40%',
    hybridRAG: 'Cut search time 9s → 2-3s',
    documentation: 'Saved 40+ hours/week'
  },
  
  research: 'Paper accepted @ InterSYS 2026',
  hackathons: '3x Winner',
  gfg_ranking: '#1 Campus Coding Champion'
}

const stack = [
  'Vertex AI', 'LangGraph', 'Qdrant',
  'PostgreSQL', 'NestJS', 'Next.js'
]`}
              </code>
            </pre>
          </div>

          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl blur-xl -z-10"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
