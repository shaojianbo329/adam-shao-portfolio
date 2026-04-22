import { ArrowRight } from "lucide-react";
import { contactItems, personal } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Contact() {
  return (
    <section id="contact" className="section-shell bg-paper px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="07"
          label="Contact"
          title="Open to academic, research, and project conversations."
          description="A minimal contact module keeps the profile direct and professional while leaving room for future links such as GitHub or a lab profile."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="rounded-md border border-line bg-ink p-8 text-white md:p-10">
            <h3 className="text-4xl font-semibold md:text-6xl">Let&apos;s connect.</h3>
            <p className="mt-6 max-w-md text-lg leading-8 text-white/72">
              For research discussions, academic opportunities, data projects,
              or collaboration inquiries, email is the best first contact.
            </p>
            <a
              href={`mailto:${personal.email}`}
              className="button-quiet mt-9 inline-flex items-center gap-2 rounded-md bg-white px-6 py-4 text-sm font-semibold text-ink"
            >
              Email Adam <ArrowRight size={17} />
            </a>
          </Reveal>

          <div className="grid gap-4">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <div className="premium-card rounded-md p-6 md:p-7">
                  <div className="flex items-center gap-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-white text-ink ring-1 ring-line">
                      <Icon size={19} />
                    </div>
                    <div>
                      <p className="text-sm text-steel">{item.label}</p>
                      <p className="mt-1 text-xl font-semibold text-ink">{item.value}</p>
                    </div>
                  </div>
                </div>
              );

              return (
                <Reveal key={item.label} delay={index * 0.08}>
                  {item.href ? <a href={item.href}>{content}</a> : content}
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
