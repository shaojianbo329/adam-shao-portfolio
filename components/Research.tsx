import { getPortfolioContent, type Locale } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

type ResearchProps = {
  locale: Locale;
};

export function Research({ locale }: ResearchProps) {
  const content = getPortfolioContent(locale);
  const { research } = content;
  const isAcademic = locale === "en";

  return (
    <section id="research" className="section-shell bg-paper px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index={research.header.index}
          label={research.header.label}
          title={research.header.title}
          description={research.header.description}
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal className="rounded-md border border-line bg-ink p-8 text-white md:p-10">
            <p className="text-sm text-white/60">{research.coreLabel}</p>
            <h3 className="mt-4 text-5xl font-semibold md:text-7xl">
              {research.coreTitle}
            </h3>
            <p className="mt-8 max-w-md text-lg leading-8 text-white/72">
              {research.coreText}
            </p>
          </Reveal>

          <Stagger className="grid gap-4" delay={isAcademic ? 0.1 : 0.02}>
            {research.interests.map((interest) => (
              <StaggerItem
                key={interest.title}
                className="premium-card rounded-md p-6 md:p-7"
              >
                <div className="grid gap-4 md:grid-cols-[0.32fr_0.68fr] md:items-start">
                  <h3 className="text-2xl font-semibold text-ink">{interest.title}</h3>
                  <p className="text-base leading-8 text-steel">{interest.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
