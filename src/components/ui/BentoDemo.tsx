"use client";

import React, { useEffect, useState } from "react";
import { FileTextIcon } from "@radix-ui/react-icons";
import {
  Share2,
  Rocket,
  Database,
  Video,
  Activity,
  X,
  ExternalLink,
  Calendar,
  Building2,
} from "lucide-react";
import githubprofile from "@/assets/images/gitgit2.png";
import mediatrix from "@/assets/images/mediatrix.png";
import animo from "@/assets/images/animo.png";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { LineShadowText } from "../magicui/line-shadow-text";
import { BentoCard } from "@/components/ui/bento-grid";
import dhFarm from "@/assets/images/dh-farm.png";
import spotLight from "@/assets/images/spotlight.png";
import studentapi from "@/assets/images/studentapi.png";

const features = [
  {
    Icon: Share2,
    name: "Animo Chat",
    description:
      "Anonymous chat platform with 30,000+ visitors and 90,000+ page views in 6 months.",
    href: "https://animochat.com",
    cta: "View site",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Image
        src={animo}
        alt="Animo Chat"
        width={500}
        height={300}
        className="absolute right-0 top-0 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
  {
    Icon: FileTextIcon,
    name: "Ancillary Communication Platform",
    description:
      "Finance and communication system streamlining processes for Mediatrix Ancillary Department.",
    href: "#",
    cta: "Private",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Image
        src={mediatrix}
        alt="Mediatrix Platform"
        width={500}
        height={300}
        className="absolute right-0 top-0 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
  {
    Icon: Activity,
    name: "DH Magpantay Farm System",
    description:
      "Farm management system for 200+ cattle with AI agent for health, breeding, and feeding data.",
    href: "#",
    cta: "Private",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Image
        src={dhFarm}
        alt="DH Magpantay Farm System"
        width={500}
        height={300}
        className="absolute right-0 top-0 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
  {
    Icon: Video,
    name: "Project Spotlight - Mini Netflix",
    description:
      "Video streaming platform for student organizations with Cloudflare R2 integration.",
    href: "https://github.com/dlsl-animodev/project-spotlight",
    cta: "View Code",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Image
        src={spotLight}
        alt="Project Spotlight - Mini Netflix"
        width={500}
        height={300}
        className="absolute right-0 top-0 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
  {
    Icon: Rocket,
    name: "Student API",
    description:
      "RESTful API for NFC-based attendance tracking with secure data validation.",
    className: "col-span-3 lg:col-span-2",
    href: "https://github.com/dlsl-animodev/project-qol-api",
    cta: "View GitHub",
    background: (
      <Image
        src={studentapi}
        alt="GitHub Profile"
        width={500}
        height={300}
        className="absolute right-0 top-0 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
  {
    Icon: Activity,
    name: "View more projects",
    description:
      "Explore the full portfolio on GitHub: https://github.com/Coconhat",
    href: "https://github.com/Coconhat",
    cta: "View GitHub",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Image
        src={githubprofile}
        alt="github profile"
        width={500}
        height={300}
        className="absolute right-0 top-0 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
];

const projectDetails: Record<
  string,
  {
    title: string;
    yearAffil?: string;
    bullets: string[];
    type: "personal" | "client" | "organization" | "other";
    year?: string;
    organization?: string;
  }
> = {
  "Animo Chat": {
    title: "AnimoChat.com",
    yearAffil: "2025 · PERSONAL PROJECT",
    year: "2025",
    organization: "Personal Project",
    bullets: [
      "Designed and deployed a secure, anonymous chat application using Next.js and Supabase.",
      "Achieved 30,000+ visitors and 90,000+ page views within 6 months of launch.",
    ],
    type: "personal",
  },
  "Ancillary Communication Platform": {
    title: "Ancillary Communication Platform",
    yearAffil: "2025 · CLIENT/PROTOTYPE",
    year: "2025",
    organization: "Mediatrix Ancillary Department",
    bullets: [
      "Developed a frontend prototype to streamline finance and communication processes.",
    ],
    type: "personal",
  },
  "DH Magpantay Farm System": {
    title: "DH Magpantay Farm System",
    yearAffil: "2024 · CLIENT PROJECT",
    year: "2024",
    organization: "Client Project",
    bullets: [
      "Developed a farm management system for 200+ cattle with health, breeding, and feeding tracking plus Resend-based alerts.",
      "Built an AI agent that can read and provide information from farm records, assisting staff with quick access to cattle health, breeding, and feeding data.",
    ],
    type: "client",
  },
  "Project Spotlight - Mini Netflix": {
    title: "Mini Netflix Platform",
    yearAffil: "2024 · ORGANIZATION PROJECT",
    year: "2024",
    organization: "De La Salle Lipa",
    bullets: [
      "Built a video streaming platform for student organization content using Next.js and Firebase.",
      "Implemented video storage and delivery using Cloudflare R2 for optimized content distribution.",
    ],
    type: "organization",
  },
  "Student API": {
    title: "Student API",
    yearAffil: "2025 · ORGANIZATION PROJECT",
    year: "2025",
    organization: "De La Salle Lipa",
    bullets: [
      "Developed a RESTful API for capturing student ID NFC tags for attendance tracking using Express.",
      "Implemented secure data validation and database storage for efficient data caching.",
    ],
    type: "organization",
  },
  "View more projects": {
    title: "More Projects",
    yearAffil: "",
    bullets: [
      "Explore the full portfolio on GitHub: https://github.com/Coconhat",
    ],
    type: "other",
  },
};

const typeColors = {
  personal: "from-blue-500 to-cyan-500",
  client: "from-purple-500 to-pink-500",
  organization: "from-orange-500 to-red-500",
  other: "from-gray-500 to-slate-500",
};

export function BentoDemo() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setModalOpen(false);
    }
    if (modalOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "unset";
    };
  }, [modalOpen]);

  function openModal(idx: number) {
    setSelected(idx);
    setModalOpen(true);
  }

  function closeModal() {
    setSelected(null);
    setModalOpen(false);
  }

  const selectedFeature = selected !== null ? features[selected] : null;
  const selectedDetail = selectedFeature
    ? projectDetails[selectedFeature.name]
    : null;

  return (
    <>
      <div className="mb-6 text-center">
        <h2 className="text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-vercel-black">
          Notable{" "}
          <LineShadowText className="italic" shadowColor="black">
            Projects
          </LineShadowText>
        </h2>
        <p className="text-lg text-vercel-white/60 mt-4 max-w-md mx-auto">
          Each project represents a unique vision transformed into an engaging
          digital reality
        </p>
      </div>

      <div className="mx-4 sm:mx-6 lg:mx-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={cn(
                "relative group rounded-2xl overflow-hidden transition-transform hover:scale-[1.01] shadow-lg",
                feature.className || ""
              )}
            >
              <div className="h-72 sm:h-80 lg:h-96 flex flex-col">
                <BentoCard
                  {...feature}
                  className={cn(feature.className || "", "h-full")}
                />
                <button
                  type="button"
                  onClick={() => openModal(idx)}
                  aria-label={`Open details for ${feature.name}`}
                  className="absolute inset-0 z-10"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={closeModal}
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            aria-hidden
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            className="relative z-60 w-full max-w-4xl rounded-3xl bg-white dark:bg-gray-900 shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gradient header */}
            <div
              className={cn(
                "h-2 bg-gradient-to-r",
                selectedDetail
                  ? typeColors[selectedDetail.type]
                  : typeColors.other
              )}
            />

            {/* Content */}
            <div className="p-8">
              {/* Header section */}
              <div className="flex items-start gap-6 mb-8">
                {/* Icon with gradient background */}
                <div
                  className={cn(
                    "flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg",
                    selectedDetail
                      ? typeColors[selectedDetail.type]
                      : typeColors.other
                  )}
                >
                  {selectedFeature && (
                    <selectedFeature.Icon className="w-8 h-8 text-white" />
                  )}
                </div>

                {/* Title and meta */}
                <div className="flex-1 min-w-0">
                  <h3
                    id="project-title"
                    className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                  >
                    {selectedDetail?.title || selectedFeature?.name}
                  </h3>

                  {/* Meta badges */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    {selectedDetail?.year && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300">
                        <Calendar className="w-3.5 h-3.5" />
                        {selectedDetail.year}
                      </span>
                    )}
                    {selectedDetail?.organization && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300">
                        <Building2 className="w-3.5 h-3.5" />
                        {selectedDetail.organization}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {selectedFeature?.description}
                  </p>
                </div>

                {/* Close button */}
                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Close"
                  className="flex-shrink-0 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Details section */}
              {selectedDetail && (
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <div className="w-1 h-5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                    Key Highlights
                  </h4>
                  <ul className="space-y-3">
                    {selectedDetail.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-gray-700 dark:text-gray-300 leading-relaxed"
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action button */}
              {selectedFeature?.href && selectedFeature.href !== "#" && (
                <div className="flex justify-end pt-4 border-t border-gray-200 dark:border-gray-800">
                  <a
                    href={selectedFeature.href}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium transition-all hover:shadow-lg hover:scale-105 bg-gradient-to-r",
                      selectedDetail
                        ? typeColors[selectedDetail.type]
                        : typeColors.other
                    )}
                  >
                    {selectedFeature.cta || "View Project"}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
