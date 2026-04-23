import { ArrowRight, Download, Eye } from "lucide-react";
import { getPortfolioContent, type Locale } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

type ResumeContactProps = {
  locale: Locale;
};

export function ResumeContact({ locale }: ResumeContactProps) {
  const content = getPortfolioContent(locale);
  const { contact, personal, resume } = content;

  return (
    <section id="resume" className="section-shell bg-paper px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index={resume.header.index}
          label={resume.header.label}
          title={resume.header.title}
          description={resume.header.description}
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="rounded-md border border-line bg-white p-7 md:p-10">
            <p className="text-sm text-steel">{resume.eyebrow}</p>
            <h3 className="mt-3 text-3xl font-semibold text-ink md:text-5xl">
              {resume.title}
            </h3>
            <p className="mt-5 max-w-xl text-base leading-8 text-steel">
              {resume.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={personal.resumePath}
                target="_blank"
                rel="noreferrer"
                className="button-quiet inline-flex items-center justify-center gap-2 rounded-md border border-ink bg-ink px-6 py-4 text-sm font-semibold text-white"
              >
                <Eye size={17} /> {resume.viewLabel}
              </a>
              <a
                href={personal.resumePath}
                download
                className="button-quiet inline-flex items-center justify-center gap-2 rounded-md border border-line bg-paper px-6 py-4 text-sm font-semibold text-ink"
              >
                <Download size={17} /> {resume.downloadLabel}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="rounded-md border border-line bg-ink p-7 text-white md:p-10">
            <h3 className="text-3xl font-semibold leading-tight md:text-5xl">
              {contact.title}
            </h3>
            <p className="mt-6 text-base leading-8 text-white/72">
              {contact.description}
            </p>
            <a
              href={`mailto:${personal.email}`}
              className="button-quiet mt-8 inline-flex items-center gap-2 rounded-md bg-white px-6 py-4 text-sm font-semibold text-ink"
            >
              {contact.buttonLabel} <ArrowRight size={17} />
            </a>
            <div className="mt-9 grid gap-3">
              {contact.items.map((item) => {
                const Icon = item.icon;
                const row = (
                  <div className="rounded-md border border-white/12 bg-white/[0.06] p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-ink">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-sm text-white/54">{item.label}</p>
                        <p className="mt-1 font-semibold text-white">{item.value}</p>
                      </div>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a key={item.label} href={item.href}>
                    {row}
                  </a>
                ) : (
                  <div key={item.label}>{row}</div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
