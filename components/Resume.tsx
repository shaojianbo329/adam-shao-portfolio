import { Download, Eye } from "lucide-react";
import { personal } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Resume() {
  return (
    <section id="resume" className="section-shell bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="06"
          label="Resume / CV"
          title="A factual CV source for deeper review."
          description="The uploaded resume is included as the source document for academic background, projects, honors, skills, and contact details."
        />

        <Reveal className="mt-16 rounded-md border border-line bg-paper p-7 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm text-steel">PDF Resume</p>
              <h3 className="mt-3 text-3xl font-semibold text-ink md:text-5xl">
                Adam Shao CV
              </h3>
              <p className="mt-5 max-w-xl text-base leading-8 text-steel">
                View or download the original resume file. Website content is
                intentionally editable, but factual achievements should continue
                to be updated from this source.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href={personal.resumePath}
                target="_blank"
                rel="noreferrer"
                className="button-quiet inline-flex items-center justify-center gap-2 rounded-md border border-ink bg-ink px-6 py-4 text-sm font-semibold text-white"
              >
                <Eye size={17} /> View Resume
              </a>
              <a
                href={personal.resumePath}
                download
                className="button-quiet inline-flex items-center justify-center gap-2 rounded-md border border-line bg-white px-6 py-4 text-sm font-semibold text-ink"
              >
                <Download size={17} /> Download PDF
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
