"use client"
import { motion } from "framer-motion"
import { Users, BookOpen, Zap, Code2 } from "lucide-react"

const leadershipRoles = [
  {
    organization: "TSEC CodeCell",
    title: "Senior Committee Member (Jun 2022 – May 2025)",
    description: "Led TSEC HACKS 2026, a flagship 24-hour hackathon with 400+ participants and 1.7k+ registrations, overseeing end-to-end technical execution and infrastructure. Designed high-quality, industry-aligned problem statements ensuring competitive difficulty and real-world relevance.",
    highlights: ["TSEC HACKS 2026", "400+ Participants", "1.7k+ Registrations", "Tech Execution Lead"],
    color: "emerald",
    icon: Users,
  },
  {
    organization: "Devs Club",
    title: "Operations Member (May 2024 – May 2025)",
    description: "Organized and conducted coding workshops mentoring 200+ students. Developed and integrated the dynamic timetable module for the official TSEC Apps, improving usability and accessibility across campus.",
    highlights: ["200+ Students Mentored", "Coding Workshops", "Timetable Module", "Technical Culture"],
    color: "blue",
    icon: BookOpen,
  },
  {
    organization: "GDG & TSEC CodeCell",
    title: "Mentor (2025)",
    description: "Guided teams on frontend architecture and UI/UX best practices. Provided 10+ hours of real-time mentorship and debugging support during TSEC HACKS 2026, assisting 400+ participants in brainstorming and resolving technical blockers.",
    highlights: ["Frontend Architecture", "UI/UX Mentoring", "10+ Hours Support", "400+ Participants Guided"],
    color: "cyan",
    icon: Zap,
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
            const colorMap = {
              emerald: { accent: "emerald", border: "emerald-500/40", glow: "emerald-500/10", text: "text-emerald-400", bg: "bg-emerald-500/10", hoverBg: "bg-emerald-500/20" },
              blue: { accent: "blue", border: "blue-500/40", glow: "blue-500/10", text: "text-blue-400", bg: "bg-blue-500/10", hoverBg: "bg-blue-500/20" },
              cyan: { accent: "cyan", border: "cyan-500/40", glow: "cyan-500/10", text: "text-cyan-400", bg: "bg-cyan-500/10", hoverBg: "bg-cyan-500/20" },
            }
            const colors = colorMap[role.color as keyof typeof colorMap] || colorMap.emerald

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative bg-gradient-to-r from-gray-900/60 to-gray-800/40 border border-gray-800 rounded-lg p-8 hover:bg-gray-900/80 transition-all duration-300 overflow-hidden"
                style={{
                  borderColor: `rgb(${role.color === 'emerald' ? '52, 211, 153' : role.color === 'blue' ? '59, 130, 246' : '34, 211, 238'}, 0.4)`,
                }}
              >
                {/* Background glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                  background: `linear-gradient(to right, ${role.color === 'emerald' ? 'rgba(52,211,153,0.05)' : role.color === 'blue' ? 'rgba(59,130,246,0.05)' : 'rgba(34,211,238,0.05)'}, rgba(52,211,153,0.05))`
                }}></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-6 mb-4">
                    <div className="flex-1">
                      <h3 style={{ color: role.color === 'emerald' ? '#4ade80' : role.color === 'blue' ? '#60a5fa' : '#22d3ee' }} className="text-2xl font-bold mb-1">{role.organization}</h3>
                      <p className="text-lg text-gray-300 font-semibold mb-3">{role.title}</p>
                    </div>
                    <div style={{
                      backgroundColor: `rgba(${role.color === 'emerald' ? '52, 211, 153' : role.color === 'blue' ? '59, 130, 246' : '34, 211, 238'}, 0.1)`
                    }} className="p-3 rounded-lg group-hover:opacity-80 transition-opacity flex-shrink-0">
                      <IconComponent style={{ color: role.color === 'emerald' ? '#4ade80' : role.color === 'blue' ? '#60a5fa' : '#22d3ee' }} className="w-6 h-6" />
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
                <div className="absolute top-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-300" style={{
                  background: `linear-gradient(to right, ${role.color === 'emerald' ? '#4ade80' : role.color === 'blue' ? '#60a5fa' : '#22d3ee'}, #4ade80)`
                }}></div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
