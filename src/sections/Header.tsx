import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
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
          <span className="nav-item bg-white text-grey-900 hover:bg-white/70 text-gray-900">
            Contact
          </span>
        </Link>
      </nav>
    </div>
  );
};
