import { getPortfolioContent, type Locale } from "@/lib/content";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

type MethodsApproachProps = {
  locale: Locale;
};

export function MethodsApproach({ locale }: MethodsApproachProps) {
  const content = getPortfolioContent(locale);
  const { methods } = content;

  return (
    <section id="methods" className="section-shell bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index={methods.header.index}
          label={methods.header.label}
          title={methods.header.title}
          description={methods.header.description}
        />

        <Stagger className="mt-16 grid gap-5 lg:grid-cols-4" delay={0.1}>
          {methods.blocks.map((block) => {
            const Icon = block.icon;
            return (
              <StaggerItem
                key={block.title}
                className="premium-card rounded-md p-6 md:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-ink text-white">
                  <Icon size={19} />
                </div>
                <h3 className="mt-6 text-2xl font-semibold leading-tight text-ink">
                  {block.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-steel">{block.text}</p>
                <ul className="mt-6 grid gap-3 text-sm leading-6 text-steel">
                  {block.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-3 h-px w-5 shrink-0 bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
