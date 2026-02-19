
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
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Zoya Hassan.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-light">
            I engineer backends that think, talk, and adapt.
          </p>

          <p className="text-lg text-gray-400 leading-relaxed">
            Backend architect meets AI whisperer — I design systems where APIs feel alive,
            conversations flow naturally, and every feature is built to scale with brains and beauty.
          </p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-4 pt-8"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
            >
              See My Work
            </motion.a>
            <motion.a
              href="mailto:zoyah015@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg border border-gray-400 text-white font-semibold hover:bg-white/5 transition-all"
            >
              Get in Touch
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
{`/* Backend AI Alchemist */
// Turning logic into lifelike conversations

const backend = {
  expertise: [
    'LLM Integration',
    'RAG Systems',
    'Conversational AI',
    'Vector Databases',
    'Production APIs'
  ],
  
  philosophy: 'Code that scales,
                Systems that think',
  
  fuel: '☕ Coffee & Curiosity'
}

// Powered by
const stack = [
  'Next.js',
  'Node.js',
  'Vercel AI SDK',
  'LangChain',
  'Vector DBs'
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
