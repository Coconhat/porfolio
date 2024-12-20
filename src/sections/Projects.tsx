import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import apodnasa from "@/assets/images/apodnasa.png";
import currencyconverter from "@/assets/images/currencyconverter3.png";
import brainrot from "@/assets/images/brainrot.png";
import BentoDemo from "@/components/ui/BentoDemo";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const portfolioProjects = [
  {
    company: "",
    year: "2024",
    title: "NASA APOD NEWS",
    results: [
      {
        title:
          "Provides daily updates on NASA's Astronomy Picture of the Day (APOD), showcasing space images and insights.",
      },
      {
        title:
          "Users can click on any news item to open a modal, which provides a full description, image, and details.",
      },
      {
        title:
          "Optimized for fast loading, with a focus on mobile compatibility",
      },
    ],
    link: "https://coconhat.github.io/NASA-APOD-News/",
    image: apodnasa,
  },
  {
    company: "",
    year: "2024",
    title: "Currency Converter",
    results: [
      {
        title:
          "Provides fast, reliable currency conversions for a wide range of international currencies.",
      },
      {
        title:
          "Simplifies currency conversion, particularly beneficial for travelers, businesses, and online shoppers.",
      },
      {
        title:
          "Uses a real-time currency exchange API to provide up-to-date conversion rates.",
      },
    ],
    link: "https://coconhat.github.io/Currency-converter/",
    image: currencyconverter,
  },
  {
    company: "",
    year: "2024",
    title: "Brain rot translator",
    results: [
      {
        title:
          "Transforms your regular text into hilarious 'brainrot' language with meme terms and phrases.",
      },
      {
        title:
          "Uses custom logic to add unexpected and funny terms to your sentences.",
      },
      {
        title:
          "Perfect for meme lovers, creating wild text transformations with every sentence.",
      },
    ],
    link: "https://coconhat.github.io/brainrot-converter/",
    image: brainrot,
  },
];

export const ProjectsSection = () => {
  return (
    <div className="w-full h-128 mx-4 my-4 p-4">
      <section className="bg-background text-vercel-black">
        <div className="container">
          <div className="flex justify-center">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-vercel-gray-600 to-vercel-gray-300 bg-clip-text text-transparent">
              Portfolio Highlights
            </p>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 text-vercel-black">
            Feature Projects
          </h2>
          <p className="text-center md:text-lg lg:text-xl text-vercel-white/60 mt-4 max-w-md mx-auto">
            Each project represents a unique vision transformed into an engaging
            digital reality
          </p>
          <div className="mt-10 md:mt-20">
            <BentoGrid>
              {portfolioProjects.map((project) => (
                <BentoCard
                  key={project.title}
                  name={project.title}
                  className="col-span-3 lg:col-span-1"
                  background={
                    <div
                      className="absolute inset-0 -z-10 opacity-5"
                      style={{
                        backgroundImage: `url(${grainImage.src})`,
                      }}
                    ></div>
                  }
                  Icon={CheckCircleIcon}
                  description={project.results
                    .map((result) => result.title)
                    .join(" ")}
                  href={project.link}
                  cta="Visit Live Site"
                />
              ))}
            </BentoGrid>
          </div>
          <div className="mt-10 md:mt-20">
            <BentoDemo />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;
