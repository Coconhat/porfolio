"use client";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className=" py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip bg-vercel-white text-vercel-black">
      <div className="absolute inset-0 z-10">
       
      </div>
      <div className="container relative z-20">
        <div className="flex flex-col items-start">
          <div className="bg-vercel-black border border-vercel-black px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative ">
              <div className="bg-green-950 absolute inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="text-sm font-medium text-white">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg text-left">
          <h1 className="font-serif text-3xl md:text-5xl mt-8 tracking-wide">
            Building Exceptional
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

          <p className="mt-4 text-gray-400 md:text-lg">
            Hi! I&rsquo;m{" "}
            <a
              href="https://github.com/Coconhat"
              className="relative inline-block text-white/80 hover:text-white before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-transparent hover:before:bg-gray-800 before:z-[-1] animate-soft-bounce hover:animate-none"
            >
              Nhat Vu
            </a>
            . I&rsquo;m passionate about building exceptional digital
            experiences that make an impact through user-centered design and
            seamless functionality. My goal is to bring ideas to life with
            thoughtful design and technical precision, helping you connect with
            your audience and achieve your vision.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-start items-center mt-8 gap-4 z-30">
          <Link href="#projects">
            <button className="inline-flex items-center gap-2 border border-gray-700 px-6 h-12 rounded-xl">
              <span className="font-semibold">Explore My Work</span>
              <ArrowDown className="size-4" />
            </button>
          </Link>
          <Link href="#contact">
            <button className="inline-flex items-center gap-2 border border-gray-700 bg-gray-800 text-white h-12 px-6 rounded-xl">
              <span>👋</span>
              <span className="font-semibold">Let&apos;s Connect</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
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
