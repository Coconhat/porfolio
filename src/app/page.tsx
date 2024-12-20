import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div className="bg-background">
      <Header />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>

      <TapeSection />
      <section id="about">
        <AboutSection />
      </section>
      <TapeSection />
      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </div>
  );
}
