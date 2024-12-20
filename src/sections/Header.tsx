import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-0 left-0 right-0 z-10 h-16 bg-vercel-white/90 backdrop-blur">
      <nav className="flex gap-4 p-2 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link href="#hero">
          <span className="nav-item">Home</span>
        </Link>

        <Link href="#projects">
          <span className="nav-item">Projects</span>
        </Link>

        <Link href="#about">
          <span className="nav-item">About</span>
        </Link>

        <Link href="#contact">
          <span className="nav-item bg-white text-vercel-black ">
            Contact
          </span>
        </Link>
      </nav>
    </div>
  );
};
