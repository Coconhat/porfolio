"use client";
import SparklesText from "@/components/ui/sparkles-text";
import { useState } from "react";

export default function page() {
  return (
    <div className="flex flex-col min-h-[100dvh] space-y-10 text-vercel-black mt-20">
      <Header />
      <About />
      <Accordion />
    </div>
  );
}

function Header() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-8 mt-5">
      <div className="gap-2 justify-between">
        <div className="flex">
          <h2 className="text-[39px]  font-bold">Hi, I&apos;m </h2>
          <SparklesText
            text=" Nhat Vu"
            className="text-[39px] font-bold ml-2"
          />
        </div>
        <p className="text-xl w-3/5">
          I thrive on stepping out of my comfort zone, constantly learning, and
          designing impactful solutions that make a difference.
        </p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-8 mt-5">
      <div className="gap-2 justify-between">
        <h1 className="text-[24px] mt-5 font-bold ">About</h1>
        <p className="text-gray-600 font-medium">
          My love for computers and problem solving began at a young age and
          during my senior year, I competed in the Bebras Philippines
          Computational Contest and proudly made it to the finals. Through
          active engagement in hackathons and seminars, Im continuously seeking
          opportunities to expand and push myself further.
        </p>
      </div>
    </div>
  );
}

function Accordion() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div onClick={() => setShow(!show)}>
        <h1>Education:</h1>
        <p>De La Salle Lipa</p>
        <p>Bachelor&apos; in Computer Science</p>
      </div>
      {show && (
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel eos
            maxime consequuntur necessitatibus reprehenderit. Sit quam
            asperiores vero nobis porro! Facilis accusantium consequuntur nulla
            aperiam iusto? Sed mollitia dolorum error.
          </p>
        </div>
      )}
    </div>
  );
}
