"use client"

import { useTranslations } from "next-intl"
import { useState } from "react"
import { motion } from "framer-motion"
import PricingPlans from "./PricingPlans"
import { fadeInUp, slideFromBottom } from "@/utils/SliderAnimation"

export default function PricingSection() {
  const t = useTranslations("Pricing")
  const [isMonthly, setIsMonthly] = useState(true)

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="font-inter space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-8 xl:space-y-12 px-4 sm:px-6 py-8 sm:py-10">
      {/* Upper content - slide from top */}
      <motion.div
        className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:gap-8 xl:gap-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none text-center"
          variants={fadeInUp}
        >
          Flexible pricing
        </motion.h2>

        <motion.p
          className="text-[#11111180] w-full sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/4 text-center text-sm sm:text-base lg:text-md xl:text-lg"
          variants={fadeInUp}
        >
          {t("description")}
        </motion.p>

        <motion.div className="flex items-center space-x-4" variants={fadeInUp}>
          <span className={`font-medium text-sm sm:text-base ${!isMonthly ? "text-black" : "text-gray-400"}`}>
            {t("billingToggle.annual")}
          </span>

          <motion.button
            onClick={() => setIsMonthly(!isMonthly)}
            className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors duration-300 ${
              isMonthly ? "bg-red-500" : "bg-gray-300"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isMonthly ? "Switch to annual billing" : "Switch to monthly billing"}
          >
            <motion.div
              className="w-4 h-4 rounded-full bg-white shadow-md"
              animate={{
                x: isMonthly ? 24 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
            />
          </motion.button>

          <span className={`font-medium text-sm sm:text-base ${isMonthly ? "text-black" : "text-gray-400"}`}>
            {t("billingToggle.monthly")}
          </span>
        </motion.div>
      </motion.div>

      {/* Pricing Plans - slide from bottom */}
      <motion.div
        variants={slideFromBottom}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <PricingPlans isMonthly={isMonthly} />
      </motion.div>
    </div>
  )
}
