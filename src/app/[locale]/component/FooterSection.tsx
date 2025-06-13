"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import EmailInput from "./EmailInput"
import { Link } from "@/i18n/navigation"
import "@fontsource/koulen"
import { slideFromLeft, slideFromRight, slideFromTop } from "@/utils/SliderAnimation"

export default function FooterSection() {
  const t = useTranslations("Footer")
  const LINKS = [
    {
      text: t("links.about"),
      link: "/",
    },
    {
      text: t("links.projects"),
      link: "/",
    },
    {
      text: t("links.blog"),
      link: "/",
    },
    {
      text: t("links.content"),
      link: "/",
    },
    {
      text: t("links.privacy"),
      link: "/",
    },
    {
      text: t("links.terms"),
      link: "/",
    },
    {
      text: t("links.error404"),
      link: "/",
    },
    {
      text: t("links.behance"),
      link: "/",
    },
    {
      text: t("links.twitter"),
      link: "/",
    },
    {
      text: t("links.instagram"),
      link: "/",
    },
    {
      text: t("links.dribbble"),
      link: "/",
    },
  ]

  const firstColumnLinks = LINKS.slice(0, LINKS.length / 2 + 2)
  const secondColumnLinks = LINKS.slice(LINKS.length / 2 + 2)

  // Animation variants
  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const linkAnimation = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="min-h-[50vh] py-8 sm:py-10 md:py-12 lg:m-2 xl:m-5 bg-[#F4F4F5]">
      <div className="w-11/12 h-full mx-auto flex flex-col md:flex-row gap-6 md:gap-0">
        {/* REEM section - slide from left */}
        <motion.div
          className="w-full md:w-1/3 flex flex-col"
          variants={slideFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-6xl sm:text-7xl md:text-8xl lg:text-[160px] xl:text-[200px] font-koulen leading-none m-0 p-0 my-auto">
            REEM
          </p>
          <div className="space-y-1 sm:space-y-2 lg:space-y-1 xl:space-y-3 font-inter font-medium mt-4 md:mt-0">
            <p className="text-sm sm:text-base lg:text-md xl:text-lg">{t("contact.phone")}</p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl">{t("contact.email")}</p>
          </div>
        </motion.div>

        <div className="w-full md:w-2/3 flex flex-col justify-between font-inter font-medium gap-6 md:gap-0">
          <div className="flex flex-col md:flex-row gap-8 md:gap-4 my-auto">
            {/* Newsletter section - slide from top */}
            <motion.div
              className="w-full md:w-1/2 flex flex-col gap-2 sm:gap-3 lg:gap-2 xl:gap-4"
              variants={slideFromTop}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl">{t("newsletterTitle")}</div>
              <div className="text-[#11111180] text-sm sm:text-base lg:text-md xl:text-lg w-full md:w-[85%]">
                {t("newsletterDescription")}
              </div>
              <EmailInput />
            </motion.div>

            {/* Links section - slide from right */}
            <motion.div
              className="w-full md:w-1/2 flex gap-4 sm:gap-6 lg:gap-6 xl:gap-10"
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="flex-1 flex flex-col gap-1 sm:gap-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {firstColumnLinks.map((link, index) => (
                  <motion.div key={index} variants={linkAnimation} className="text-sm sm:text-base">
                    <Link href={link.link}>{link.text}</Link>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                className="flex-1 flex flex-col gap-1 sm:gap-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {secondColumnLinks.map((link, index) => (
                  <motion.div
                    key={index + firstColumnLinks.length}
                    variants={linkAnimation}
                    className="text-sm sm:text-base"
                  >
                    <Link href={link.link}>{link.text}</Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom description - slide from right */}
          <motion.p
            className="text-[#11111180] text-sm sm:text-base w-full md:w-[80%]"
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t("description")}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
