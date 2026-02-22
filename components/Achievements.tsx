"use client"
import { motion } from "framer-motion"
import { Award, Trophy } from "lucide-react"

const achievements = [
  {
    title: "Campus Coding Champion",
    description: "Ranked #1 on the GeeksforGeeks leaderboard with 700+ problem-solving score",
    icon: Trophy,
  },
  {
    title: "Hackathon Winner - HACKSYNC 2 (GDG)",
    description: "Project SENTINEL, an offline AI/ML-powered multi-accessibility platform built in 24 hours",
    icon: Award,
  },
  {
    title: "Hackathon Winner - Need For Code 3.0",
    description: "Developed SteadySteps AI, an assistive platform for rehabilitation centers and people in need",
    icon: Award,
  },
  {
    title: "Hackathon Winner - Codeissance",
    description: "Built TravelEase AI, an accessibility platform with unique features for disabled individuals",
    icon: Award,
  },
  {
    title: "Global Hackathon - Top 10",
    description: "Secured Top 10 in an international hackathon with an AI-powered financial aid app",
    icon: Trophy,
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
    transition: { duration: 0.5 },
  },
}

export function Achievements() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Achievements</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 rounded"></div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, idx) => {
            const IconComponent = achievement.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-800 rounded-lg p-6 hover:border-emerald-500/40 hover:bg-gray-900/80 transition-all duration-300 overflow-hidden"
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-emerald-400" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-100 mb-2 leading-snug">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-500 group-hover:w-full transition-all duration-300"></div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
