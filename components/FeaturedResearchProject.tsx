import { getPortfolioContent, type Locale } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

type FeaturedResearchProjectProps = {
  locale: Locale;
};

export function FeaturedResearchProject({ locale }: FeaturedResearchProjectProps) {
  const content = getPortfolioContent(locale);
  const { featuredResearch } = content;

  return (
    <section
      id="featured-research"
      className="section-shell bg-ink px-5 py-24 text-white md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index={featuredResearch.header.index}
          label={featuredResearch.header.label}
          title={featuredResearch.header.title}
          description={featuredResearch.header.description}
          tone="dark"
        />

        <Reveal className="featured-research-panel mt-16 rounded-md border border-white/16 bg-white/[0.06] p-7 shadow-lift md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <Stagger>
              <StaggerItem y={14}>
                <p className="text-sm font-medium text-white/58">
                  {featuredResearch.eyebrow}
                </p>
              </StaggerItem>
              <StaggerItem y={18}>
                <h3 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
                  {featuredResearch.title}
                </h3>
              </StaggerItem>
              <StaggerItem y={12}>
                <p className="mt-5 inline-flex rounded-full border border-white/18 px-4 py-2 text-sm text-white/74">
                  {featuredResearch.status}
                </p>
              </StaggerItem>
              <StaggerItem y={16}>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-white/74">
                  {featuredResearch.summary}
                </p>
              </StaggerItem>
            </Stagger>

            <div className="grid gap-5">
              <Reveal
                delay={0.12}
                className="rounded-md border border-white/14 bg-white/[0.05] p-6"
              >
                <p className="text-sm text-white/58">{featuredResearch.whyTitle}</p>
                <p className="mt-4 text-base leading-8 text-white/74">
                  {featuredResearch.whyText}
                </p>
              </Reveal>
              <Stagger className="grid gap-4 md:grid-cols-2" delay={0.16}>
                <StaggerItem className="rounded-md border border-white/14 bg-white/[0.05] p-6">
                  <p className="text-sm font-medium text-white">Inputs</p>
                  <ul className="mt-5 grid gap-3 text-sm leading-6 text-white/70">
                    {featuredResearch.inputs.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-3 h-px w-5 shrink-0 bg-white/42" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </StaggerItem>
                <StaggerItem className="rounded-md border border-white/14 bg-white/[0.05] p-6">
                  <p className="text-sm font-medium text-white">Outputs</p>
                  <ul className="mt-5 grid gap-3 text-sm leading-6 text-white/70">
                    {featuredResearch.outputs.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-3 h-px w-5 shrink-0 bg-white/42" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </StaggerItem>
              </Stagger>
              <Stagger className="flex flex-wrap gap-2" delay={0.22}>
                {featuredResearch.methods.map((method) => (
                  <StaggerItem
                    key={method}
                    className="rounded-full border border-white/18 px-3 py-1.5 text-sm text-white/76"
                  >
                    {method}
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
