import { RevealSection } from './RevealSection.jsx'
import { SectionHeading } from './SectionHeading.jsx'

const techSkills = ['Java', 'Python', 'JavaScript', 'React', 'Node.js', 'Express.js', 'Next.js', 'MongoDB', 'MySQL', 'Neo4j']
const tools = ['Git', 'GitHub', 'GitHub Copilot', 'AWS', 'Azure', 'Linux', 'Postman', 'Vercel', 'Tailwind CSS']
const softSkills = ['Leadership', 'Problem-Solving', 'Team Management', 'Communication', 'Teamwork']

function SkillPill({ children, variant = 'cyan' }) {
  const variantClasses = variant === 'cyan'
    ? 'border-cyan-400/25 bg-cyan-400/10 text-cyan-200'
    : 'border-indigo-400/25 bg-indigo-400/10 text-indigo-200'

  return (
    <span className={`inline-flex rounded-lg border px-3 py-2 text-sm font-medium ${variantClasses}`}>
      {children}
    </span>
  )
}

export function Skills() {
  return (
    <RevealSection id="skills" className="py-20 lg:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="Tooling and Strengths"
          subtitle="A focused stack for backend systems, modern web development, and collaborative execution"
        />

        <div className="mt-10 space-y-8">
          <div className="flex flex-wrap gap-3">
            {techSkills.map((skill) => (
              <SkillPill key={skill}>{skill}</SkillPill>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <SkillPill key={tool}>{tool}</SkillPill>
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-400">
              Soft Skills
            </p>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <SkillPill key={skill} variant="indigo">
                  {skill}
                </SkillPill>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  )
}