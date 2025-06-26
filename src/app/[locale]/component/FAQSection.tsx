"use client";
import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { slideFromBottom, slideFromLeft } from "@/utils/SliderAnimation";
import { useState } from "react";

type TFaq = {
  question: string;
  answer: string;
};

export default function FAQSection() {
  const t = useTranslations("FAQ");
  const FAQS = t.raw("questions") as TFaq[];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section
      id="faq"
      className="h-[680px] w-11/12 xl:w-4/5 mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 font-inter overflow-hidden"
    >
      {/* Left panel - slide from left */}
      <div className="w-full lg:w-1/4 mb-6 lg:mb-0 ">
        <motion.h2
          className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-blue "
          variants={slideFromLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {t("title")}
        </motion.h2>
        <motion.p
          className="text-[#11111180] mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:w-2/3"
          variants={slideFromBottom}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {t("description")}
        </motion.p>
      </div>

      {/* FAQ list - slide from right with staggered items */}
      <motion.div
        className="w-full lg:w-3/4 space-y-1 sm:space-y-2 md:space-y-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {FAQS.map((faq, index) => (
          <motion.div
            key={index}
            className="border-b border-gray py-3 md:py-6 group cursor-pointer"
            variants={faqItemAnimation}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ x: 5, transition: { duration: 0.2 } }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            {/* Question + Icon */}
            <div className="flex justify-between items-center">
              <p className="text-sm sm:text-base md:text-lg pr-4">
                {faq.question}
              </p>
              <motion.div
                className="transition-transform duration-300"
                animate={{ rotate: hoveredIndex === index ? 45 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Plus className="text-blue h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              </motion.div>
            </div>

            {/* Animated Answer with Smooth Sliding */}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.1, 0.62, 0.23, 0.98], // Custom easing for smooth feel
                  }}
                  className="overflow-hidden"
                >
                  <motion.div
                    initial={{ y: -5, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -5, opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1, // Small delay for content to appear after container
                    }}
                    className="mt-3 pt-2 text-sm sm:text-base text-gray-600 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
