"use client";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import React, { useState } from "react";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import instagram from "react-useanimations/lib/instagram";
import facebook from "react-useanimations/lib/facebook";

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
  return (
    <footer className="relative overflow-x-clip z-10">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] z-0"></div>

      <div className="container z-10">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8 md:flex-row md:justify-between z-10">
          <nav className="flex flex-col items-center gap-8 md:flex-row">
            {footerLinks.map((link, index) => {
              const [isHovered, setIsHovered] = useState(false);

              return (
                <a
                  key={index}
                  href={link.href}
                  id={link.title}
                  className="inline-flex items-center gap-1.5 z-10"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span>
                    <UseAnimations
                      animation={link.animation}
                      size={24}
                      strokeColor="#fff"
                      autoplay={isHovered}
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
