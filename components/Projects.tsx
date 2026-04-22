import { projects } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Projects() {
  return (
    <section id="projects" className="section-shell bg-ink px-5 py-24 text-white md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="04"
          label="Project Experience"
          title="Applied data work with clear methods and measurable outcomes."
          description="Project cards emphasize what was built, the methods used, and the result or significance documented in the resume."
          tone="dark"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Reveal key={project.title} delay={index * 0.1}>
                <article className="rounded-md border border-white/16 bg-white/[0.06] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/32 hover:bg-white/[0.09] md:p-8">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white text-ink">
                      <Icon size={20} />
                    </div>
                    <span className="text-sm text-white/58">{project.period}</span>
                  </div>
                  <p className="mt-8 text-sm text-white/62">{project.subtitle}</p>
                  <h3 className="mt-3 text-3xl font-semibold leading-tight">
                    {project.title}
                  </h3>
                  <p className="mt-5 text-base leading-7 text-white/74">
                    {project.summary}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.methods.map((method) => (
                      <span
                        key={method}
                        className="rounded-full border border-white/18 px-3 py-1.5 text-sm text-white/78"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-8 grid gap-4 text-sm leading-7 text-white/72">
                    {project.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-3">
                        <span className="mt-3 h-px w-6 shrink-0 bg-white/46" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
