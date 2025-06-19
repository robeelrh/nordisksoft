"use client"

import { HeroSectionBg } from "@/assests"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import Image from "next/image"
import Navbar from "./Navbar"
import { slideFromBottom, slideFromLeft, slideFromRight, slideFromTop } from "@/utils/SliderAnimation"

export default function HeroSection() {
  const t = useTranslations("HeroSection")

  return (
    <section className="relative h-[580px] sm:h-[640px] md:h-[700px] lg:h-[740px] xl:h-[770px] w-full flex items-start justify-center">
      {/* Background Image - Stable (no animation) */}
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        alt="Background Image"
        src={HeroSectionBg || "/placeholder.svg"}
        fill
      />

      <div className="z-10 flex flex-col w-full h-full">
        {/* Navbar - slide from top */}
        <motion.div variants={slideFromTop} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
          <Navbar />
        </motion.div>

        <div className="flex-1 flex flex-col justify-center items-start px-4 sm:px-6 lg:px-5 xl:px-10 text-white font-inter">
          {/* Main heading - slide from left */}
          <motion.p
            className="font-semibold text-[50px] sm:text-[70px] md:text-[100px] lg:text-[150px] xl:text-[230px] 2xl:text-[260px] leading-[0.9] sm:leading-[0.85] md:leading-none"
            variants={slideFromLeft}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
          >
            {t("headlineMain")}
          </motion.p>

          {/* Sub heading - slide from right */}
          <motion.p
            className="font-semibold text-[32px] sm:text-[48px] md:text-[80px] lg:text-[110px] xl:text-[140px] 2xl:text-[190px] leading-[0.9] sm:leading-[0.85] md:leading-none ml-[8%] sm:ml-[12%] md:ml-[20%] lg:ml-[23%] xl:ml-[26%] 2xl:ml-[23%] mt-1 sm:mt-2"
            variants={slideFromRight}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
          >
            {t("headlineSub")}
          </motion.p>

          {/* Description - slide from bottom */}
          <motion.p
            className="w-[85%] sm:w-[75%] md:w-2/3 lg:w-[40%] xl:w-[22%] font-normal text-sm sm:text-base md:text-base lg:text-base mt-6 sm:mt-8 md:mt-6 leading-relaxed"
            variants={slideFromBottom}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
          >
            {t("description")}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
