"use client";

import { AliceWilson } from "@/assests";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, slideFromLeft, slideFromRight } from "@/utils/SliderAnimation";

export default function AboutSection() {
  const t = useTranslations("About");

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.6,
      },
    },
  };


  return (
    <section id="about" className="h-[80vh] w-11/12 flex items-center mx-auto">
      {/* Image - slide from right */}
      <motion.div
        className="flex-1/5 h-3/5"
        variants={slideFromLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
        >
          <Image
            className="w-4/5 h-full"
            alt="Alice Wilson Image"
            style={{ filter: "brightness(0.6)" }}
            src={AliceWilson}
          />
        </motion.div>
      </motion.div>

      <div className="flex-3/5 font-inter font-medium flex flex-col gap-7">
        {/* Quote - slide from left */}
        <motion.p
          className="lg:text-3xl xl:text-4xl w-11/12 font-medium lg:leading-tight xl:leading-snug"
          variants={slideFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {t("quote")}
        </motion.p>

        {/* Other text elements - slide from bottom with stagger */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-7"
        >
          <motion.p className="w-3/5 text-[#11111180]" variants={fadeInUp}>
            {t("description")}
          </motion.p>

          <motion.div
            className="border-t border-[#11111180]"
            variants={fadeInUp}
          />

          <motion.div className="space-y-2" variants={fadeInUp}>
            <p className="text-xl">{t("person.name")}</p>
            <p className="text-[#11111180]">{t("person.title")}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
