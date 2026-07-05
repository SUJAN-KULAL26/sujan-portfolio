export function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  const alignmentClass = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={alignmentClass}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-indigo-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p
        className={`mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base ${align === 'center' ? 'mx-auto' : ''}`}
      >
        {subtitle}
      </p>
    </div>
  )
}