import { Academic } from "@/components/Academic";
import { Competition } from "@/components/Competition";
import { FeaturedResearchProject } from "@/components/FeaturedResearchProject";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MethodsApproach } from "@/components/MethodsApproach";
import { Projects } from "@/components/Projects";
import { Research } from "@/components/Research";
import { ResumeContact } from "@/components/ResumeContact";
import { TechnicalDirection } from "@/components/TechnicalDirection";
import type { Locale } from "@/lib/content";

type PortfolioPageProps = {
  locale: Locale;
};

export function PortfolioPage({ locale }: PortfolioPageProps) {
  const lang = locale === "zh" ? "zh-CN" : "en";
  const isChinese = locale === "zh";

  return (
    <div lang={lang}>
      <Header locale={locale} />
      <main>
        <Hero locale={locale} />
        {isChinese ? (
          <>
            <Projects locale={locale} />
            <Academic locale={locale} />
            <Competition locale={locale} />
            <TechnicalDirection locale={locale} />
            <ResumeContact locale={locale} />
          </>
        ) : (
          <>
            <Research locale={locale} />
            <FeaturedResearchProject locale={locale} />
            <MethodsApproach locale={locale} />
            <Academic locale={locale} />
            <Competition locale={locale} />
            <ResumeContact locale={locale} />
          </>
        )}
      </main>
      <Footer locale={locale} />
    </div>
  );
}
