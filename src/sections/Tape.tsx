import StarIcon from "@/assets/icons/star.svg";
import React, { Fragment } from "react";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Critical",
  "Creative",
  "User Friendly",
  "Usable",
  "Search Optimized",
  "Reliable",
  "Innovative",
  "Scalable",
  "Responsive",
  "Intuitive",
  "Dynamic",
];

export const TapeSection = () => {
  return (
    <div className="w-full h-96 mx-4 my-4 p-4">
      <div className="py-16 lg:py-24 overflow-x-clip">
        <div className="bg-gradient-to-r from-vercel-gray-100 to-vercel-white -rotate-3 -mx-1">
          <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:30s]">
              {Array.from({ length: 2 }).map((_, idx) => (
                <Fragment key={idx}>
                  {words.map((word) => (
                    <div key={word} className="inline-flex gap-4 items-center">
                      <span className="text-vercel-black uppercase font-extrabold text-sm">
                        {word}
                      </span>
                      <StarIcon className="size-6 text-vercel-black -rotate-12" />
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
