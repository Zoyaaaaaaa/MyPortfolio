"use client"
import { useState, useEffect } from "react"
import { FloatingDock } from "./ui/floating-dock"
import { Github, Home, Code2, Boxes, FileCode2, Mail, Linkedin, FileText, Sparkles, Zap, Brain, Award, Users } from "lucide-react"

export function Header() {
  const [activeSection, setActiveSection] = useState("home")
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Auto-hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "experience", "projects", "achievements", "leadership", "skills"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    {
      title: "Home",
      icon: (
        <Home
          className={`h-full w-full transition-all duration-300 ${activeSection === "home"
              ? "text-primary drop-shadow-[0_0_12px_hsl(235,100%,72%,0.6)]"
              : "text-muted-foreground group-hover:text-primary"
            }`}
        />
      ),
      href: "#home",
      isActive: activeSection === "home",
    },
    {
      title: "Projects",
      icon: (
        <Code2
          className={`h-full w-full transition-all duration-300 ${activeSection === "projects"
              ? "text-primary drop-shadow-[0_0_12px_hsl(235,100%,72%,0.6)]"
              : "text-muted-foreground group-hover:text-primary"
            }`}
        />
      ),
      href: "#projects",
      isActive: activeSection === "projects",
    },
    {
      title: "Skills",
      icon: (
        <Boxes
          className={`h-full w-full transition-all duration-300 ${activeSection === "skills"
              ? "text-primary drop-shadow-[0_0_12px_hsl(235,100%,72%,0.6)]"
              : "text-muted-foreground group-hover:text-primary"
            }`}
        />
      ),
      href: "#skills",
      isActive: activeSection === "skills",
    },
    {
      title: "Experience",
      icon: (
        <FileCode2
          className={`h-full w-full transition-all duration-300 ${activeSection === "experience"
              ? "text-primary drop-shadow-[0_0_12px_hsl(235,100%,72%,0.6)]"
              : "text-muted-foreground group-hover:text-primary"
            }`}
        />
      ),
      href: "#experience",
      isActive: activeSection === "experience",
    },
    {
      title: "Achievements",
      icon: (
        <Award
          className={`h-full w-full transition-all duration-300 ${activeSection === "achievements"
              ? "text-primary drop-shadow-[0_0_12px_hsl(235,100%,72%,0.6)]"
              : "text-muted-foreground group-hover:text-primary"
            }`}
        />
      ),
      href: "#achievements",
      isActive: activeSection === "achievements",
    },
    {
      title: "Leadership",
      icon: (
        <Users
          className={`h-full w-full transition-all duration-300 ${activeSection === "leadership"
              ? "text-primary drop-shadow-[0_0_12px_hsl(235,100%,72%,0.6)]"
              : "text-muted-foreground group-hover:text-primary"
            }`}
        />
      ),
      href: "#leadership",
      isActive: activeSection === "leadership",
    },
    {
      title: "Contact",
      icon: (
        <div className="relative h-full w-full">
          <Mail className="h-full w-full text-muted-foreground group-hover:text-accent transition-all duration-300" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-accent to-secondary rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ),
      href: "mailto:zoyah015@gmail.com",
      external: true,
    },
    {
      title: "LinkedIn",
      icon: (
        <div className="relative h-full w-full">
          <Linkedin className="h-full w-full text-muted-foreground group-hover:text-secondary transition-all duration-300" />
          <div className="absolute inset-0 bg-secondary/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
        </div>
      ),
      href: "https://www.linkedin.com/in/zoya-hassan-688470271/",
      external: true,
    },
    {
      title: "GitHub",
      icon: (
        <div className="relative h-full w-full">
          <Github className="h-full w-full text-muted-foreground group-hover:text-primary transition-all duration-300" />
          <div className="absolute inset-0 bg-primary/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
        </div>
      ),
      href: "https://github.com/Zoyaaaaaaa",
      external: true,
    },
    {
      title: "Resume",
      icon: (
        <div className="relative h-full w-full">
          <FileText className="h-full w-full text-muted-foreground group-hover:text-accent transition-all duration-300" />
          <Sparkles className="absolute -top-0.5 -right-0.5 w-3 h-3 text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
        </div>
      ),
      href: "https://drive.google.com/file/d/1yv_eJ7seoRNxvS0by0SEdJ_mJUKBvUzP/view?usp=sharing",
      external: true,
    },
  ]

  return (
    <>
      {/* Innovation indicator */}
      <div className="fixed top-6 right-6 z-40">
        <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-card/80 backdrop-blur-md border border-primary/30 text-primary text-xs font-medium">
          <Brain className="w-3 h-3 animate-pulse" />
          <span>Innovation Mode</span>
          <Zap className="w-3 h-3" />
        </div>
      </div>

      {/* Main floating dock */}
      <div
        className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
      >
        <FloatingDock
          items={links}
          desktopClassName="glass-effect border-primary/30 shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:border-primary/50 hover:bg-card/95 transition-all duration-500 ring-1 ring-primary/20 hover:ring-primary/40 rounded-2xl"
          mobileClassName="glass-effect border-primary/30 shadow-2xl shadow-primary/20 ring-1 ring-primary/20 rounded-2xl"
        />

        {/* Floating particles effect */}
        <div className="absolute -inset-4 pointer-events-none">
          <div className="absolute top-2 left-2 w-1 h-1 bg-primary rounded-full animate-ping opacity-60" />
          <div
            className="absolute bottom-3 right-3 w-1 h-1 bg-accent rounded-full animate-ping opacity-40"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1 w-0.5 h-0.5 bg-secondary rounded-full animate-ping opacity-50"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </div>

      {/* Progress indicator */}
      <div className="fixed bottom-2 right-8 z-40">
        <div className="flex items-center gap-1">
          {["home", "projects", "skills", "experience"].map((section) => (
            <div
              key={section}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === section
                  ? "bg-primary shadow-[0_0_12px_hsl(235,100%,72%,0.6)]"
                  : "bg-muted hover:bg-muted-foreground"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      {lastScrollY < 50 && (
        <div className="fixed bottom-32 right-12 z-40 animate-bounce">
          <div className="flex flex-col items-center gap-1 text-primary/60 text-xs">
            <div className="w-0.5 h-6 bg-gradient-to-b from-primary/60 to-transparent rounded-full" />
            <span>Scroll</span>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
