"use client"
import { motion } from "framer-motion"

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
            <div className="text-green-400 font-mono mb-4">Hello, I’m</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Zoya Hassan.</h1>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-300 mb-6">
              I engineer backends that think, talk, and adapt.
            </h2>
            <p className="text-gray-300 text-lg font-mono max-w-2xl">
              Backend architect meets AI whisperer — I design systems where APIs feel alive,
              conversations flow naturally, and every feature is built to scale with brains and beauty.
            </p>
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
              See My Work
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
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
                  <p className="font-mono text-sm text-gray-400">/* Backend AI Alchemist */</p>
                  <p className="text-lg">Turning logic into lifelike conversations</p>
                  <p className="text-green-400">Powered by Next.js</p>
                  <p className="text-gray-400 text-sm">Fast, minimal, and unapologetically intelligent.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection
