import { Award, ExternalLink } from 'lucide-react'
import { RevealSection } from './RevealSection.jsx'
import { SectionHeading } from './SectionHeading.jsx'

const certifications = [
  {
    title: 'NPTEL — Cloud Computing and Distributed Systems (Elite)',
    description:
      'Completed an Elite-tier NPTEL certification covering distributed systems principles, cloud architecture patterns, and scalability concepts.',
    link: '/certificate/cloud-computing.pdf',
  },
  {
    title: 'Career Essentials in Generative AI — Microsoft & LinkedIn',
    description:
      "Completed Microsoft and LinkedIn's learning path covering Microsoft Copilot, generative AI fundamentals, and responsible AI practices.",
    link: '/certificate/career-essentials-generative-ai.pdf'
  },
  {
    title: 'Linux for Cloud & DevOps Engineers — Udemy',
    description:
      'Hands-on training in Linux system administration, command-line tools, and foundational DevOps and cloud deployment practices.',
    link: '/certificate/linux-cloud-devops.pdf',
  },
  {
    title: 'Microsoft Azure Learning Challenge — Microsoft Learn',
    description:
      "Completed Microsoft Learn's Azure challenge covering cloud services architecture, deployment, and infrastructure management.",
    link: '/certificate/microsoft-azure.pdf',
  },
  {
    title: 'NPTEL — Data Science for Engineers',
    description:
      "Completed NPTEL's Data Science for Engineers program covering data analysis, statistical methods, machine learning fundamentals, and data-driven problem solving.",
    link: '/certificate/data-science-for-engineers.pdf',
  },
  {
    title: 'Data Analytics with Generative AI — Simplilearn',
    description:
      'Learned to combine generative AI with data analytics to extract insights, automate workflows, and support data-driven decision making.',
    link: '/certificate/data-analytics-generative-ai.pdf',
  },
  {
  title: 'Deloitte | Data Analytics Job Simulation',
  description:
    'Completed Deloitte’s Data Analytics Job Simulation, applying Tableau and Excel to analyze business data, build interactive dashboards, and derive actionable insights through real-world analytics tasks.',
  link: '/certificate/deloitte-data-analytics.pdf',
},
{
  title: 'Tata Consultancy Services | Cybersecurity Job Simulation',
  description:
    'Completed Tata’s Cybersecurity Analyst Job Simulation, designing IAM solutions and implementation strategies using RBAC, MFA, SSO, and user lifecycle management to strengthen enterprise security.',
  link: '/certificate/tata-cybersecurity.pdf',
},
]

export function Certifications() {
  return (
    <RevealSection id="certifications" className="py-20 lg:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Certifications"
          title="Learning Without Limits"
          subtitle="Strengthening my foundation through continuous learning and industry-recognized credentials."
          align="center"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
            <article key={cert.title} className="section-panel p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-indigo-200/60 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300">
                  <Award className="h-5 w-5" />
                </div>
                <a
  href={cert.link}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 dark:text-indigo-300 transition hover:text-indigo-600 dark:hover:text-indigo-200"
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