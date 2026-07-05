import { Award, Briefcase, Code2, GraduationCap } from 'lucide-react'
import { RevealSection } from './RevealSection.jsx'
import { SectionHeading } from './SectionHeading.jsx'

const stats = [
  { icon: GraduationCap, value: '9.5', label: 'CGPA' },
  { icon: Code2, value: '50+', label: 'LeetCode Problems' },
  { icon: Briefcase, value: '5', label: 'Projects Built' },
  { icon: Award, value: '6', label: 'Certifications' },
]

export function About() {
  return (
    <RevealSection id="about" className="py-20 lg:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About"
          title="Who I Am"
          subtitle="Software engineer with a problem-solving mindset"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="section-panel p-6 sm:p-8">
            <p className="text-base leading-8 text-slate-300">
              I&apos;m a final-year Information Science Engineering student who builds full-stack systems and cares about what happens underneath them — architecture, security, and scale. I&apos;ve led teams through hackathons and real projects, and I&apos;m currently going deeper into distributed systems and DevOps to understand how software holds up under real-world load.
            </p>
          </div>

          <div className="section-panel p-6 sm:p-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-indigo-700 dark:text-indigo-400">
              ✨ Currently Exploring
            </p>
            <ul className="space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
              {[
                'Cloud Architecture & Distributed Systems',
                'DevOps & Infrastructure as Code',
                'System Design at Scale',
                'Advanced Algorithms & Data Structures',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-indigo-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon

            return (
              <div key={stat.label} className="section-panel flex flex-col items-center px-5 py-6 text-center">
                <Icon className="mb-4 h-6 w-6 text-indigo-700 dark:text-indigo-400" />
                <p className="text-3xl font-bold text-indigo-700 dark:text-indigo-300">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </RevealSection>
  )
}