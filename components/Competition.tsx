import { competitions } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Competition() {
  return (
    <section id="competition" className="section-shell bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="03"
          label="Competition Experience"
          title="Evidence of analytical ability and disciplined initiative."
          description="Competition experience is presented as signal: quantitative strength, communication ability, and readiness to perform in structured settings."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {competitions.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delay={index * 0.1}
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
