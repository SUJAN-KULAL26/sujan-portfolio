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

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)

        if (!visibleEntries.length) {
          return
        }

        visibleEntries.sort((first, second) => second.intersectionRatio - first.intersectionRatio)
        setActiveSection(visibleEntries[0].target.id)
      },
      { threshold: [0.25, 0.4, 0.6, 0.8], rootMargin: '-20% 0px -55% 0px' },
    )

    sectionElements.forEach((element) => observer.observe(element))

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = totalHeight > 0 ? (scrollTop / totalHeight) * 100 : 0
      setScrollProgress(progress)
    }

    updateScrollProgress()
    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    window.addEventListener('resize', updateScrollProgress)

    return () => {
      observer.disconnect()
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
