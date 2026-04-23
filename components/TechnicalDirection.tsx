import { getPortfolioContent, type Locale } from "@/lib/content";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

type TechnicalDirectionProps = {
  locale: Locale;
};

export function TechnicalDirection({ locale }: TechnicalDirectionProps) {
  const content = getPortfolioContent(locale);
  const { technical } = content;

  return (
    <section id="technical" className="section-shell bg-paper px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index={technical.header.index}
          label={technical.header.label}
          title={technical.header.title}
          description={technical.header.description}
        />

        <Stagger className="mt-16 grid gap-5 md:grid-cols-3">
          {technical.groups.map((group) => {
            const Icon = group.icon;
            return (
              <StaggerItem
                key={group.title}
                className="premium-card rounded-md p-6 md:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-ink text-white">
                  <Icon size={19} />
                </div>
                <h3 className="mt-6 text-2xl font-semibold leading-tight text-ink">
                  {group.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-steel">
                  {group.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-white/72 px-3 py-1.5 text-sm font-medium text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
