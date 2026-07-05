import { Menu, Moon, SunMedium, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTheme } from '../context/useTheme.jsx'

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact', id: 'contact' },
]

export function Navbar({ activeSection, scrollProgress }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleNavClick = (id) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/90 bg-[#0a0a0f]/96 backdrop-blur-sm">
      <div className="h-1.5 w-full bg-slate-900">
        <div
          className="h-full bg-indigo-500 transition-[width] duration-200 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="text-xl font-extrabold tracking-tight text-white transition hover:text-indigo-200"
          aria-label="Go to home"
        >
          SP<span className="text-indigo-700 dark:text-indigo-400">.</span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${activeSection === item.id ? 'text-indigo-700 dark:text-indigo-300' : 'text-slate-300 hover:text-white'}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-[#111113] text-slate-200 transition hover:border-indigo-400 hover:text-indigo-200"
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {isDark ? <Moon className="h-5 w-5" /> : <SunMedium className="h-5 w-5" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-[#111113] text-slate-200 transition hover:border-indigo-400 hover:text-indigo-200 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-x-0 top-20 z-40 border-b border-slate-800 bg-[#0a0a0f]/98 transition-all duration-300 lg:hidden ${mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        <div className="section-shell py-4">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`rounded-lg border px-4 py-3 text-left text-sm font-medium transition ${activeSection === item.id ? 'border-indigo-700 dark:border-indigo-500 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300' : 'border-slate-800 bg-[#111113] text-slate-200 hover:border-indigo-500/60 hover:text-white'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}