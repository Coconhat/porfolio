import { useState } from "react";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { RainbowButton } from "@/components/ui/rainbow-button";

export const ContactSection = () => {
  return (
    <section className="bg-background">
      <div className="py-16 pt-12 lg:py-24 lg:pt-20 bg-vercel-white text-vercel-black">
        <div className="container mx-auto">
          <div className="bg-gray-900 text-white py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-10">
            <div
              className="absolute inset-0 opacity-5 -z-10"
              style={{
                backgroundImage: `url(${grainImage})`,
                filter: "grayscale(100%)",
              }}
            ></div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl">Like what you see?</h2>
                <p className="text-sm mt-2 md:text-base">
                  Let&apos;s connect and discuss how I can help you achieve your
                  goals.
                </p>
              </div>
              <div className="lg:ml-20 z-20">
                <RainbowButton className="text-white bg-vercel-black inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-700">
                  <span className="font-semibold cursor-pointer">Get in touch</span>
                  <ArrowUpRightIcon className="w-4 h-4" />
                </RainbowButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
