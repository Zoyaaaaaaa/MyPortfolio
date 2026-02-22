"use client"
import { motion } from "framer-motion"
import { Users, BookOpen, Zap } from "lucide-react"

const leadershipRoles = [
  {
    organization: "TSEC CodeCell",
    title: "Senior Committee Member",
    description: "Spearheaded TSEC HACKS, a flagship offline hackathon with 400+ participants and 1.7k+ registrations. Managed technical events and workshops impacting 200+ students.",
    highlights: ["TSEC HACKS Organization", "400+ Participants", "1.7k+ Registrations", "Offline Hackathon Management"],
    color: "emerald",
    icon: Users,
  },
  {
    organization: "Dev Club",
    title: "Workshop Organizer & Culture Builder",
    description: "Organized technical workshops to improve coding culture within the community. Focused on skill development, knowledge sharing, and fostering a collaborative learning environment.",
    highlights: ["Coding Culture", "Workshop Series", "Knowledge Sharing", "Community Development"],
    color: "blue",
    icon: BookOpen,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
}

export function Leadership() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Leadership</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 rounded"></div>
        </motion.div>

        {/* Leadership Roles */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {leadershipRoles.map((role, idx) => {
            const IconComponent = role.icon
            const isEmerald = role.color === "emerald"
            const accentColor = isEmerald ? "emerald" : "blue"
            const hoverBorderColor = isEmerald ? "emerald-500/40" : "blue-500/40"
            const glowColor = isEmerald ? "emerald-500/10" : "blue-500/10"
            const textAccentColor = isEmerald ? "text-emerald-400" : "text-blue-400"

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`group relative bg-gradient-to-r from-gray-900/60 to-gray-800/40 border border-gray-800 rounded-lg p-8 hover:border-${accentColor}-500/40 hover:bg-gray-900/80 transition-all duration-300 overflow-hidden`}
              >
                {/* Background glow */}
                <div className={`absolute inset-0 bg-gradient-to-r from-${accentColor}-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-6 mb-4">
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold ${textAccentColor} mb-1`}>{role.organization}</h3>
                      <p className="text-lg text-gray-300 font-semibold mb-3">{role.title}</p>
                    </div>
                    <div className={`p-3 bg-${accentColor}-500/10 rounded-lg group-hover:bg-${accentColor}-500/20 transition-colors flex-shrink-0`}>
                      <IconComponent className={`w-6 h-6 text-${accentColor}-400`} />
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-5">
                    {role.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {role.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className="px-3 py-2 bg-gray-800/50 border border-gray-700 rounded text-sm text-gray-300 text-center hover:border-gray-600 transition-colors"
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top accent line */}
                <div className={`absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-${accentColor}-400 to-emerald-400 group-hover:w-full transition-all duration-300`}></div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
