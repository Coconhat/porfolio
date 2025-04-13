"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Define the SVG as a data URI
const MASK_SVG = `data:image/svg+xml;charset=utf8,${encodeURIComponent(
  '<svg width="1298" height="1298" viewBox="0 0 1298 1298" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="649" cy="649" r="649" fill="black" /></svg>'
)}`;

export const MaskContainer = ({
  children,
  revealText,
  size = 8, // Smaller default size
  revealSize = 230, // Smaller reveal size
  className,
}: {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<any>({ x: null, y: null });
  const containerRef = useRef<any>(null);
  const updateMousePosition = (e: any) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    containerRef.current.addEventListener("mousemove", updateMousePosition);
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          "mousemove",
          updateMousePosition
        );
      }
    };
  }, []);
  let maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      className={cn("relative w-full", className)}
      animate={{
        backgroundColor: isHovered ? "var(--white)" : "var(--slate-900)",
      }}
      transition={{
        backgroundColor: { duration: 0.3 },
      }}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-black text-lg dark:bg-white" // Smaller text size
        style={{
          maskImage: `url("${MASK_SVG}")`,
          maskRepeat: "no-repeat",
          maskSize: `${maskSize}px`,
          WebkitMaskImage: `url("${MASK_SVG}")`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: `${maskSize}px`,
        }}
        animate={{
          maskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`,
          WebkitMaskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`,
          maskSize: `${maskSize}px`,
          WebkitMaskSize: `${maskSize}px`,
        }}
        transition={{
          maskSize: { duration: 0.3, ease: "easeInOut" },
          maskPosition: { duration: 0.15, ease: "linear" },
          WebkitMaskSize: { duration: 0.3, ease: "easeInOut" },
          WebkitMaskPosition: { duration: 0.15, ease: "linear" },
        }}
      >
        <div className="absolute inset-0 z-0 bg-black opacity-50 dark:bg-white" />
        <div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="relative z-20 mx-auto max-w-3xl text-center text-2xl font-bold" // Smaller text and container
        >
          {children}
        </div>
      </motion.div>

      <div className="flex min-h-[8rem] w-full items-center justify-center ">
        <div className="max-w-xl  text-sm md:text-base">
          {" "}
          {/* Smaller reveal text */}
          {revealText}
        </div>
      </div>
    </motion.div>
  );
};
