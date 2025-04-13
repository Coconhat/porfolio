import { FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon, Rocket } from "lucide-react";
import githubprofile from "@/assets/images/gitgit2.png";
import currencyconverter from "@/assets/images/currencyconverter3.png";
import mediatrix from "@/assets/images/mediatrix.png";
import amazon from "@/assets/images/amazon.png";
import animo from "@/assets/images/animo.png";
import freedomwall from "@/assets/images/freedomwall.png";
import nasa1 from "@/assets/images/nasa1.jpg";
import nasa2 from "@/assets/images/nasa2.jpg";
import nasa3 from "@/assets/images/nasa3.jpg";
import nasa4 from "@/assets/images/nasa4.jpg";
import nasa5 from "@/assets/images/nasa5.jpg";
import { cn } from "@/lib/utils";
import { AnimatedListDemo } from "@/components/ui/AnimatedListDemo";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const files = [
  {
    image: nasa1,
    name: "Near to the Heart Nebula",
  },
  {
    image: nasa2,
    name: "Spreadsheet",
  },
  {
    image: nasa3,
    name: "Aurora around Saturn's North Pole",
  },
  {
    image: nasa4,
    name: "The Shells and Jets of Galaxy Centaurus A",
  },
  {
    image: nasa5,
    name: "The Moon",
  },
];

const features = [
  {
    Icon: Rocket,
    name: "NASA APOD NEWS",
    description:
      "Provides daily updates on NASA's Astronomy Picture of the Day (APOD).",
    href: "https://coconhat.github.io/NASA-APOD-News/",
    cta: "View site",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
      >
        {files.map((f, idx) => (
          <>
            <figure
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
              </div>
            </figure>
          </>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Brainrot converter",
    description: "Convert normal text into brainrot.",
    href: "https://coconhat.github.io/brainrot-converter/",
    cta: "View site",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 text-vercel-black" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Animo Chat",
    description: "Anonymously chat with other DLSL students.",
    href: "https://animochat.com",
    cta: "View site",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Image
        src={animo}
        alt="Integrations"
        width={500}
        height={300}
        className="absolute right-0 top-0 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
  {
    Icon: FileTextIcon,
    name: "Amazon Clone",
    description:
      "A functional e-commerce platform mimicking Amazon's features.",
    className: "col-span-3 lg:col-span-1",
    href: "https://github.com/Coconhat/Amazon-Clone-js",
    cta: "View code",
    background: (
      <Image
        src={amazon}
        alt="Integrations"
        width={500}
        height={300}
        className="absolute right-0 top-0 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
  // {
  //   Icon: Share2Icon,
  //   name: "Currency Converter",
  //   description: "Supports 15+ currency and counting.",
  //   href: "https://coconhat.github.io/Currency-converter/",
  //   cta: "View site",
  //   className: "col-span-3 lg:col-span-1",
  //   background: (
  //     <Image
  //       src={currencyconverter}
  //       alt="Integrations"
  //       width={500}
  //       height={300}
  //       className="absolute right-0 top-0 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
  //     />
  //   ),
  // },
  {
    Icon: FileTextIcon,
    name: "Ancillary Communication and Updates Platform",
    description:
      "A finance and communication system for mediatrix ancillary department",
    href: "#",
    cta: "Private",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Image
        src={mediatrix}
        alt="Integrations"
        width={500}
        height={300}
        className="absolute right-0 top-0 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },

  // {
  //   Icon: FileTextIcon,
  //   name: "Animochat's Freedom Wall",
  //   description: "A platform for DLSL students to share their thoughts.",
  //   className: "col-span-3 lg:col-span-2",
  //   href: "https://animochat.com/freedomwall",
  //   cta: "View Site",
  //   background: (
  //     <Image
  //       src={freedomwall}
  //       alt="Integrations"
  //       width={500}
  //       height={300}
  //       className="absolute right-0 top-0 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
  //     />
  //   ),
  // },
  {
    Icon: FileTextIcon,
    name: "More about my projects",
    description: "click below to view my github.",
    className: "col-span-3 lg:col-span-1",
    href: "https://github.com/Coconhat",
    cta: "Learn more",
    background: (
      <Image
        src={githubprofile}
        alt="Integrations"
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
