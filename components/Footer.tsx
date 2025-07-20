// import React from "react";
// import { Github, Linkedin, Twitter } from "lucide-react";

// export function Footer() {
//   return (
//     <footer className="w-full bg-[#0E0E10] text-white py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col items-center justify-center">
//           <div className="flex space-x-6 mb-4">
//             <a href="https://github.com/Zoyaaaaaaa" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
//               <Github size={24} />
//               <span className="sr-only">GitHub</span>
//             </a>
//             <a href="https://www.linkedin.com/in/zoya-hassan-688470271/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
//               <Linkedin size={24} />
//               <span className="sr-only">LinkedIn</span>
//             </a>
//             {/* <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
//               <Twitter size={24} />
//               <span className="sr-only">Twitter</span>
//             </a> */}
//           </div>
//           <p className="text-sm text-gray-400">
//             © {new Date().getFullYear()} Zoya Hassan. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }


"use client"
import { useState, useEffect } from "react"
import { Github, Linkedin, Heart, Rocket, Code, Lightbulb, Zap, Brain, X } from "lucide-react"

export function Footer() {
  const [currentMessage, setCurrentMessage] = useState("")
  const [showPopup, setShowPopup] = useState(false)
  const [mounted, setMounted] = useState(false)

  const innovativeMessages = [
    "Built with curiosity and endless iterations",
    "Powered by innovation and late-night breakthroughs",
    "Made with 💚 and a passion for problem-solving",
    "Crafted through experimentation and creativity",
    "Fueled by ideas and the thrill of building",
    "Designed with purpose and a touch of magic",
  ]

  useEffect(() => {
    setMounted(true)
    setCurrentMessage(innovativeMessages[Math.floor(Math.random() * innovativeMessages.length)])
  }, [])

  const handleEasterEgg = () => {
    setShowPopup(true)
  }

  if (!mounted) {
    return (
      <footer className="w-full bg-gradient-to-br from-black via-gray-950 to-slate-900 text-white py-12 relative overflow-hidden border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col items-center justify-center">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 mb-4">
                <Brain className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-300">Innovation Hub</span>
              </div>
              <p className="text-lg font-medium bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-400 bg-clip-text text-transparent mb-2">
                Let's create the future together! 🌟
              </p>
              <p className="text-sm text-gray-400 italic">Loading inspiration...</p>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <>
      <footer className="w-full bg-gradient-to-br from-black via-gray-950 to-slate-900 text-white py-12 relative overflow-hidden border-t border-gray-800">
        {/* Innovative background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-6 left-12 text-emerald-400 animate-pulse">⚡</div>
          <div className="absolute top-12 right-16 text-blue-400 animate-bounce" style={{ animationDelay: "1s" }}>
            🧠
          </div>
          <div className="absolute bottom-8 left-1/3 text-emerald-300 animate-pulse" style={{ animationDelay: "2s" }}>
            💡
          </div>
          <div className="absolute bottom-6 right-12 text-sky-400 animate-bounce" style={{ animationDelay: "0.5s" }}>
            🚀
          </div>
          <div className="absolute top-1/2 left-8 text-purple-400 animate-pulse" style={{ animationDelay: "1.5s" }}>
            ✨
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col items-center justify-center">
            {/* Innovation-focused intro */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 mb-4">
                <Brain className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-300">Innovation Hub</span>
              </div>
              <p className="text-lg font-medium bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-400 bg-clip-text text-transparent mb-2">
                Let's create the future together! 🌟
              </p>
              <p className="text-sm text-gray-400 italic">{currentMessage}</p>
            </div>

            {/* Enhanced social links */}
            <div className="flex space-x-10 mb-8">
              <a
                href="https://github.com/Zoyaaaaaaa"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-3 hover:text-emerald-400 transition-all duration-500 transform hover:scale-110"
              >
                <div className="relative p-4 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 group-hover:from-emerald-500/20 group-hover:to-emerald-600/20 transition-all duration-500 border border-gray-700 group-hover:border-emerald-500/30">
                  <Github size={28} />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Code & Innovation
                </span>
                <span className="sr-only">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/zoya-hassan-688470271/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-3 hover:text-blue-400 transition-all duration-500 transform hover:scale-110"
              >
                <div className="relative p-4 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 group-hover:from-blue-500/20 group-hover:to-blue-600/20 transition-all duration-500 border border-gray-700 group-hover:border-blue-500/30">
                  <Linkedin size={28} />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Professional Network
                </span>
                <span className="sr-only">LinkedIn</span>
              </a>

              {/* Innovation icon */}
              <div className="group flex flex-col items-center space-y-3 text-purple-400 cursor-pointer transform hover:scale-110 transition-all duration-500">
                <div className="relative p-4 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500 border border-gray-700 group-hover:border-purple-500/30">
                  <Lightbulb size={28} />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Ideas & Vision
                </span>
              </div>
            </div>

            {/* Enhanced copyright section */}
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-3 text-sm text-gray-400">
                <Code className="w-4 h-4 text-emerald-400" />
                <span>© {new Date().getFullYear()} Zoya Hassan</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span className="text-emerald-400">All rights reserved</span>
                <Rocket className="w-4 h-4 text-blue-400" />
              </div>

              <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
                <Zap className="w-3 h-3 text-yellow-400 animate-pulse" />
                <span>Building tomorrow's solutions, one line of code at a time</span>
                <Zap className="w-3 h-3 text-yellow-400 animate-pulse" />
              </p>

              <div className="flex items-center justify-center gap-4 text-xs text-gray-600 mt-4">
                <span className="flex items-center gap-1">
                  <Brain className="w-3 h-3 text-purple-400" />
                  Thinking outside the box
                </span>
                <span className="text-gray-700">•</span>
                <span className="flex items-center gap-1">
                  <Lightbulb className="w-3 h-3 text-yellow-400" />
                  Innovating daily
                </span>
                <span className="text-gray-700">•</span>
                <span className="flex items-center gap-1">
                  <Rocket className="w-3 h-3 text-blue-400" />
                  Launching dreams
                </span>
              </div>
            </div>

            {/* Interactive easter egg */}
            <div className="mt-6 text-center">
              <button
                onClick={handleEasterEgg}
                className="text-xs text-gray-600 hover:text-emerald-400 transition-all duration-300 cursor-pointer hover:scale-105 flex items-center gap-1"
              >
                <span>discover something special</span>
                <Zap className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Subtle glow effect at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
      </footer>

      {/* Better Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-emerald-500/30 rounded-2xl p-8 max-w-md w-full mx-4 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5"></div>
            <div className="absolute top-4 right-4 text-emerald-400 animate-pulse">✨</div>
            <div className="absolute bottom-4 left-4 text-blue-400 animate-bounce">🚀</div>

            {/* Close button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="relative text-center">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">You Found It! 🎉</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Innovation never stops! Thanks for exploring and being curious. Keep building amazing things! ✨
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-4">
                <Brain className="w-4 h-4 text-purple-400" />
                <span>Curiosity is the engine of innovation</span>
                <Lightbulb className="w-4 h-4 text-yellow-400" />
              </div>

              <button
                onClick={() => setShowPopup(false)}
                className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 text-white text-sm font-medium rounded-xl transition-all duration-300 hover:scale-105"
              >
                Keep Exploring! 🚀
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
