
"use client"
import { motion } from "framer-motion"
import { AnimatedBackground } from "./AnimatedBackground"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                <span className="metric-badge">AI Systems Architect</span>
              </motion.div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter space-y-2">
                <div className="text-foreground font-light">Hello, I&apos;m</div>
                <div className="gradient-text font-bold">Zoya Hassan</div>
              </h1>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-2xl md:text-3xl text-foreground font-light leading-relaxed tracking-wide"
            >
              Crafting intelligent systems that scale with elegance.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed max-w-lg font-light"
            >
              I specialize in designing production-grade AI systems and multi-agent architectures that combine sophisticated reasoning with beautiful UX.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium tracking-wide glow-effect text-center smooth-transition"
              >
                Explore My Work
              </motion.a>
              <motion.a
                href="mailto:zoyah015@gmail.com"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 rounded-lg border border-accent/40 text-foreground font-medium tracking-wide hover:bg-accent/10 hover:border-accent/60 smooth-transition text-center"
              >
                Let&apos;s Connect
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-6 pt-4"
            >
              {[
                { label: "GitHub", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "Twitter", href: "#" },
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-accent smooth-transition text-sm"
                  whileHover={{ x: 2 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Code Display */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="glass-effect p-8 backdrop-blur-xl border-accent/30">
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <pre className="text-sm md:text-base text-muted-foreground overflow-x-auto font-mono">
                <code>
{`// AI Systems Engineer
// Production-grade systems

const aiArchitect = {
  specialization: [
    'Multi-Agent Orchestration',
    'Hybrid RAG Systems',
    'LLM Memory Management',
    'Agentic Workflows',
    'Production Infrastructure'
  ],
  
  approach: {
    reasoning: 'Structured thinking',
    action: 'Deterministic workflows',
    learning: 'Dynamic feedback loops'
  },
  
  focus: 'Scale with intelligence'
}

const stack = [
  'LangGraph', 'LangChain',
  'Vertex AI', 'Qdrant'
]`}
                </code>
              </pre>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-2xl -z-10 opacity-0 group-hover:opacity-100 smooth-transition" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <div className="w-6 h-10 border border-accent/50 rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-accent rounded-full animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
