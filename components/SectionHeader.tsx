import { Reveal } from "@/components/Reveal";

type SectionHeaderProps = {
  index: string;
  label: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
};

export function SectionHeader({
  index,
  label,
  title,
  description,
  tone = "light"
}: SectionHeaderProps) {
  const isDark = tone === "dark";

  return (
    <Reveal className="grid gap-8 md:grid-cols-[0.36fr_1fr] md:items-end">
      <div
        className={`flex items-center gap-4 text-sm ${isDark ? "text-white/58" : "text-steel"}`}
      >
        <span className={`font-medium ${isDark ? "text-white" : "text-ink"}`}>
          {index}
        </span>
        <span className={`h-px w-12 ${isDark ? "bg-white/24" : "bg-line"}`} />
        <span>{label}</span>
      </div>
      <div className="max-w-4xl">
        <h2
          className={`text-4xl font-semibold leading-[1.05] md:text-6xl ${isDark ? "text-white" : "text-ink"}`}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={`mt-5 max-w-2xl text-base leading-8 md:text-lg ${isDark ? "text-white/68" : "text-steel"}`}
          >
            {description}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
