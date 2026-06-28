"use client"
import { motion } from "framer-motion"
import { Users, BookOpen, Zap, Star } from "lucide-react"

const leadershipRoles = [
  {
    organization: "TSEC CodeCell",
    title: "Senior Committee Member",
    description: "Spearheaded TSEC HACKS, a flagship offline hackathon with 400+ participants and 1.7k+ registrations. Managed technical events and workshops impacting 200+ students.",
    highlights: ["TSEC HACKS Organization", "400+ Participants", "1.7k+ Registrations", "Offline Hackathon Management"],
    accentColor: "from-primary to-secondary",
    accentText: "text-primary",
    icon: Users,
    impact: "Led 400+ developers in largest campus hackathon",
  },
  {
    organization: "Dev Club",
    title: "Workshop Organizer & Culture Builder",
    description: "Organized technical workshops to improve coding culture within the community. Focused on skill development, knowledge sharing, and fostering a collaborative learning environment.",
    highlights: ["Coding Culture", "Workshop Series", "Knowledge Sharing", "Community Development"],
    accentColor: "from-secondary to-accent",
    accentText: "text-secondary",
    icon: BookOpen,
    impact: "Empowered 200+ students through technical mentorship",
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
    <section className="w-full py-24 px-4 md:px-6 lg:px-8 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-40 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/15 border border-primary/40 mb-8">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Leadership Impact</span>
          </div>
          <h2 className="section-header mb-6">Leadership & Community</h2>
          <p className="section-subheader">
            Driving innovation and building thriving tech communities through strategic leadership and mentorship
          </p>
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

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 6 }}
                className="premium-card group rounded-2xl p-8 overflow-hidden"
              >
                {/* Left gradient accent */}
                <div className={`absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b ${role.accentColor} opacity-0 group-hover:opacity-100 smooth-transition`} />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-6 mb-6">
                    <div className="flex-1">
                      <h3 className={`text-3xl font-bold ${role.accentText} mb-3`}>{role.organization}</h3>
                      <p className="text-lg text-foreground font-semibold mb-3">{role.title}</p>
                      <p className="text-sm text-muted-foreground font-light">{role.impact}</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-lg group-hover:from-primary/25 group-hover:to-secondary/25 smooth-transition flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-8 font-light">
                    {role.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {role.highlights.map((highlight, hIdx) => (
                      <motion.div
                        key={hIdx}
                        whileHover={{ y: -2 }}
                        className="px-4 py-3 bg-card/40 border border-white/8 rounded-lg text-sm font-medium text-foreground text-center hover:border-accent/40 smooth-transition"
                      >
                        {highlight}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 smooth-transition pointer-events-none" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
