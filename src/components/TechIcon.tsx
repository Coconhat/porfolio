export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  if (!component) return null;

  return <Component className="size-10 text-vercel-black" />;
};
