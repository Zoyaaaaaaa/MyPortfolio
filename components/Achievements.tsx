"use client"
import { motion } from "framer-motion"
import { Award, Trophy, Star, Flame } from "lucide-react"

const achievements = [
  {
    title: "Campus Coding Champion",
    description: "Ranked #1 on the GeeksforGeeks leaderboard with 700+ problem-solving score",
    icon: Trophy,
    badge: "Ranked #1",
    category: "Competitive Programming",
  },
  {
    title: "Hackathon Winner - HACKSYNC 2 (GDG)",
    description: "Project SENTINEL, an offline AI/ML-powered multi-accessibility platform built in 24 hours",
    icon: Award,
    badge: "Winner",
    category: "AI/Accessibility",
  },
  {
    title: "Hackathon Winner - Need For Code 3.0",
    description: "Developed SteadySteps AI, an assistive platform for rehabilitation centers and people in need",
    icon: Award,
    badge: "Winner",
    category: "Social Impact",
  },
  {
    title: "Hackathon Winner - Codeissance",
    description: "Built TravelEase AI, an accessibility platform with unique features for disabled individuals",
    icon: Award,
    badge: "Winner",
    category: "Innovation",
  },
  {
    title: "Global Hackathon - Top 10",
    description: "Secured Top 10 in an international hackathon with an AI-powered financial aid app",
    icon: Trophy,
    badge: "Top 10",
    category: "Global Recognition",
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
    <section className="w-full py-24 px-4 md:px-6 lg:px-8 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6">
            <Flame className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Recognized Excellence</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">Achievements</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Recognized for innovation, competitive excellence, and impactful solutions in AI and accessibility
          </p>
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
                whileHover={{ y: -8 }}
                className="group relative glass-effect border-accent/30 rounded-xl p-6 overflow-hidden h-full"
              >
                {/* Top gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 smooth-transition" />

                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 smooth-transition" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 smooth-transition">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-accent bg-accent/20 rounded-full">
                      {achievement.badge}
                    </span>
                  </div>

                  <span className="inline-block text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                    {achievement.category}
                  </span>

                  <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full smooth-transition" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
