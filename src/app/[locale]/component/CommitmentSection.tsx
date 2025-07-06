"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function CommitmentSection() {
  const t = useTranslations("CommitmentSection");
  const slideFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section className="overflow-hidden  w-full h-[300px] md:h-[400px] md:py-12  px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 font-inter">
      <motion.h2
        className="font-semibold text-4xl lg:text-5xl xl:text-6xl text-center"
        initial="hidden"
        whileInView="visible"
        variants={slideFromLeft}
        transition={{ delay: 0.4, duration: 0.4 }}
        viewport={{ once: true }}
      >
        {t.rich("headline", {
          highlight: (chunks) => <span className="text-blue">{chunks}</span>,
        })}
      </motion.h2>
      <motion.p
        className="text-[#666666] font-medium text-sm sm:text-base md:text-lg w-full sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3 text-center"
        initial="hidden"
        whileInView="visible"
        variants={slideFromRight}
        transition={{ delay: 0.4, duration: 0.4 }}
        viewport={{ once: true }}
      >
        {t("description")}
      </motion.p>
    </section>
  );
}
