import { getPortfolioContent, type Locale } from "@/lib/content";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

type ProjectsProps = {
  locale: Locale;
};

export function Projects({ locale }: ProjectsProps) {
  const content = getPortfolioContent(locale);
  const { projects, projectsSection } = content;
  const isChinese = locale === "zh";

  return (
    <section id="projects" className="section-shell bg-ink px-5 py-24 text-white md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index={projectsSection.index}
          label={projectsSection.label}
          title={projectsSection.title}
          description={projectsSection.description}
          tone="dark"
        />

        <Stagger className="mt-16 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <StaggerItem key={project.title} y={26}>
                <article
                  className={`project-card group rounded-md border border-white/16 bg-white/[0.06] p-7 md:p-8 ${
                    isChinese ? "project-card-recruiter" : "project-card-editorial"
                  }`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="project-card-icon flex h-12 w-12 items-center justify-center rounded-md bg-white text-ink">
                      <Icon size={20} />
                    </div>
                    <span className="text-sm text-white/58">{project.period}</span>
                  </div>
                  {project.category ? (
                    <p className="mt-7 inline-flex rounded-full border border-white/18 px-3 py-1.5 text-sm font-medium text-white/78">
                      {project.category}
                    </p>
                  ) : null}
                  <p className="mt-8 text-sm text-white/62">{project.subtitle}</p>
                  <h3 className="mt-3 text-3xl font-semibold leading-tight">
                    {project.title}
                  </h3>
                  <p className="mt-5 text-base leading-7 text-white/74">
                    {project.summary}
                  </p>
                  {isChinese && project.problem && project.method && project.result && project.role ? (
                    <div className="mt-7 grid gap-3 text-sm leading-6 text-white/74">
                      {[
                        ["Problem", project.problem],
                        ["Method", project.method],
                        ["Result", project.result],
                        ["My Role", project.role]
                      ].map(([label, text]) => (
                        <div
                          key={label}
                          className="rounded-md border border-white/12 bg-white/[0.045] p-4"
                        >
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/46">
                            {label}
                          </p>
                          <p className="mt-2">{text}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.methods.map((method) => (
                      <span
                        key={method}
                        className="project-card-chip rounded-full border border-white/18 px-3 py-1.5 text-sm text-white/78"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                  {!isChinese ? (
                    <ul className="mt-8 grid gap-4 text-sm leading-7 text-white/72">
                      {project.outcomes.map((outcome) => (
                        <li key={outcome} className="flex gap-3">
                          <span className="mt-3 h-px w-6 shrink-0 bg-white/46" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
