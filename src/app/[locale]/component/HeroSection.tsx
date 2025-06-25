"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navigation from "./Navbar";

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] md:min-h-screen flex flex-col overflow-hidden">
      <Navigation />
      <div className="absolute inset-0 z-0">
        <Image
          src="/main.jpg?height=800&width=1200"
          alt="Tech background with network connections"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="z-10 flex-1 flex items-center justify-center text-center px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.h1
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-white">Building Innovative </span>
          <span className="text-[#56aeff]">Software Solutions</span>
          <span className="text-[#56aeff]">,</span>
          <br />
          <span className="text-white">Empowering Your Future</span>
        </motion.h1>
      </div>
    </section>
  );
}
