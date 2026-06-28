import { Header } from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import { Projects } from "@/components/Projects"
import { WorkExperience } from "@/components/WorkExperience"
import { Achievements } from "@/components/Achievements"
import { Leadership } from "@/components/Leadership"
import { SkillsShowcase } from "@/components/Skills"
import { About } from "@/components/About"
import { TechStack } from "@/components/TechStack"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background">
      <Header />
      <div id="home">
        <HeroSection />
      </div>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <WorkExperience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="techstack">
        <TechStack />
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

