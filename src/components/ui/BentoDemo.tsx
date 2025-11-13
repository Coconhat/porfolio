"use client";

import React, { useEffect, useState } from "react";
import { FileTextIcon } from "@radix-ui/react-icons";
import { Share2, Rocket, Database, Video, Activity } from "lucide-react";
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
import { profile } from "console";

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
    cta: "Private",
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

// Additional project data for the modal. Keys match feature.name where applicable.
const projectDetails: Record<
  string,
  {
    title: string;
    yearAffil?: string;
    bullets: string[];
    type: "personal" | "client" | "organization" | "other";
  }
> = {
  "Animo Chat": {
    title: "AnimoChat.com",
    yearAffil: "2025 · PERSONAL PROJECT",
    bullets: [
      "Designed and deployed a secure, anonymous chat application using Next.js and Supabase.",
      "Achieved 30,000+ visitors and 90,000+ page views within 6 months of launch.",
    ],
    type: "personal",
  },
  "Ancillary Communication Platform": {
    title: "Ancillary Communication Platform · MEDIATRIX ANCILLARY DEPARTMENT",
    yearAffil: "2025 · CLIENT/PROTOTYPE",
    bullets: [
      "Developed a frontend prototype to streamline finance and communication processes.",
    ],
    type: "personal",
  },
  "DH Magpantay Farm System": {
    title: "DH Magpantay Farm System",
    yearAffil: "2024 · CLIENT PROJECT",
    bullets: [
      "Developed a farm management system for 200+ cattle with health, breeding, and feeding tracking plus Resend-based alerts.",
      "Built an AI agent that can read and provide information from farm records, assisting staff with quick access to cattle health, breeding, and feeding data.",
    ],
    type: "client",
  },
  "Project Spotlight - Mini Netflix": {
    title: "Mini Netflix Platform · DE LA SALLE LIPA",
    yearAffil: "2024 · ORGANIZATION PROJECT",
    bullets: [
      "Built a video streaming platform for student organization content using Next.js and Firebase.",
      "Implemented video storage and delivery using Cloudflare R2 for optimized content distribution.",
    ],
    type: "organization",
  },
  "Student API": {
    title: "Student API · DE LA SALLE LIPA",
    yearAffil: "2025 · ORGANIZATION PROJECT",
    bullets: [
      "Developed a RESTful API for capturing student ID NFC tags for attendance tracking using Express.",
      "Implemented secure data validation and database storage for efficient data caching.",
    ],
    type: "organization",
  },
  "More Projects": {
    title: "More Projects",
    yearAffil: "",
    bullets: [
      "Explore the full portfolio on GitHub: https://github.com/Coconhat",
    ],
    type: "other",
  },
};

export function BentoDemo() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setModalOpen(false);
    }
    if (modalOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
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

      {/* custom grid: 3 per row on large screens, with margin and gap */}
      <div className="mx-4 sm:mx-6 lg:mx-12">
        {/* bento-style grid — 3 columns on large screens, consistent card heights to match original bento appearance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {features.map((feature, idx) => (
            // apply feature.className if provided (keeps compatibility) and enforce a uniform bento card height
            <div
              key={idx}
              className={cn(
                "relative group rounded-2xl overflow-hidden transition-transform hover:scale-[1.01] shadow-lg",
                feature.className || ""
              )}
            >
              {/* fixed height container so every card matches the original bento sizing */}
              <div className="h-72 sm:h-80 lg:h-96 flex flex-col">
                {/* BentoCard should stretch to fill this container; pass a className to ensure full height */}
                <BentoCard
                  {...feature}
                  className={cn(feature.className || "", "h-full")}
                />

                {/* full-card clickable overlay to open the modal */}
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

      {/* Modal: show additional info */}
      {modalOpen && selected !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50"
            aria-hidden
            onClick={closeModal}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            className="relative z-60 w-full max-w-3xl rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 id="project-title" className="text-2xl font-semibold">
                  {selectedDetail?.title || selectedFeature?.name}
                </h3>
                {selectedDetail?.yearAffil && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {selectedDetail.yearAffil}
                  </p>
                )}
              </div>

              <div className="ml-auto flex items-center gap-2">
                {selectedFeature?.href && (
                  <a
                    href={selectedFeature.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-md border px-3 py-1 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {selectedFeature.cta || "Open"}
                  </a>
                )}

                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Close"
                  className="rounded-full border p-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <p className="text-sm text-muted-foreground">
                {selectedFeature?.description}
              </p>

              {selectedDetail ? (
                <ul className="list-disc pl-5 mt-2 space-y-2 text-sm">
                  {selectedDetail.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground mt-2">
                  No additional information available.
                </p>
              )}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={closeModal}
                className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
