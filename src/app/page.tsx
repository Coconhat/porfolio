import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { BentoDemo } from "@/components/ui/BentoDemo";

export default function Home() {
  return (
    <div className="w-full h-128 mx-auto my-4 p-4 bg-background">
      <Header />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="projects">
        <BentoDemo />
      </section>

      <TapeSection />
      <section id="about">
        <AboutSection />
      </section>
      <TapeSection />
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}
