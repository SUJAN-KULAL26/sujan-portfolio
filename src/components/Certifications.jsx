import { Award, ExternalLink } from 'lucide-react'
import { RevealSection } from './RevealSection.jsx'
import { SectionHeading } from './SectionHeading.jsx'

const certifications = [
  {
    title: 'NPTEL — Cloud Computing and Distributed Systems (Elite)',
    description: 'Completed an Elite-tier NPTEL certification covering distributed systems principles, cloud architecture patterns, and scalability concepts.',
  },
  {
    title: 'Career Essentials in Generative AI — Microsoft & LinkedIn',
    description: "Completed Microsoft and LinkedIn's learning path covering Microsoft Copilot, generative AI fundamentals, and responsible AI practices.",
  },
  {
    title: 'Linux for Cloud & DevOps Engineers — Udemy',
    description: 'Hands-on training in Linux system administration, command-line tools, and foundational DevOps and cloud deployment practices.',
  },
  {
    title: 'Microsoft Azure Learning Challenge — Microsoft Learn',
    description: "Completed Microsoft Learn's Azure challenge covering cloud services architecture, deployment, and infrastructure management.",
  },
]

export function Certifications() {
  return (
    <RevealSection id="certifications" className="py-20 lg:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials & Training"
          subtitle="Continuous learning across cloud, distributed systems, and modern AI tools"
          align="center"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
            <article key={cert.title} className="section-panel p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-indigo-500/30 bg-indigo-500/10 text-indigo-300">
                  <Award className="h-5 w-5" />
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 transition hover:text-indigo-200"
                >
                  View Certificate
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <h3 className="mt-5 text-xl font-bold text-white">{cert.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{cert.description}</p>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  )
}