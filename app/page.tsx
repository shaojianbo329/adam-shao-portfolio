import type { Metadata } from "next";
import { PortfolioPage } from "@/components/PortfolioPage";

export const metadata: Metadata = {
  title: "邵剑波 | AI 产品 / 数据分析实习作品集",
  description:
    "邵剑波的中文求职作品集，面向 AI 产品实习与数据分析实习，突出 LLM 应用、用户行为分析、策略分析、数据建模与项目落地。",
  alternates: {
    canonical: "/",
    languages: {
      "zh-CN": "/",
      en: "/en"
    }
  },
  openGraph: {
    title: "邵剑波 | AI 产品 / 数据分析实习作品集",
    description:
      "北京邮电大学本科生，聚焦 AI 产品、数据分析、LLM 应用、用户洞察、策略分析与数据建模。",
    url: "/",
    type: "website",
    images: ["/images/adam-shao-portrait.png"]
  }
};

export default function Home() {
  return <PortfolioPage locale="zh" />;
}
