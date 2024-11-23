
"use client";

import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
  Cat,
  Home,
  Code2,
  Boxes,
  FileCode2,
  Mail,
  LinkIcon,
} from "lucide-react";

export function Header() {
  const links = [
    {
      title: "Home",
      icon: (
        <Home className="h-full w-full text-neutral-400 group-hover:text-emerald-400 transition-all duration-300" />
      ),
      href: "#home",
    },
    {
      title: "Projects",
      icon: (
        <Code2 className="h-full w-full text-neutral-400 group-hover:text-emerald-400 transition-all duration-300" />
      ),
      href: "#projects",
    },
    {
      title: "Skills",
      icon: (
        <Boxes className="h-full w-full text-neutral-400 group-hover:text-emerald-400 transition-all duration-300" />
      ),
      href: "#skills",
    },
    {
      title: "Experience",
      icon: (
        <FileCode2 className="h-full w-full text-neutral-400 group-hover:text-emerald-400 transition-all duration-300" />
      ),
      href: "#experience",
    },
    {
      title: "Contact",
      icon: (
        <Mail className="h-full w-full text-neutral-400 group-hover:text-emerald-400 transition-all duration-300" />
      ),
      href: "mailto:zoyah015@gmail.com",
    },
    {
      title: "LinkedIn",
      icon: (
        <LinkIcon className="h-full w-full text-neutral-400 group-hover:text-emerald-400 transition-all duration-300" />
      ),
      href: "https://www.linkedin.com/in/zoya-hassan-688470271/",
    },
    {
      title: "GitHub",
      icon: (
        <Cat className="h-full w-full text-neutral-400 group-hover:text-emerald-400 transition-all duration-300" />
      ),
      href: "https://github.com/Zoyaaaaaaa",
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <FloatingDock
        items={links}
        desktopClassName="bg-neutral-900/80 backdrop-blur-md border border-white-800/50 shadow-xl shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-300"
        mobileClassName="bg-neutral-900/90 backdrop-blur-md border border-neutral-800/50 shadow-xl shadow-emerald-500/10"
      />
    </div>
  );
}

export default Header;
