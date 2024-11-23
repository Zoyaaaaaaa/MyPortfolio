import { SkillsShowcase } from "../components/Skills";
import { Projects } from "../components/Projects";
import { WorkExperience } from "../components/WorkExperience";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/Header";
import Header from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header/>
      <HeroSection/>
      <section id="experience">
        <WorkExperience />
      </section>
      <section id="skills">
        <SkillsShowcase />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Footer />
    </main>
  );
}

