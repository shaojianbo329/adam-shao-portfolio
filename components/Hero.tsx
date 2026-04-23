"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowRight, Download, Mail } from "lucide-react";
import { getPortfolioContent, type Locale } from "@/lib/content";
import { PageLoad, Stagger, StaggerItem } from "@/components/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

type HeroProps = {
  locale: Locale;
};

export function Hero({ locale }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const content = getPortfolioContent(locale);
  const { brandMetrics, hero, personal } = content;
  const isAcademic = hero.variant === "academic";
  const isJob = hero.variant === "job";
  const gridMotion = isAcademic
    ? { to: "12px 10px", duration: 46 }
    : { to: "18px 12px", duration: 32 };
  const heroTiming = isAcademic
    ? { heading: 0.14, highlights: 0.28, intro: 0.34, ctas: 0.48, portrait: 0.42 }
    : { heading: 0.08, highlights: 0.14, intro: 0.2, ctas: 0.28, portrait: 0.3 };
  const iconByName = {
    arrow: ArrowRight,
    download: Download,
    mail: Mail
  };
  const ctaClass = {
    primary:
      "bg-ink text-white shadow-lift hover:shadow-[0_18px_44px_rgba(12,20,36,0.18)]",
    secondary:
      "border border-line bg-white/70 text-ink hover:border-ink/30 hover:bg-white",
    tertiary:
      "px-2 text-steel hover:text-ink"
  };

  return (
    <section
      id="top"
      className="relative isolate min-h-screen overflow-hidden bg-paper px-5 pb-10 pt-24 md:px-8 md:pt-28"
    >
      <motion.div
        aria-hidden="true"
        className="site-grid pointer-events-none absolute inset-0"
        animate={
          prefersReducedMotion
            ? undefined
            : { backgroundPosition: ["0px 0px", gridMotion.to] }
        }
        transition={{
          duration: gridMotion.duration,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror"
        }}
      />
      <div className="absolute inset-x-0 top-16 h-px bg-line" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="relative z-10 pt-8 lg:pb-14">
          <PageLoad>
            <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-steel">
              <span className="rounded-full border border-line bg-white/70 px-4 py-2">
                {hero.eyebrow}
              </span>
              <span className="hidden h-px w-16 bg-line sm:block" />
              <span>{personal.title}</span>
            </div>
          </PageLoad>

          <PageLoad delay={heroTiming.heading} y={isAcademic ? 18 : 14}>
            <h1
              className={`max-w-5xl font-semibold text-ink ${
                isAcademic
                  ? "text-4xl leading-[1.04] md:text-6xl xl:text-7xl"
                  : "text-6xl leading-[0.96] md:text-8xl xl:text-9xl"
              }`}
            >
              {hero.titleLines.map((line, index) => (
                <span
                  key={line}
                  className={index === 0 ? "block" : "block text-navy"}
                >
                  {line}
                </span>
              ))}
            </h1>
          </PageLoad>

          {hero.highlights.length > 0 ? (
            <Stagger
              className="mt-6 flex max-w-3xl flex-wrap gap-2.5"
              delay={heroTiming.highlights}
            >
              {hero.highlights.map((highlight) => (
                <StaggerItem
                  key={highlight}
                  y={10}
                  className="rounded-full border border-line bg-white/78 px-4 py-2 text-sm font-semibold text-ink shadow-[0_1px_0_rgba(12,20,36,0.04)]"
                >
                  {highlight}
                </StaggerItem>
              ))}
            </Stagger>
          ) : null}

          <PageLoad delay={heroTiming.intro} y={isAcademic ? 18 : 12}>
            <div className="mt-7 flex flex-col gap-4 border-l border-ink pl-5 md:max-w-2xl">
              <p className="text-2xl font-medium text-ink md:text-3xl">
                {hero.profileLabel}
              </p>
              <p className="text-xl leading-8 text-navy md:text-2xl">
                {personal.tagline}
              </p>
              <p className="max-w-xl text-base leading-8 text-steel md:text-lg">
                {personal.intro}
              </p>
            </div>
          </PageLoad>

          <Stagger
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            delay={heroTiming.ctas}
          >
            {hero.ctas.map((cta) => {
              const Icon = iconByName[cta.icon];
              return (
                <StaggerItem key={cta.label} y={10}>
                  <a
                  key={cta.label}
                  href={cta.href}
                  download={cta.download}
                    className={`button-quiet button-press inline-flex items-center justify-center gap-2 rounded-md px-6 py-4 text-sm font-semibold ${
                      isJob && cta.download ? "resume-cta-job " : ""
                    }${ctaClass[cta.style]}`}
                  >
                    <Icon size={17} /> {cta.label}
                  </a>
                </StaggerItem>
              );
            })}
            {hero.ctas.every((cta) => cta.href !== personal.resumePath) ? (
              <StaggerItem y={10}>
                <a
                  href={personal.resumePath}
                  className="button-quiet button-press inline-flex items-center justify-center gap-2 rounded-md px-2 py-4 text-sm font-semibold text-steel hover:text-ink"
                >
                  <Download size={17} /> CV
                </a>
              </StaggerItem>
            ) : null}
          </Stagger>
        </div>

        <motion.div
          className="relative min-h-[540px] lg:min-h-[680px]"
          initial={{
            opacity: 0,
            y: prefersReducedMotion ? 0 : 28,
            scale: prefersReducedMotion ? 1 : 0.98
          }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: isAcademic ? 1.05 : 0.82,
            delay: heroTiming.portrait,
            ease
          }}
        >
          <motion.div
            className="absolute left-0 top-8 z-10 hidden rounded-md border border-line bg-white/78 p-4 text-sm text-steel shadow-lift backdrop-blur md:block"
            initial={{
              opacity: 0,
              y: prefersReducedMotion ? 0 : 12,
              filter: prefersReducedMotion ? "none" : "blur(4px)"
            }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: isAcademic ? 0.82 : 0.62,
              delay: isAcademic ? 1.05 : 0.72,
              ease
            }}
          >
            <div className="flex items-center gap-2 text-ink">
              <ArrowDownRight size={16} />
              {hero.floatingBadge}
            </div>
          </motion.div>
          <motion.div
            className="portrait-mask absolute inset-x-0 bottom-0 top-0 overflow-hidden border border-line bg-mist shadow-lift"
            initial={{
              clipPath: prefersReducedMotion
                ? "inset(0% 0% 0% 0% round 6px)"
                : "inset(9% 0% 12% 0% round 6px)",
              opacity: 0,
              y: prefersReducedMotion ? 0 : isAcademic ? 16 : 20,
              filter: prefersReducedMotion ? "none" : isAcademic ? "blur(7px)" : "blur(9px)"
            }}
            animate={{
              clipPath: "inset(0% 0% 0% 0% round 6px)",
              opacity: 1,
              y: 0,
              filter: "blur(0px)"
            }}
            whileHover={prefersReducedMotion ? undefined : { scale: 1.01 }}
            transition={{
              duration: isAcademic ? 1.18 : 0.92,
              delay: heroTiming.portrait,
              ease
            }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: prefersReducedMotion ? 1 : isAcademic ? 1.035 : 1.05 }}
              animate={{ scale: 1 }}
              transition={{
                duration: isAcademic ? 1.4 : 1.12,
                delay: heroTiming.portrait,
                ease
              }}
            >
              <Image
                src={personal.portrait}
                alt={hero.portraitAlt}
                fill
                priority
                sizes="(min-width: 1024px) 46vw, 92vw"
                className="object-cover object-[50%_24%]"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-white/10" />
          </motion.div>
          <motion.div
            className="absolute -right-5 bottom-6 z-10 rounded-md border border-white/30 bg-ink/90 px-5 py-4 text-white shadow-lift backdrop-blur"
            initial={{
              opacity: 0,
              x: prefersReducedMotion ? 0 : 16,
              y: prefersReducedMotion ? 0 : 8
            }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              duration: isAcademic ? 0.82 : 0.66,
              delay: isAcademic ? 1.12 : 0.86,
              ease
            }}
          >
            <p className="text-sm text-white/72">{hero.focusLabel}</p>
            <p className="mt-1 text-xl font-semibold">{hero.focusValue}</p>
          </motion.div>
        </motion.div>
      </div>

      <Stagger
        className="mx-auto mt-10 grid max-w-7xl grid-cols-2 border-y border-line bg-white/55 md:grid-cols-4"
        delay={0.34}
      >
        {brandMetrics.map((metric) => (
          <StaggerItem
            key={metric.label}
            className="min-h-28 border-line p-5 odd:border-r md:border-r md:last:border-r-0"
          >
            <p className="text-sm text-steel">{metric.label}</p>
            <p className="mt-3 text-2xl font-semibold text-ink">{metric.value}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
