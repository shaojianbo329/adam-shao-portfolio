import { About } from "@/components/About";
import { Academic } from "@/components/Academic";
import { Competition } from "@/components/Competition";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Research } from "@/components/Research";
import { Resume } from "@/components/Resume";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Academic />
        <Competition />
        <Projects />
        <Research />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
