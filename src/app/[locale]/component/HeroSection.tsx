"use client";
import { motion } from "framer-motion";
import Navigation from "./Navbar";
import { slideFromBottom } from "@/utils/SliderAnimation";

export default function HeroSection() {
  const backgroundContent = "/videos/hero-section-video.mp4";
  return (
    <section className="relative min-h-[70vh] md:min-h-screen flex flex-col overflow-hidden">
      <Navigation />
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src={backgroundContent}
          autoPlay
          muted
          loop
          preload="auto"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <motion.div
        className="z-10 flex-1/2 flex items-center justify-center text-center px-6 lg:px-8 max-w-5xl mx-auto pt-24 md:pt-32"
        initial="hidden"
        whileInView="visible"
        variants={slideFromBottom}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight font-inter">
          <span className="text-white">Building Innovative </span>
          <span className="text-[#56aeff]">Software Solutions</span>
          <span className="text-[#56aeff]">,</span>
          <br />
          <span className="text-white">Empowering Your Future</span>
        </h1>
      </motion.div>
      <div className="z-10 flex-1"></div>
    </section>
  );
}
