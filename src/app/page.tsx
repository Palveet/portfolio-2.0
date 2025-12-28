import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Research from '@/components/Research'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Research />
      <Projects />
      <Skills />
      <Footer />
    </main>
  )
}

