import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import React from "react";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/maploc.jpg";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const hobbies = [
  {
    title: "Gym",
    emoji: "🏋",
  },
  {
    title: "Gaming",
    emoji: "🎮",
  },
  {
    title: "Music",
    emoji: "♫",
  },
  {
    title: "Reading",
    emoji: "📖",
  },
  {
    title: "Running",
    emoji: "🏃‍♂️",
  },
  {
    title: "Traveling",
    emoji: "✈️",
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

];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About me"
          title="A glimpse Into My World"
          description="Learn more about who I am, What I do, and what inspire me"
        />
        <div className="mt-20">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives."
            />

            <div className="w-40 mx-auto mt-8 ">
              <Image src={bookImage} alt="Book cover" />
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader
              title="My toolbox"
              description="Explore the technologies and tools I use to craft exceptional digital experiences."
              className="px-6 pt-6"
            />
           <ToolboxItems items={toolboxItems} />
           <ToolboxItems items={toolboxItems} />
          </Card>
          <Card>
            <CardHeader
              title="Beyond the Code"
              description="Discover my interests and hobbies outside of the digital space."
            />

            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt="map" />
            <Image src={smileMemoji} alt="memoji" />
          </Card>
        </div>
      </div>
    </div>
  );
};
