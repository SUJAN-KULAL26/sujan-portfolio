import { ArrowDown, Download, FolderOpen } from 'lucide-react'
import { useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { RevealSection } from './RevealSection.jsx'

export function Hero() {
  const [imageFailed, setImageFailed] = useState(false)

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/SUJAN-KULAL26', label: 'GitHub' },
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/sujan-p26', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:sujankulal26@gmail.com', label: 'Email' },
  ]

  return (
    <RevealSection id="home" className="pt-16 sm:pt-20 lg:pt-24">
      <div className="section-shell pb-16 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-indigo-700 dark:text-indigo-400">
              Portfolio
            </p>
              <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
                <span className="text-slate-100">Hi, I&apos;m </span>
                <span className="text-indigo-700 dark:text-indigo-300">Sujan P</span>
              </h1>
              <p className="mt-6 text-lg font-medium text-white sm:text-xl">
                Software Engineer | Java • Cloud • DevOps
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
                I build reliable software and explore how cloud technologies make it scale — with a growing focus on Java, backend systems, and Linux.
              </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                onClick={(event) => {
                  event.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-400"
              >
                <FolderOpen className="h-4 w-4" />
                View Projects
              </a>
              <a
                href="/resume.pdf"
                onClick={async (e) => {
                  e.preventDefault()
                  try {
                    const res = await fetch('/resume.pdf', { method: 'HEAD' })
                    if (res.ok) window.open('/resume.pdf', '_blank')
                    else window.open('/resume.html', '_blank')
                  } catch (err) {
                    window.open('/resume.html', '_blank')
                  }
                }}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-indigo-500 hover:text-white"
              >
                <Download className="h-4 w-4" />
                View Resume
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    aria-label={link.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-800 bg-[#111113] text-slate-300 transition hover:border-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-indigo-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-[#111113] shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              <div className="aspect-[4/5] w-full overflow-hidden bg-[#14141a]">
                {!imageFailed ? (
                  <img
                    src="/profile-photo.jpg"
                    alt="Sujan P portrait"
                    className="h-full w-full object-cover object-center"
                    onError={() => setImageFailed(true)}
                  />
                ) : null}
                {imageFailed ? (
                  <div className="flex h-full flex-col items-center justify-center gap-4 bg-[#111113] text-center text-slate-400">
                    <div className="h-24 w-24 rounded-full border border-dashed border-indigo-400/50 bg-indigo-500/10" />
                    <p className="max-w-64 px-6 text-sm leading-6">
                      Replace this placeholder with your profile photo at <span className="text-slate-200">/profile-photo.jpg</span>.
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-end">
          <a
            href="#about"
            onClick={(event) => {
              event.preventDefault()
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-slate-400 transition hover:text-indigo-300"
          >
            Scroll
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </RevealSection>
  )
}