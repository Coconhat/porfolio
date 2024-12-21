import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Analytics } from "@vercel/analytics/react";
import React, { ReactNode } from "react";
import { ParticlesDemo } from "@/components/ui/Particle";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistago = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});
export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A portfolio website built with Next.js and Tailwind CSS.",
};

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative w-full h-full">
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistago.variable,
          "bg-vercel-gray-900 text-vercel-white antialiased font-sans"
        )}
      >
        <ParticlesDemo />
        <Analytics />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
