"use client";
import SparklesText from "@/components/ui/sparkles-text";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import myPicture from "@/assets/images/nhatvucrop.jpg";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/javascriptIcon.svg";
import ReactIcon from "@/assets/icons/reactIcon.svg";
import GithubIcon from "@/assets/icons/github.svg";
import CPlusPlusIcon from "@/assets/icons/cpluspluslogo.svg";
import NextJsIcon from "@/assets/icons/nextjs-2.svg";
import FramerMotionIcon from "@/assets/icons/framer-motion.svg";
import TailWindIcon from "@/assets/icons/tailwind-css-wordmark.svg";
import React, { useRef, useState } from "react";
import mapImage from "@/assets/images/map6.jpg";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { RainbowButton } from "@/components/ui/rainbow-button";
import pythonIcon from "@/assets/icons/pythonLogo.svg";
import vercelIcon from "@/assets/icons/vercelIcon.svg";
import javaIcon from "@/assets/icons/javaIcon.svg";
import supabaseIcon from "@/assets/icons/supabase.svg";
import dockerIcon from "@/assets/icons/docker.svg";
import firebaseIcon from "@/assets/icons/firebase.svg";
import cloudflareIcon from "@/assets/icons/cloudflare.svg";
import expressjsIcon from "@/assets/icons/expressjs.svg";

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
  {
    title: "Python",
    iconType: pythonIcon,
  },
  {
    title: "Vercel",
    iconType: vercelIcon,
  },
  {
    title: "Java",
    iconType: javaIcon,
  },
  {
    title: "Supabase",
    iconType: supabaseIcon,
  },
  {
    title: "Firebase",
    iconType: firebaseIcon,
  },
  {
    title: "Docker",
    iconType: dockerIcon,
  },
  {
    title: "Cloudflare",
    iconType: cloudflareIcon,
  },
  {
    title: "Cloudflare",
    iconType: cloudflareIcon,
  },
  {
    title: "ExpressJS",
    iconType: expressjsIcon,
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModalOpen = (): void => {
    setIsOpen(!isOpen);
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  };

  return (
    <section className="bg-background">
      <div className="py-20 lg:py-28 bg-vercel-gray-900 text-vercel-black">
        <div className="container">
          <SectionHeader
            eyebrow="About me"
            title={
              <SparklesText
                text="A Glimpse Into My World"
                className="text-3xl md:text-5xl text-center mt-6 text-vercel-black font-semibold"
              />
            }
            description="Learn more about who I am, What I do, and what inspire me"
          />
          <div className="mt-20 flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
              <Card className="h-[320px] md:col-span-2 lg:col-span-1">
                <CardHeader
                  title="Who am I?"
                  description={
                    <RainbowButton
                      onClick={handleModalOpen}
                      className="flex items-center gap-2 text-base font-medium w-full md:text-sm whitespace-nowrap"
                    >
                      Click to know more
                    </RainbowButton>
                  }
                  className="font-bold z-20"
                />

                <div className="w-40 mx-auto mt-10 md:mt-7">
                  <Image src={myPicture} alt="picture" />
                </div>
              </Card>
              <Card className="h-[320px] md:col-span-3 lg:col-span-2">
                <CardHeader
                  title="My Toolbox"
                  description="Explore the technologies and tools I use to craft exceptional digital experiences."
                  className="font-bold"
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
                  title="Beyond the code"
                  description="Discover my interests and hobbies outside of the digital space."
                  className="px-6 py-6 font-bold"
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
                      dragElastic={0.2}
                      dragTransition={{
                        bounceStiffness: 200,
                        bounceDamping: 10,
                      }}
                    >
                      <span className="font-medium text-vercel-black border border-vercel-black/20 rounded-full px-2 py-1.5 ">
                        {hobby.title}
                        <span>{hobby.emoji}</span>
                      </span>
                    </motion.div>
                  ))}
                </div>
              </Card>
              <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
                <Image
                  src={mapImage}
                  alt="map"
                  className="h-full w-full object-cover object-left-top"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full">
                  <Image src={smileMemoji} alt="memoji" className="size-20" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          onClick={handleModalOpen}
        >
          <div
            className="bg-white dark:bg-gray-800 max-w-lg w-full z-[9999] rounded-xl shadow-2xl transform transition-all"
            onClick={handleModalClick}
          >
            <div className=" p-6 sm:p-8 z-[9999] ">
              <div className="mb-6 text-center z-[9999]">
                <SparklesText
                  text="Hello, I'm Nhat Vu Le"
                  className="text-3xl font-bold text-vercel-black"
                />

                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Software Engineer
                </p>
              </div>

              <div className="space-y-4 text-gray-700 dark:text-gray-200 z-[9999]">
                <p className="leading-relaxed text-justify ">
                  My love for computers and problem solving began at a young age
                  and during my senior year, I competed in the Bebras
                  International Computational Contest and proudly made it to the
                  finals. Through active engagement in hackathons and seminars,
                  Im continuously seeking opportunities to expand and push
                  myself further.
                </p>

                <div className="bg-vercel-white dark:bg-purple-900/20 p-4 rounded-lg z-[9999] leading-relaxed text-justify">
                  <h3 className="font-semibold mb-2">
                    What I bring to the table:
                  </h3>
                  <p className="text-sm">
                    🚀 Passion for Problem-Solving
                    <br />
                    💡 Curiosity and Continuous Learning
                    <br />
                    🛠 Technical Skills
                    <br />
                    ✨ Collaboration and Innovation
                    <br />
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-8 flex justify-end z-[9999]">
                <RainbowButton onClick={handleModalOpen} className="px-5 py-2">
                  Nice to meet you!
                </RainbowButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
