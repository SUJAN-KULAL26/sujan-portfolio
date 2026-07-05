import { CheckCircle2 } from 'lucide-react'
import { RevealSection } from './RevealSection.jsx'

const stats = [
  { value: '2', label: 'Leadership Roles' },
  { value: '2', label: 'Hackathons' },
  { value: '5', label: 'Projects Shipped' },
]

const entries = [
  {
    badge: 'Team Lead',
    context: 'Team Project',
    title: 'Full Stack Developer & Team Lead',
    org: 'SmartCare HMS',
    description: 'Led development of a full-stack Hospital Management System, coordinating the team across patient, doctor, and appointment modules while building the backend architecture myself.',
    checklist: ['Led a development team', 'Designed database schema', 'Implemented JWT authentication', 'Built RESTful API layer'],
    tags: ['Node.js', 'Express.js', 'MongoDB', 'Leadership'],
  },
  {
    badge: 'Team Lead',
    context: 'Smart India Hackathon',
    title: 'Team Lead — Neuronauts',
    org: 'Smart India Hackathon 2025',
    description: 'Led a team designing a digital mental health support system for students — from initial concept through wireframes to a presentable prototype.',
    checklist: ['Coordinated team planning', 'Designed UI/UX in Figma', 'Built interactive prototypes', 'Presented final solution'],
    tags: ['Figma', 'UI/UX', 'Leadership', 'Wireframing'],
  },
  {
    badge: 'Frontend Developer',
    context: 'ISDC College Team Project',
    title: 'Frontend Developer',
    org: 'Smart Seminar Hall Management System',
    description: 'Built the student-facing booking dashboard for a college-wide seminar hall booking system, collaborating with the team through GitHub feature branches and pull requests.',
    checklist: ['Developed responsive booking UI', 'Implemented client-side validation', 'Collaborated via Git workflow', 'Coordinated with backend team'],
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
]

export function Experience() {
  return (
    <RevealSection id="experience" className="py-20 lg:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-indigo-400">
            Experience
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Experience & Leadership
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            Leading teams, competing in hackathons, and building real systems under pressure
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="section-panel p-5 text-center">
              <p className="text-3xl font-bold text-indigo-300">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-12 space-y-8 pl-4 sm:pl-8 lg:pl-12">
          <div className="absolute left-4 top-0 h-full w-px bg-slate-800 sm:left-8 lg:left-12" />
          {entries.map((entry) => (
            <article key={entry.title} className="relative pl-8 sm:pl-10 lg:pl-12">
              <div className="absolute left-0 top-2 h-5 w-5 rounded-full border-2 border-indigo-400 bg-[#0a0a0f] shadow-[0_0_0_6px_rgba(129,140,248,0.15)]" />
              <div className="section-panel p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em]">
                  <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-indigo-300">{entry.badge}</span>
                  <span className="text-slate-500">{entry.context}</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white">{entry.title}</h3>
                <p className="mt-2 text-sm font-semibold text-indigo-300">{entry.org}</p>
                <p className="mt-4 text-sm leading-7 text-slate-400">{entry.description}</p>

                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {entry.checklist.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span key={tag} className="rounded-lg border border-slate-700 bg-[#0e0e12] px-3 py-1.5 text-xs font-medium text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  )
}