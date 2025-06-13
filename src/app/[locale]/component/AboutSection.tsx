"use client"

import { AliceWilson } from "@/assests"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import Image from "next/image"
import { fadeInUp, slideFromLeft, slideFromRight } from "@/utils/SliderAnimation"

export default function AboutSection() {
  const t = useTranslations("About")

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.6,
      },
    },
  }

  return (
    <section id="about" className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="w-11/12 max-w-[1600px] mx-auto flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-12 items-center">
        {/* Image - slide from left */}
        <motion.div
          className="w-full md:w-1/3 lg:w-2/5 px-6 sm:px-4 md:px-0"
          variants={slideFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="relative aspect-[3/4] w-[50%] sm:w-[35%] md:w-full max-w-sm mx-auto"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <Image
              className="object-cover"
              alt="Alice Wilson Image"
              style={{ filter: "brightness(0.6)" }}
              src={AliceWilson || "/placeholder.svg?height=600&width=400"}
              fill
            />
          </motion.div>
        </motion.div>

        <div className="w-full md:w-2/3 lg:w-3/5 font-inter font-medium flex flex-col gap-5 sm:gap-6 md:gap-7">
          {/* Quote - slide from right */}
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-medium leading-tight sm:leading-tight md:leading-tight xl:leading-snug"
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.5 }}
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
            className="flex flex-col gap-5 sm:gap-6 md:gap-7"
          >
            <motion.p
              className="w-full md:w-4/5 lg:w-3/5 text-sm sm:text-base md:text-lg text-[#11111180]"
              variants={fadeInUp}
            >
              {t("description")}
            </motion.p>

            <motion.div className="border-t border-[#11111180]" variants={fadeInUp} />

            <motion.div className="space-y-1 sm:space-y-2" variants={fadeInUp}>
              <p className="text-lg sm:text-xl">{t("person.name")}</p>
              <p className="text-sm sm:text-base text-[#11111180]">{t("person.title")}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
