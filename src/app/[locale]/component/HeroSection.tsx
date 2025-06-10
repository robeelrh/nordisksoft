"use client";

import { HeroSectionBg } from "@/assests";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "./Navbar";

export default function HeroSection() {
  const t = useTranslations("HeroSection");

  // Animation variants
  const slideFromTopZeroDelay = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  };

  const slideFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.9,
      },
    },
  };

  return (
    <section className="relative h-[110vh] w-full flex items-start justify-center">
      {/* Background Image - Stable (no animation) */}
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        alt="Background Image"
        src={HeroSectionBg}
        fill
      />

      <div className="z-10 flex flex-col w-full h-full">
        {/* Navbar - slide from top */}
        <motion.div variants={slideFromTopZeroDelay} initial="hidden" animate="visible">
          <Navbar />
        </motion.div>

        <div className="flex-1 flex flex-col justify-center items-start lg:px-5 xl:px-10 text-white font-inter">
          {/* Main heading - slide from left */}
          <motion.p
            className="font-semibold lg:text-[150px] xl:text-[230px] 2xl:text-[260px] leading-none"
            variants={slideFromLeft}
            initial="hidden"
            animate="visible"
          >
            {t("headlineMain")}
          </motion.p>

          {/* Sub heading - slide from right */}
          <motion.p
            className="font-semibold lg:text-[110px] xl:text-[140px] 2xl:text-[190px] leading-none lg:ml-[23%] xl:ml-[26%] 2xl:ml-[23%]"
            variants={slideFromRight}
            initial="hidden"
            animate="visible"
          >
            {t("headlineSub")}
          </motion.p>

          {/* Description - slide from bottom */}
          <motion.p
            className="lg:w-[40%] xl:w-[22%] font-normal mt-6"
            variants={slideFromBottom}
            initial="hidden"
            animate="visible"
          >
            {t("description")}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
