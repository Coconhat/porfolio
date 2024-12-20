"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import CPlusPlusIcon from "@/assets/icons/cpluspluslogo.svg";
import NextJsIcon from "@/assets/icons/nextjs-2.svg";
import FramerMotionIcon from "@/assets/icons/framer-motion.svg";
import TailWindIcon from "@/assets/icons/tailwind-css-wordmark.svg";
import React, { useRef } from "react";
import mapImage from "@/assets/images/map6.jpg";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";

const hobbies = [
  {
    title: "Gym",
    emoji: "🏋",
    left: "5%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "50%",
    top: "5%",
  },
  {
    title: "Music",
    emoji: "♫",
    left: "10%",
    top: "35%",
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "35%",
    top: "40%",
  },
  {
    title: "Running",
    emoji: "🏃‍♂️",
    left: "70%",
    top: "45%",
  },
  {
    title: "Traveling",
    emoji: "✈️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Chess",
    emoji: "♟️",
    left: "43%",
    top: "65%",
  },
];

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML",
    iconType: HTMLIcon,
  },
  {
    title: "CSS",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "C++",
    iconType: CPlusPlusIcon,
  },
  {
    title: "Next.JS",
    iconType: NextJsIcon,
  },
  {
    title: "Framer Motion",
    iconType: FramerMotionIcon,
  },
  {
    title: "Tailwind",
    iconType: TailWindIcon,
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <section className="bg-background">
      <div className="py-20 lg:py-28 bg-vercel-gray-900 text-vercel-black">
        <div className="container">
          <SectionHeader
            eyebrow="About me"
            title="A glimpse Into My World"
            description="Learn more about who I am, What I do, and what inspire me"
          />
          <div className="mt-20 flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
              <Card className="h-[320px] md:col-span-2 lg:col-span-1">
                <CardHeader
                  title="My Reads"
                  description="Explore the books shaping my perspectives."
                />

                <div className="w-40 mx-auto mt-2 md:mt-0">
                  <Image src={bookImage} alt="Book cover" />
                </div>
              </Card>
              <Card className="h-[320px] md:col-span-3 lg:col-span-2">
                <CardHeader
                  title="My toolbox"
                  description="Explore the technologies and tools I use to craft exceptional digital experiences."
                  className=""
                />
                <ToolboxItems
                  items={toolboxItems}
                  className=""
                  itemsWrapperClassName="animate-move-left [animation-duration:30s]"
                />
                <ToolboxItems
                  items={toolboxItems}
                  className="mt-6"
                  itemsWrapperClassName="animate-move-right [animation-duration:15s]"
                />
              </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
              <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
                <CardHeader
                  title="Beyond the Code"
                  description="Discover my interests and hobbies outside of the digital space."
                  className="px-6 py-6"
                />

                <div className="relative flex-1" ref={constraintRef}>
                  {hobbies.map((hobby) => (
                    <motion.div
                      key={hobby.title}
                      className="inline-flex items-center gap-2 px-6 bg-vercel-gray-800 rounded-full py-1.5 absolute"
                      style={{
                        left: hobby.left,
                        top: hobby.top,
                      }}
                      drag
                      dragConstraints={constraintRef}
                    >
                      <span className="font-medium text-vercel-white">
                        {hobby.title}
                      </span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
              <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
                <Image
                  src={mapImage}
                  alt="map"
                  className="h-full w-full object-cover object-left-top"
                  style={{ filter: "grayscale(100%)" }}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-vercel-gray-700">
                  <div className="absolute inset-0 rounded-full bg-vercel-gray-800 -z-20 animate-ping [animation-duration:2s]"></div>
                  <div className="absolute inset-0 rounded-full bg-vercel-gray-800 -z-10"></div>
                  <Image src={smileMemoji} alt="memoji" className="size-20" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
