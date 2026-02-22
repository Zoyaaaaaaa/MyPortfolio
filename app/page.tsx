import { Header } from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import { Projects } from "@/components/Projects"
import { WorkExperience } from "@/components/WorkExperience"
import { Achievements } from "@/components/Achievements"
import { Leadership } from "@/components/Leadership"
import { SkillsShowcase } from "@/components/Skills"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      <div id="home">
        <HeroSection />
      </div>
      <section id="experience">
        <WorkExperience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="achievements">
        <Achievements />
      </section>
      <section id="leadership">
        <Leadership />
      </section>
      <section id="skills">
        <SkillsShowcase />
      </section>
      <Footer />
    </main>
  )
}

