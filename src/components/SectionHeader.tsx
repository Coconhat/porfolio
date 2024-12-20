export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <header className="bg-background">
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-vercel-gray-600 to-vercel-gray-300 bg-clip-text text-transparent">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 text-vercel-black">
        {title}
      </h2>
      <p className="text-center md:text-lg lg:text-xl text-vercel-gray-400 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </header>
  );
};
