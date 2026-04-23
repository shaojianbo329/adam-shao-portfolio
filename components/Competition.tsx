import { getPortfolioContent, type Locale } from "@/lib/content";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

type CompetitionProps = {
  locale: Locale;
};

export function Competition({ locale }: CompetitionProps) {
  const content = getPortfolioContent(locale);
  const { competition } = content;

  return (
    <section id="competition" className="section-shell bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index={competition.header.index}
          label={competition.header.label}
          title={competition.header.title}
          description={competition.header.description}
        />

        <Stagger className="mt-16 grid gap-5 md:grid-cols-2">
          {competition.items.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem
                key={item.title}
                className="premium-card rounded-md p-7 md:p-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-ink text-white">
                    <Icon size={20} />
                  </div>
                  <span className="text-sm text-steel">{item.period}</span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold leading-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-lg text-navy">{item.result}</p>
                <p className="mt-5 text-base leading-7 text-steel">
                  {item.description}
                </p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
