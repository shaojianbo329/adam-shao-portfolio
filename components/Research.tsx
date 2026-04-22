import { researchInterests } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Research() {
  return (
    <section id="research" className="section-shell bg-paper px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="05"
          label="Research Interests"
          title="LLM as the central intellectual direction."
          description="This section frames current interests without claiming publications or research outcomes that are not in the resume."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal className="rounded-md border border-line bg-ink p-8 text-white md:p-10">
            <p className="text-sm text-white/60">Core theme</p>
            <h3 className="mt-4 text-5xl font-semibold md:text-7xl">LLM</h3>
            <p className="mt-8 max-w-md text-lg leading-8 text-white/72">
              A research direction connecting language, data, reasoning, and
              intelligent systems that can be evaluated with discipline.
            </p>
          </Reveal>

          <div className="grid gap-4">
            {researchInterests.map((interest, index) => (
              <Reveal
                key={interest.title}
                delay={index * 0.08}
                className="premium-card rounded-md p-6 md:p-7"
              >
                <div className="grid gap-4 md:grid-cols-[0.32fr_0.68fr] md:items-start">
                  <h3 className="text-2xl font-semibold text-ink">{interest.title}</h3>
                  <p className="text-base leading-8 text-steel">{interest.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
