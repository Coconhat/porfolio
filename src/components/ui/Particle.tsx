"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particles from "@/components/ui/particles";

export function ParticlesDemo() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}
