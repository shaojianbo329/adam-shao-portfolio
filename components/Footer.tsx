import { personal } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-steel md:flex-row md:items-center md:justify-between">
        <p>
          {personal.nameEn} / {personal.nameCn}
        </p>
        <p>Built for a focused personal brand in data, research, and LLM.</p>
      </div>
    </footer>
  );
}
