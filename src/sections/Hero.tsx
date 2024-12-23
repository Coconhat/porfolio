"use client";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import React from 'react';
import { ParticlesDemo } from "@/components/ui/Particle";
import { RainbowButton } from "@/components/ui/rainbow-button";
import SparklesText from "@/components/ui/sparkles-text";


export const HeroSection = () => {
  return (
    <div className="w-full h-128 mx-auto my-2 p-4">
      <section className="py-24 md:py-36 lg:py-48 relative z-0 overflow-x-clip bg-vercel-white text-vercel-black">
        <ParticlesDemo />
        <div className="absolute inset-0 z-10"></div>
        <div className="container relative z-30">
          <div className="flex flex-col items-start">
            <div className="bg-vercel-black border border-vercel-black px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
              <div className="bg-green-500 size-2.5 rounded-full relative">
                <div className="bg-green-950 absolute inset-0 animate-ping-large rounded-full"></div>
              </div>
              <div className="text-sm font-bold text-white">
                Available for new projects
              </div>
            </div>
          </div>
          <div className="max-w-lg text-left">
            <h1 className="text-3xl md:text-5xl mt-6 tracking-wide font-bold">
              {<SparklesText text="Buiding Great"/>}
              <div
                style={{
                  minHeight: "1.5em",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <TypeAnimation
                  sequence={[
                    "User Experiences",
                    800,
                    "Digital Interactions",
                    800,
                    "User Journeys",
                    800,
                    "Designs",
                    800,
                    "Digital Engagements",
                    1000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  speed={40}
                  style={{
                    display: "inline-block",
                    whiteSpace: "nowrap",
                  }}
                />
              </div>
            </h1>

            <p className="mt-2 text-gray-400 md:text-lg">
              Hi! I&rsquo;m{" "}
              <span
              
                className="relative inline-block text-white/30 hover:text-white before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-transparent hover:before:bg-gray-800 before:z-[-1] animate-soft-bounce hover:animate-none"
              >
                Nhat Vu
              </span>
              . I&rsquo;m a 2nd year De La Salle Lipa student who loves building
              tools to solve real-world problems. I enjoy taking on challenges
              that push me to learn new skills while creating solutions that
              matter.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-start items-center mt-4 gap-4 z-30">
            <Link href="#projects">
              <button className="inline-flex items-center gap-2 border border-gray-700 px-6 h-12 rounded-xl">
                <span className="font-semibold">Explore My Work</span>
                <ArrowDown className="size-4" />
              </button>
            </Link>
            <Link href="#contact">
              <RainbowButton>
                <span>👋</span>
                <span className="font-semibold">Let&apos;s Connect</span>
              </RainbowButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-gray-700 rounded-full bg-gray-800 backdrop-blur">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#" className="nav-item">
          Projects
        </a>
        <a href="#" className="nav-item">
          About
        </a>
        <a
          href="#"
          className="nav-item bg-gray-700 text-white hover:bg-gray-600"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
