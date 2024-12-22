import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

export const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-col p-6 md:py-8 md:px-10 text-vercel-black",
        className
      )}
    >
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-vercel-gray-500" />
        <h3 className="text-3xl text-vercel-black font-bold">{title}</h3>
      </div>
      <p className="text-sm lg:text-base max-w-sm text-vercel-gray-400 mt-2">
        {description}
      </p>
    </div>
  );
};
