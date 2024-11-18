import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistago = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});
export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
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
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
