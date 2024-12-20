import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Analytics } from "@vercel/analytics/react";
import React from "react";

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

const Layout = ({ children }) => {
  return <div className="w-full h-128 mx-4 my-4 p-4">{children}</div>;
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
        <Analytics />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
