"use client";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import React, { useState } from "react";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import instagram from "react-useanimations/lib/instagram";
import facebook from "react-useanimations/lib/facebook";
import { ContactSection } from "@/sections/Contact";

const footerLinks = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/coconhat_/",
    animation: instagram,
  },
  {
    title: "Github",
    href: "https://github.com/Coconhat",
    animation: github,
  },
  {
    title: "Facebook",
    href: "https://github.com/Coconhat",
    animation: facebook,
  },
];

export const Footer = () => {
  const [hoverStates, setHoverStates] = useState(
    footerLinks.reduce((acc, link) => {
      acc[link.title] = false;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const handleMouseEnter = (title: string) => {
    setHoverStates((prevState) => ({
      ...prevState,
      [title]: true,
    }));
  };

  const handleMouseLeave = (title: string) => {
    setHoverStates((prevState) => ({
      ...prevState,
      [title]: false,
    }));
  };

  return (
    <footer className="relative overflow-x-clip z-10">
      <ContactSection />
      

      <div className="container z-10">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8 md:flex-row md:justify-between z-10">
          <nav className="flex flex-col items-center gap-8 md:flex-row">
            {footerLinks.map((link, index) => {
              return (
                <a
                  key={index}
                  href={link.href}
                  id={link.title}
                  className="inline-flex items-center gap-1.5 z-10 text-vercel-black"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => handleMouseEnter(link.title)}
                  onMouseLeave={() => handleMouseLeave(link.title)}
                >
                  <span>
                    <UseAnimations
                      animation={link.animation}
                      size={34}
                      strokeColor="#000000"
                      autoplay={hoverStates[link.title]}
                    />
                  </span>
                  <span className="font-semibold">{link.title}</span>
                  <ArrowUpRightIcon className="size-4" />
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
};
