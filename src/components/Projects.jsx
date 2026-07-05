import {
  Activity,
  CheckCircle2,
  Clock3,
  GitBranch,
  Lock,
  Network,
  ExternalLink,
} from 'lucide-react'
import { RevealSection } from './RevealSection.jsx'
import { SectionHeading } from './SectionHeading.jsx'
import { useTheme } from '../context/useTheme.jsx'

const projects = [
  {
    title: 'SmartCare HMS',
    description: 'Full-stack Hospital Management System built as Team Lead — patient records, doctor scheduling, and appointment booking through secure role-based dashboards.',
    checklist: ['Patient management', 'Doctor scheduling', 'JWT authentication', 'RESTful APIs'],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
    icon: Network,
    banner: 'from-indigo-500 via-violet-500 to-slate-900',
    repo: 'https://github.com/SUJAN-KULAL26/smartcare-hms',
    live: 'https://smartcare-hms-frontend.onrender.com',
    status: 'Live Demo',
  },
  {
    title: 'HemoInsight AI',
    description: 'AI-powered blood report analyzer that extracts health parameters from PDF or image reports and flags abnormal values automatically.',
    checklist: ['OCR text extraction', 'Abnormality detection', 'Health insights dashboard', 'Scikit-learn models'],
    tech: ['Python', 'Flask', 'Tesseract OCR', 'Scikit-learn'],
    icon: Activity,
    banner: 'from-cyan-500 via-teal-500 to-slate-900',
    repo: 'https://github.com/SUJAN-KULAL26',
    status: 'Deployment Coming Soon',
  },
  {
    title: 'Secure Cloud Storage System',
    description: 'Secure file storage platform with AES/RSA encryption and SHA-256 integrity checks, deployed live on Vercel.',
    checklist: ['AES/RSA encryption', 'SHA-256 integrity checks', 'Secure file sharing', 'Activity logging'],
    tech: ['Spring Boot', 'MongoDB', 'AES', 'RSA', 'SHA-256'],
    icon: Lock,
    banner: 'from-violet-500 via-fuchsia-500 to-slate-900',
    repo: 'https://github.com/SUJAN-KULAL26/Secure-Cloud-Storage-System',
    live: 'https://jay-file-manager.vercel.app',
    status: 'Live Demo',
  },
  // Removed older/temporary projects per user request
]

function ProjectPill({ children }) {
  const { isDark } = useTheme()

  const lightStyles = { color: '#065e4a', backgroundColor: '#ecfeff', borderColor: 'rgba(6,78,59,0.18)' }

  return (
    <span
      className="inline-flex rounded-lg border border-cyan-200/40 dark:border-cyan-400/25 bg-cyan-50 dark:bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-700 dark:text-cyan-200"
      style={isDark ? undefined : lightStyles}
    >
      {children}
    </span>
  )
}

function ProjectCard({ project }) {
  const Icon = project.icon
  const { isDark } = useTheme()

  return (
    <article className="section-panel overflow-hidden">
      <div className={`relative flex min-h-44 items-center justify-center bg-gradient-to-br ${project.banner}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_55%)]" />
        <Icon className="relative h-16 w-16 text-white/90" />
        <span className="absolute left-4 bottom-4 rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80 backdrop-blur-sm">
          Featured Project
        </span>
      </div>

      <div className="space-y-5 p-6 sm:p-7">
        <div>
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
        </div>

        <ul className="grid gap-2 sm:grid-cols-2">
          {project.checklist.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-700 dark:text-indigo-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <ProjectPill key={tech}>{tech}</ProjectPill>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-1">
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-indigo-500 hover:text-white"
            >
              <GitBranch className="h-4 w-4" />
              GitHub Repository
            </a>
          ) : null}

          {project.live ? (
            <a href={project.live} target="_blank" rel="noreferrer" className="rounded-full p-[2px] bg-gradient-to-r from-cyan-400 to-violet-500">
              <span
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition`}
                style={{
                  backgroundColor: isDark ? 'rgba(7,10,14,0.85)' : '#ffffff',
                }}
              >
                <span className={isDark ? 'text-white' : 'text-slate-900'}>Live Demo</span>
                <ExternalLink className={isDark ? 'h-4 w-4 text-white' : 'h-4 w-4 text-slate-900'} />
              </span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-lg border border-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-400">
              <Clock3 className="h-4 w-4" />
              {project.status}
            </span>
          )}

          {project.badge ? (
            <span className="inline-flex items-center rounded-lg border border-indigo-200/60 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 px-4 py-2.5 text-sm font-semibold text-indigo-700 dark:text-indigo-300">
              {project.badge}
            </span>
          ) : null}
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <RevealSection id="projects" className="py-20 lg:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Turning Ideas into Software"
          subtitle="Crafting thoughtful software through curiosity, problem-solving, and continuous learning."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </RevealSection>
  )
}