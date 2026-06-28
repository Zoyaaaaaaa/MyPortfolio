"use client"

import { motion } from "framer-motion"

interface TechCategory {
  title: string
  technologies: string[]
  color: string
}

export function TechStack() {
  const categories: TechCategory[] = [
    {
      title: "AI & ML",
      technologies: ["LangGraph", "LangChain", "Vertex AI", "Claude", "LLaMA", "Vector DBs"],
      color: "from-primary",
    },
    {
      title: "Backend",
      technologies: ["Python", "FastAPI", "NestJS", "PostgreSQL", "Redis", "Docker"],
      color: "from-secondary",
    },
    {
      title: "Frontend",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      color: "from-accent",
    },
    {
      title: "Infrastructure",
      technologies: ["AWS", "Docker", "Kubernetes", "GitHub", "Vercel", "CI/CD"],
      color: "from-primary",
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
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 py-24 overflow-hidden">
      <div className="absolute inset-0 aurora-gradient opacity-20 blur-3xl -z-10" />

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
            <span className="metric-badge">Tech Stack</span>
            <h2 className="text-5xl md:text-6xl font-bold gradient-text">
              Tools That Power Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A carefully curated selection of technologies for building scalable, maintainable systems.
            </p>
          </motion.div>

          {/* Tech Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass-effect p-8 border-primary/30 rounded-xl hover:border-primary/50 smooth-transition"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} to-accent bg-clip-text text-transparent mb-2`}>
                      {category.title}
                    </h3>
                    <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: techIndex * 0.05,
                        }}
                        className="px-4 py-3 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 text-center"
                      >
                        <p className="text-sm font-medium text-muted-foreground hover:text-primary smooth-transition">
                          {tech}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Featured Architecture */}
          <motion.div
            variants={itemVariants}
            className="glass-effect p-8 border-accent/30 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              System Architecture Patterns
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Microservices",
                  description: "Scalable, independent service architecture",
                },
                {
                  title: "Event-Driven",
                  description: "Asynchronous, loosely coupled systems",
                },
                {
                  title: "Serverless",
                  description: "AWS Lambda & Function-as-a-Service",
                },
                {
                  title: "Multi-Agent RAG",
                  description: "Orchestrated AI agents with retrieval",
                },
                {
                  title: "Real-time Streaming",
                  description: "WebSocket & SSE for live updates",
                },
                {
                  title: "Hybrid Deployment",
                  description: "On-premise & cloud integration",
                },
              ].map((pattern) => (
                <div
                  key={pattern.title}
                  className="p-4 rounded-lg bg-card/30 border border-border/50 hover:border-accent/50 smooth-transition"
                >
                  <p className="font-semibold text-foreground mb-1">{pattern.title}</p>
                  <p className="text-sm text-muted-foreground">{pattern.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack
