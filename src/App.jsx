import { useEffect, useState } from 'react'
import { About } from './components/About.jsx'
import { Certifications } from './components/Certifications.jsx'
import { Contact } from './components/Contact.jsx'
import { Experience } from './components/Experience.jsx'
import { Footer } from './components/Footer.jsx'
import { Hero } from './components/Hero.jsx'
import { Navbar } from './components/Navbar.jsx'
import { Projects } from './components/Projects.jsx'
import { Skills } from './components/Skills.jsx'

const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact']

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const sectionElements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = totalHeight > 0 ? (scrollTop / totalHeight) * 100 : 0
      setScrollProgress(progress)

      const scrollAnchor = scrollTop + 160
      const active = [...sectionElements]
        .sort((first, second) => first.offsetTop - second.offsetTop)
        .filter((element) => element.offsetTop <= scrollAnchor)
        .at(-1)

      if (active) {
        setActiveSection(active.id)
      }
    }

    updateScrollProgress()
    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    window.addEventListener('resize', updateScrollProgress)

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
      window.removeEventListener('resize', updateScrollProgress)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Navbar activeSection={activeSection} scrollProgress={scrollProgress} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
