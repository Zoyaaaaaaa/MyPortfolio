
// "use client";

// import React from "react";
// import { FloatingDock } from "./ui/floating-dock";
// import {
//   Cat,
//   Home,
//   Code2,
//   Boxes,
//   FileCode2,
//   Mail,
//   LinkIcon,
//   Book,
// } from "lucide-react";

// export function Header() {
//   const links = [
//     {
//       title: "Home",
//       icon: (
//         <Home className="h-full w-full text-neutral-400 group-hover:text-emerald-400 transition-all duration-300" />
//       ),
//       href: "#home",
//     },
//     {
//       title: "Projects",
//       icon: (
//         <Code2 className="h-full w-full text-neutral-400 group-hover:text-emerald-400 transition-all duration-300" />
//       ),
//       href: "#projects",
//     },
//     {
//       title: "Skills",
//       icon: (
//         <Boxes className="h-full w-full text-neutral-400 group-hover:text-emerald-400 transition-all duration-300" />
//       ),
//       href: "#skills",
//     },
//     {
//       title: "Experience",
//       icon: (
//         <FileCode2 className="h-full w-full text-neutral-400 group-hover:text-emerald-400 transition-all duration-300" />
//       ),
//       href: "#experience",
//     },
//     {
//       title: "Contact",
//       icon: (
//         <Mail className="h-full w-full text-neutral-400 group-hover:text-emerald-400 transition-all duration-300" />
//       ),
//       href: "mailto:zoyah015@gmail.com",
//     },
//     {
//       title: "LinkedIn",
//       icon: (
//         <LinkIcon className="h-full w-full text-neutral-400 group-hover:text-emerald-400 transition-all duration-300" />
//       ),
//       href: "https://www.linkedin.com/in/zoya-hassan-688470271/",
//     },
//     {
//       title: "GitHub",
//       icon: (
//         <Cat className="h-full w-full text-neutral-400 group-hover:text-emerald-400 transition-all duration-300" />
//       ),
//       href: "https://github.com/Zoyaaaaaaa",
//     },
//     {
//       title: "Resume",
//       icon: (
//         <Book className="h-full w-full text-neutral-400 group-hover:text-emerald-400 transition-all duration-300" />
//       ),
//       href: "https://drive.google.com/file/d/1NQLxwLEaWSER6fvkxPKvk78u0F6Am-Rn/view?usp=sharing",
//     }
//   ];

//   return (
//     <div className="fixed bottom-8 right-8 z-50">
//            <FloatingDock
//         items={links}
//         desktopClassName="bg-neutral-900/80 backdrop-blur-md border border-emerald-800/30 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:border-emerald-700/40 hover:bg-neutral-900/90 transition-all duration-300 ring-1 ring-emerald-900/20"
//         mobileClassName="bg-neutral-900/90 backdrop-blur-md border border-emerald-800/30 shadow-xl shadow-emerald-500/20 ring-1 ring-emerald-900/20"
//       />
//     </div>
//   );
// }

// export default Header;

"use client"
import { useState, useEffect } from "react"
import { FloatingDock } from "./ui/floating-dock"
import { Github, Home, Code2, Boxes, FileCode2, Mail, Linkedin, FileText, Sparkles, Zap, Brain } from "lucide-react"

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
      const sections = ["home", "projects", "skills", "experience"]
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
          className={`h-full w-full transition-all duration-300 ${
            activeSection === "home"
              ? "text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]"
              : "text-neutral-400 group-hover:text-emerald-400"
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
          className={`h-full w-full transition-all duration-300 ${
            activeSection === "projects"
              ? "text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]"
              : "text-neutral-400 group-hover:text-emerald-400"
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
          className={`h-full w-full transition-all duration-300 ${
            activeSection === "skills"
              ? "text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]"
              : "text-neutral-400 group-hover:text-emerald-400"
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
          className={`h-full w-full transition-all duration-300 ${
            activeSection === "experience"
              ? "text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]"
              : "text-neutral-400 group-hover:text-emerald-400"
          }`}
        />
      ),
      href: "#experience",
      isActive: activeSection === "experience",
    },
    {
      title: "Contact",
      icon: (
        <div className="relative h-full w-full">
          <Mail className="h-full w-full text-neutral-400 group-hover:text-emerald-400 transition-all duration-300" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ),
      href: "mailto:zoyah015@gmail.com",
      external: true,
    },
    {
      title: "LinkedIn",
      icon: (
        <div className="relative h-full w-full">
          <Linkedin className="h-full w-full text-neutral-400 group-hover:text-blue-400 transition-all duration-300" />
          <div className="absolute inset-0 bg-blue-400/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
        </div>
      ),
      href: "https://www.linkedin.com/in/zoya-hassan-688470271/",
      external: true,
    },
    {
      title: "GitHub",
      icon: (
        <div className="relative h-full w-full">
          <Github className="h-full w-full text-neutral-400 group-hover:text-purple-400 transition-all duration-300" />
          <div className="absolute inset-0 bg-purple-400/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
        </div>
      ),
      href: "https://github.com/Zoyaaaaaaa",
      external: true,
    },
    {
      title: "Resume",
      icon: (
        <div className="relative h-full w-full">
          <FileText className="h-full w-full text-neutral-400 group-hover:text-orange-400 transition-all duration-300" />
          <Sparkles className="absolute -top-0.5 -right-0.5 w-3 h-3 text-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
        </div>
      ),
      href: "https://drive.google.com/file/d/1cPQipNNLyxyrf40sX9EdUCo19CN2Wpgq/view?usp=sharing",
      external: true,
    },
  ]

  return (
    <>
      {/* Innovation indicator */}
      <div className="fixed top-6 right-6 z-40">
        <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-black/80 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-xs font-medium">
          <Brain className="w-3 h-3 animate-pulse" />
          <span>Innovation Mode</span>
          <Zap className="w-3 h-3" />
        </div>
      </div>

      {/* Main floating dock */}
      <div
        className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <FloatingDock
          items={links}
          desktopClassName="bg-black/90 backdrop-blur-xl border border-emerald-500/30 shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:border-emerald-400/50 hover:bg-black/95 transition-all duration-500 ring-1 ring-emerald-900/30 hover:ring-emerald-500/40 rounded-2xl"
          mobileClassName="bg-black/95 backdrop-blur-xl border border-emerald-500/30 shadow-2xl shadow-emerald-500/20 ring-1 ring-emerald-900/30 rounded-2xl"
        />

        {/* Floating particles effect */}
        <div className="absolute -inset-4 pointer-events-none">
          <div className="absolute top-2 left-2 w-1 h-1 bg-emerald-400 rounded-full animate-ping opacity-60" />
          <div
            className="absolute bottom-3 right-3 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-40"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1 w-0.5 h-0.5 bg-purple-400 rounded-full animate-ping opacity-50"
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
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === section
                  ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      {lastScrollY < 50 && (
        <div className="fixed bottom-32 right-12 z-40 animate-bounce">
          <div className="flex flex-col items-center gap-1 text-emerald-400/60 text-xs">
            <div className="w-0.5 h-6 bg-gradient-to-b from-emerald-400/60 to-transparent rounded-full" />
            <span>Scroll</span>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
