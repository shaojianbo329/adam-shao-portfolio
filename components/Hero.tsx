"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowRight, Download, Mail } from "lucide-react";
import { brandMetrics, personal } from "@/lib/content";
import { PageLoad } from "@/components/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="site-grid relative isolate min-h-screen overflow-hidden bg-paper px-5 pb-10 pt-24 md:px-8 md:pt-28"
    >
      <div className="absolute inset-x-0 top-16 h-px bg-line" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="relative z-10 pt-8 lg:pb-14">
          <PageLoad>
            <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-steel">
              <span className="rounded-full border border-line bg-white/70 px-4 py-2">
                Personal Brand Portfolio
              </span>
              <span className="hidden h-px w-16 bg-line sm:block" />
              <span>{personal.title}</span>
            </div>
          </PageLoad>

          <PageLoad delay={0.08}>
            <h1 className="max-w-5xl text-6xl font-semibold leading-[0.96] text-ink md:text-8xl xl:text-9xl">
              Adam
              <span className="block text-navy">Shao</span>
            </h1>
          </PageLoad>

          <PageLoad delay={0.16}>
            <div className="mt-7 flex flex-col gap-4 border-l border-ink pl-5 md:max-w-2xl">
              <p className="text-2xl font-medium text-ink md:text-3xl">
                {personal.nameCn}
              </p>
              <p className="text-xl leading-8 text-navy md:text-2xl">
                {personal.tagline}
              </p>
              <p className="max-w-xl text-base leading-8 text-steel md:text-lg">
                {personal.intro}
              </p>
            </div>
          </PageLoad>

          <PageLoad
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            delay={0.24}
          >
            <a
              href="#projects"
              className="button-quiet inline-flex items-center justify-center gap-2 rounded-md bg-ink px-6 py-4 text-sm font-semibold text-white shadow-lift"
            >
              View My Work <ArrowRight size={17} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="button-quiet inline-flex items-center justify-center gap-2 rounded-md border border-line bg-white/70 px-6 py-4 text-sm font-semibold text-ink"
            >
              <Mail size={17} /> Contact Me
            </a>
            <a
              href={personal.resumePath}
              className="button-quiet inline-flex items-center justify-center gap-2 rounded-md px-2 py-4 text-sm font-semibold text-steel hover:text-ink"
            >
              <Download size={17} /> CV
            </a>
          </PageLoad>
        </div>

        <motion.div
          className="relative min-h-[540px] lg:min-h-[680px]"
          initial={{
            opacity: 0,
            y: prefersReducedMotion ? 0 : 28,
            scale: prefersReducedMotion ? 1 : 0.98
          }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.18, ease }}
        >
          <div className="absolute left-0 top-8 z-10 hidden rounded-md border border-line bg-white/78 p-4 text-sm text-steel shadow-lift backdrop-blur md:block">
            <div className="flex items-center gap-2 text-ink">
              <ArrowDownRight size={16} />
              Research-ready profile
            </div>
          </div>
          <motion.div
            className="portrait-mask absolute inset-x-0 bottom-0 top-0 overflow-hidden border border-line bg-mist shadow-lift"
            whileHover={prefersReducedMotion ? undefined : { scale: 1.012 }}
            transition={{ duration: 0.42, ease }}
          >
            <Image
              src={personal.portrait}
              alt="Portrait of Adam Shao"
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 92vw"
              className="object-cover object-[50%_24%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-white/10" />
          </motion.div>
          <div className="absolute -right-5 bottom-6 z-10 rounded-md border border-white/30 bg-ink/90 px-5 py-4 text-white shadow-lift backdrop-blur">
            <p className="text-sm text-white/72">Current focus</p>
            <p className="mt-1 text-xl font-semibold">LLM + Data Systems</p>
          </div>
        </motion.div>
      </div>

      <PageLoad
        className="mx-auto mt-10 grid max-w-7xl grid-cols-2 border-y border-line bg-white/55 md:grid-cols-4"
        delay={0.34}
      >
        {brandMetrics.map((metric) => (
          <div
            key={metric.label}
            className="min-h-28 border-line p-5 odd:border-r md:border-r md:last:border-r-0"
          >
            <p className="text-sm text-steel">{metric.label}</p>
            <p className="mt-3 text-2xl font-semibold text-ink">{metric.value}</p>
          </div>
        ))}
      </PageLoad>
    </section>
  );
}
