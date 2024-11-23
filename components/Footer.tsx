import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#0E0E10] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-6 mb-4">
            <a href="https://github.com/Zoyaaaaaaa" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/zoya-hassan-688470271/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            {/* <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </a> */}
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Zoya Hassan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

