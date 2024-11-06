import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import apodnasa from "@/assets/images/apodnasa.png";
import currencyconverter from "@/assets/images/currencyconverter3.png";
const portfolioProjects = [
  {
    company: "",
    year: "2024",
    title: "NASA APOD NEWS",
    results: [
      {
        title:
          " Provides daily updates on NASA's Astronomy Picture of the Day (APOD), showcasing space images and insights.",
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
          "implifies currency conversion, particularly beneficial for travelers, businesses, and online shoppers.",
      },
      {
        title:
          ": Uses a real-time currency exchange API to provide up-to-date conversion rates.",
      },
    ],
    link: "https://coconhat.github.io/Currency-converter/",
    image: currencyconverter,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24 ">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
            Portfolio Highlights
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Feature Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          Each project represents a unique vision transformed into an engaging
          digital reality
        </p>
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none  "
            >
              <div
                className="absolute inset-0 -z-10 opacity-5 "
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5 " />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt:0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
