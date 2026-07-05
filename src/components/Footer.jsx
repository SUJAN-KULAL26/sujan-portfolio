import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa6'

const links = [
  { icon: FaGithub, href: 'https://github.com/SUJAN-KULAL26', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/sujan-p26', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:sujankulal26@gmail.com', label: 'Email' },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#0a0a0f]">
      <div className="section-shell flex flex-col items-center gap-4 py-10 text-center">
        {/* copyright removed per user request */}
        <div className="flex items-center gap-3">
          {links.map((link) => {
            const Icon = link.icon

            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={link.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 text-slate-500 transition hover:border-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}