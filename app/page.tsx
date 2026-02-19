import Hero from '@/components/hero'
import SystemDesign from '@/components/system-design'
import CaseStudies from '@/components/case-studies'
import Architecture from '@/components/architecture'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <Hero />
      <SystemDesign />
      <CaseStudies />
      <Architecture />
      <Contact />
    </main>
  )
}

