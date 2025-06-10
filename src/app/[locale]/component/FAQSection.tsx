"use client";
import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { slideFromLeft } from "@/utils/SliderAnimation";

export default function FAQSection() {
  const t = useTranslations("FAQ");
  const FAQS = t.raw("questions") as string[];

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const faqItemAnimation = {
    hidden: { opacity: 0, x: 30 }, // Reduced from 50 to 30
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="h-[60vh] w-full flex items-center lg:px-6 xl:px-10 font-inter overflow-hidden">
      {" "}
      {/* Added overflow-hidden */}
      {/* Left panel - slide from left */}
      <motion.div
        className="w-2/5"
        variants={slideFromLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="font-semibold lg:text-7xl xl:text-8xl">{t("title")}</p>
        <p className="text-[#11111180] mt-2 w-2/3">{t("description")}</p>
      </motion.div>
      {/* FAQ list - slide from right with staggered items */}
      <motion.div
        className="w-3/5 lg:space-y-2 xl:space-y-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {FAQS.map((question, index) => (
          <motion.div
            className="border-b border-black flex justify-between items-center lg:py-3 xl:py-4"
            key={index}
            variants={faqItemAnimation}
            whileHover={{
              x: 5,
              transition: { duration: 0.2 },
            }}
          >
            <p>{question}</p>
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: 90,
                transition: { duration: 0.2 },
              }}
            >
              <Plus className="text-red-500 cursor-pointer" size={15} />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
