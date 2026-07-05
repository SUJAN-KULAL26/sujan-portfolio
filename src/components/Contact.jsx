import { ArrowRight, Code2, Send } from 'lucide-react'
import { useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { RevealSection } from './RevealSection.jsx'
import { SectionHeading } from './SectionHeading.jsx'

const contactLinks = [
  { label: 'Email', value: 'sujankulal26@gmail.com', icon: FaEnvelope, href: 'mailto:sujankulal26@gmail.com' },
  { label: 'GitHub', value: 'SUJAN-KULAL26', icon: FaGithub, href: 'https://github.com/SUJAN-KULAL26' },
  { label: 'LinkedIn', value: 'SUJAN P', icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/sujan-p26' },
  { label: 'LeetCode', value: 'SUJAN_KULAL', icon: Code2, href: 'https://leetcode.com/u/SUJAN_KULAL' },
]

function ContactCard({ link }) {
  const Icon = link.icon

  return (
    <a
      href={link.href}
      target={link.href.startsWith('http') ? '_blank' : undefined}
      rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
      className="flex items-center justify-between rounded-xl border border-slate-800 bg-[#111113] px-4 py-4 transition hover:border-indigo-500/70 hover:bg-[#131318]"
    >
      <div className="flex items-center gap-4">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-indigo-200/60 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{link.label}</p>
          <p className="mt-1 text-sm font-semibold text-white">{link.value}</p>
        </div>
      </div>
      <ArrowRight className="h-4 w-4 text-indigo-700 dark:text-indigo-300" />
    </a>
  )
}

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = `Portfolio Contact from ${formData.name}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    const mailto = `mailto:sujankulal26@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
  }

  return (
    <RevealSection id="contact" className="py-20 lg:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Get In Touch"
          subtitle="Open to Software Engineer roles, internships, and interesting collaborations"
          align="center"
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <h3 className="text-2xl font-bold text-white">Let&apos;s Connect</h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
              Whether you have a role to discuss, a project in mind, or just want to talk systems and architecture — I&apos;d love to hear from you.
            </p>

            <div className="mt-6 space-y-4">
              {contactLinks.map((link) => (
                <ContactCard key={link.label} link={link} />
              ))}
            </div>
          </div>

          <div className="section-panel p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-white">Send a Message</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Fill out the form and your email client will open with the message ready to send.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-300">Name</span>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                    required
                    className="w-full rounded-lg border border-slate-800 bg-[#0b0b10] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500"
                    placeholder="Your name"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-300">Email</span>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                    required
                    className="w-full rounded-lg border border-slate-800 bg-[#0b0b10] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-300">Message</span>
                <textarea
                  value={formData.message}
                  onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
                  required
                  rows="6"
                  className="w-full rounded-lg border border-slate-800 bg-[#0b0b10] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500"
                  placeholder="Tell me about the opportunity or collaboration..."
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </RevealSection>
  )
}