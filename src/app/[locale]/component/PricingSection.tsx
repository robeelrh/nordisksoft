"use client";

import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { motion } from "framer-motion";
import PricingPlans from "./PricingPlans";
import { fadeInUp, slideFromBottom } from "@/utils/SliderAnimation";

export default function PricingSection() {
  const t = useTranslations("Pricing");
  const [isMonthly, setIsMonthly] = useState(true);

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="font-inter lg:space-y-8 xl:space-y-12">
      {/* Upper content - slide from top */}
      <motion.div
        className="flex flex-col items-center lg:gap-8 xl:gap-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          className="font-semibold lg:text-6xl xl:text-7xl leading-none"
          variants={fadeInUp}
        >
          {t("title")}
        </motion.p>

        <motion.p
          className="text-[#11111180] lg:w-1/2 xl:w-1/4 text-center lg:text-md xl:text-lg"
          variants={fadeInUp}
        >
          {t("description")}
        </motion.p>

        <motion.div className="flex items-center space-x-4" variants={fadeInUp}>
          <span
            className={`font-medium ${
              !isMonthly ? "text-black" : "text-gray-400"
            }`}
          >
            {t("billingToggle.annual")}
          </span>

          <motion.button
            onClick={() => setIsMonthly(!isMonthly)}
            className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors duration-300 ${
              isMonthly ? "bg-red-500" : "bg-gray-300"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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

          <span
            className={`font-medium ${
              isMonthly ? "text-black" : "text-gray-400"
            }`}
          >
            {t("billingToggle.monthly")}
          </span>
        </motion.div>
      </motion.div>

      {/* Pricing Plans - slide from bottom */}
      <motion.div
        variants={slideFromBottom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <PricingPlans isMonthly={isMonthly} />
      </motion.div>
    </div>
  );
}
