import { Fragment } from "react";
import StarIcon from "@/assets/icons/star.svg";

const words = [
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
    <div>
      <div className="py-16 lg:py-24 overflow-x-clip">
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 -rotate-3 -mx-1">
          <div className="flex [mask-image:linear-gradient(to right, transparent, black 10%, black 90%, transparent)]">
            <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:30s]">
              {Array.from({ length: 2 }).map((_, idx) => (
                <Fragment key={idx}>
                  {words.map((word) => (
                    <div key={word} className="inline-flex gap-4 items-center">
                      <span className="text-white uppercase font-extrabold text-sm">
                        {word}
                      </span>
                      <StarIcon className="size-6 text-white -rotate-12" />
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
