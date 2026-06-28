"use client"

import { motion } from "framer-motion"
import { Code2, Zap, Target, Users } from "lucide-react"

interface StatItem {
  icon: React.ReactNode
  label: string
  value: string
  description: string
}

export function About() {
  const stats: StatItem[] = [
    {
      icon: <Code2 className="w-6 h-6" />,
      label: "Projects Built",
      value: "50+",
      description: "End-to-end solutions",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      label: "Years Experience",
      value: "3+",
      description: "AI & Backend systems",
    },
    {
      icon: <Target className="w-6 h-6" />,
      label: "Success Rate",
      value: "100%",
      description: "Project delivery",
    },
    {
      icon: <Users className="w-6 h-6" />,
      label: "Collaborations",
      value: "20+",
      description: "Cross-functional teams",
    },
  ]

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
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 py-24 overflow-hidden">
      <div className="absolute inset-0 aurora-gradient opacity-30 blur-3xl -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4"
          >
            <span className="metric-badge">About Me</span>
            <h2 className="text-5xl md:text-6xl font-bold gradient-text">
              Architect of Intelligent Systems
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforming complex problems into elegant, production-ready AI solutions that scale.
            </p>
          </motion.div>

          {/* Story Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m passionate about building systems that don&apos;t just work—they think. Starting from backend fundamentals, I evolved into specializing in production-grade AI systems where every decision matters.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My philosophy: complexity is the enemy of reliability. I design systems that are explainable, maintainable, and performant at scale.
              </p>
              <div className="space-y-3">
                <p className="text-sm text-accent font-semibold">Currently focusing on:</p>
                <ul className="space-y-2">
                  {[
                    "Multi-agent orchestration frameworks",
                    "Hybrid RAG systems with memory management",
                    "Production LLM infrastructure",
                    "Scalable knowledge bases",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="glass-effect p-6 border-accent/30 rounded-lg hover:border-accent/50 hover:bg-card/50 smooth-transition"
                >
                  <div className="flex flex-col space-y-3">
                    <div className="text-primary">{stat.icon}</div>
                    <div className="space-y-1">
                      <div className="text-3xl font-bold gradient-text">
                        {stat.value}
                      </div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-xs text-muted-foreground/60">{stat.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack Highlights */}
          <motion.div
            variants={itemVariants}
            className="glass-effect p-8 border-primary/30 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Core Expertise
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "LangGraph",
                "LangChain",
                "Vector DBs",
                "FastAPI",
                "Python",
                "TypeScript",
                "React",
                "Next.js",
                "PostgreSQL",
                "Redis",
                "Docker",
                "AWS",
              ].map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 text-center text-sm text-muted-foreground hover:text-primary smooth-transition"
                >
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
