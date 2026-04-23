import { getPortfolioContent, type Locale } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

type AboutProps = {
  locale: Locale;
};

export function About({ locale }: AboutProps) {
  const content = getPortfolioContent(locale);
  const { about } = content;

  return (
    <section id="about" className="section-shell bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index={about.header.index}
          label={about.header.label}
          title={about.header.title}
          description={about.header.description}
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal className="rounded-md border border-line bg-paper p-8 md:p-10">
            <p className="font-serif text-3xl leading-snug text-ink md:text-5xl">
              {about.statement}
            </p>
          </Reveal>

          <div className="grid gap-4">
            {about.highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.label}
                  delay={index * 0.08}
                  className="premium-card rounded-md p-6 md:p-7"
                >
                  <div className="flex gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-ink text-white">
                      <Icon size={19} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-ink">{item.label}</h3>
                      <p className="mt-3 text-base leading-7 text-steel">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
