"use client";

import { NavbarDemo } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { BentoDemo } from "@/components/ui/BentoDemo";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-auto">
      <div className="w-full mx-auto my-4 p-4 bg-background">
        <NavbarDemo />
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

      <ProgressiveBlur height="30%" position="bottom" />
    </div>
  );
}
