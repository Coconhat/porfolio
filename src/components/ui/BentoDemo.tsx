import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon, Rocket } from "lucide-react";
import apodnasa from "@/assets/images/apodnasa.png";
import currencyconverter from "@/assets/images/currencyconverter3.png";
import brainrot from "@/assets/images/brainrot.png";
import {nasa1} from "@/assets/images/nasa1.jpg";
import {nasa2} from "@/assets/images/nasa2.jpg";
import { cn } from "@/lib/utils";
import { AnimatedListDemo } from "@/components/ui/AnimatedListDemo";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const files = [
  {
    image: nasa1,
    name: "NASA APOD",
    body: "Astronomy Picture of the Day brings you stunning space visuals.",
  },
  {
    image: nasa2,
    name: "Spreadsheet",
    body: "Organize and calculate your data with ease in a spreadsheet.",
  },
  {
    image: apodnasa,
    name: "Scalable Vector Graphics",
    body: "SVG provides a format for high-quality, interactive graphics.",
  },
  {
    image: apodnasa,
    name: "GPG Keys",
    body: "Secure your data and authenticate messages using GPG keys.",
  },
  {
    image: apodnasa,
    name: "Seed Phrase",
    body: "Your seed phrase ensures recovery of your crypto funds.",
  },
];

const features = [
  {
    Icon: Rocket,
    name: "NASA APOD NEWS",
    description:
      "Provides daily updates on NASA's Astronomy Picture of the Day (APOD).",
    href: "https://coconhat.github.io/NASA-APOD-News/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none text-vercel-black dark:text-white"
            )}
          >
            <Image
              src={f.image}
              alt={f.name}
              width={128}
              height={128}
              className="rounded-md mb-2"
            />
            <div className="flex flex-col">
              <figcaption className="text-sm font-medium dark:text-white">
                {f.name}
              </figcaption>
              <blockquote className="mt-2 text-xs">{f.body}</blockquote>
            </div>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Brainrot converter",
    description: "Convert normal text into brainrot.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 text-vercel-black" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Integrations",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Image
        src={brainrot}
        alt="Integrations"
        width={500}
        height={300}
        className="absolute right-0 top-0 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <Image
        src={currencyconverter}
        alt="Calendar"
        width={500}
        height={300}
        className="absolute right-0 top-0 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
];

export function BentoDemo() {
  return (
    <>
      <div>
        <h2 className="text-3xl font-semibold text-vercel-black">
          Featured Project
        </h2>
        <p className="text-lg text-vercel-white/60 mt-4 max-w-md">
          Each project represents a unique vision transformed into an engaging
          digital reality
        </p>
      </div>
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </>
  );
}
