import type { Metadata } from "next";
import { PortfolioPage } from "@/components/PortfolioPage";

export const metadata: Metadata = {
  title: "Adam Shao | Academic Research Profile",
  description:
    "Graduate-school oriented academic profile for Adam Shao, focused on data systems, behavior simulation, digital twin modeling, and LLM-oriented intelligence.",
  alternates: {
    canonical: "/en",
    languages: {
      "zh-CN": "/",
      en: "/en"
    }
  },
  openGraph: {
    title: "Adam Shao | Academic Research Profile",
    description:
      "Research interests in data-centric intelligence, user-level digital twin simulation, offline policy evaluation, and LLM-oriented systems.",
    url: "/en",
    type: "website",
    images: ["/images/adam-shao-portrait.png"]
  }
};

export default function EnglishHome() {
  return <PortfolioPage locale="en" />;
}
