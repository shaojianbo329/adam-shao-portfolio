import { getPortfolioContent, type Locale } from "@/lib/content";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

type AcademicProps = {
  locale: Locale;
};

export function Academic({ locale }: AcademicProps) {
  const content = getPortfolioContent(locale);
  const { academic } = content;

  return (
    <section id="academic" className="section-shell bg-paper px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index={academic.header.index}
          label={academic.header.label}
          title={academic.header.title}
          description={academic.header.description}
        />

        <Stagger className="mt-16 grid gap-5">
          {academic.experience.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.institution}>
                <article className="premium-card grid gap-6 rounded-md p-6 md:grid-cols-[0.26fr_0.74fr] md:p-8">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-ink text-white">
                      <Icon size={20} />
                    </div>
                    <p className="mt-5 text-sm text-steel">{item.period}</p>
                    <p className="mt-1 text-sm text-steel">{item.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-steel">{item.meta}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-ink md:text-3xl">
                      {item.institution}
                    </h3>
                    <p className="mt-2 text-lg text-navy">{item.role}</p>
                    <ul className="mt-6 grid gap-3 text-base leading-7 text-steel">
                      {item.details.map((detail) => (
                        <li key={detail} className="flex gap-3">
                          <span className="mt-3 h-px w-6 shrink-0 bg-accent" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
