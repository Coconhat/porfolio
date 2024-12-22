export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string | React.ReactNode;
  eyebrow: string;
  description: string;
}) => {
  return (
    <header className="bg-background">
      <div className="flex justify-center">
        <div className="uppercase font-semibold tracking-widest bg-gradient-to-r from-vercel-gray-600 to-vercel-gray-300 bg-clip-text text-transparent">
          {eyebrow}
        </div>
      </div>
      <h2 className="text-3xl md:text-5xl text-center mt-6 text-vercel-black font-semibold">
        {title}
      </h2>
      <p className="text-center md:text-lg lg:text-xl text-vercel-gray-400 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </header>
  );
};
