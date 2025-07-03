"use client";

import { motion } from "framer-motion";
import EmailInput from "./EmailInput";
import { Link } from "@/i18n/navigation";
import "@fontsource/koulen";
import {
  slideFromBottom,
  slideFromLeft,
  slideFromRight,
  slideFromTop,
  slideFromTopLeft,
} from "@/utils/SliderAnimation";
import Image from "next/image";
import { LogoBlack } from "@/assests";
import { useTranslations } from "next-intl";

export default function FooterSection() {
  const t = useTranslations("Footer");
  const LINKS = [
    {
      text: t("links.projects"),
      link: "#projects",
    },
    {
      text: t("links.services"),
      link: "#services",
    },
    {
      text: t("links.about"),
      link: "#about",
    },
    {
      text: t("links.faq"),
      link: "#faq",
    },
    {
      text: t("links.contact"),
      link: "#contact",
    },
    // {
    //   text: t("links.privacy"),
    //   link: "/privacy",
    // },
    // {
    //   text: t("links.terms"),
    //   link: "/terms",
    // },
    {
      text: "Twitter",
      link: "https://twitter.com",
    },
    {
      text: "Instagram",
      link: "https://instagram.com",
    },
    {
      text: "Facebook",
      link: "https://facebook.com",
    },
    {
      text: "Dribbble",
      link: "https://dribbble.com",
    },
  ];

  const firstColumnLinks = LINKS.slice(0, LINKS.length / 2 + 2);
  // const secondColumnLinks = LINKS.slice(LINKS.length / 2 + 2);

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const linkAnimation = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section className="min-h-[600px] md:min-h-[200px] md:h-[500px] bg-[#F4F4F5] w-full mt-24">
      <div className="h-full flex flex-col gap-6 md:gap-0  md:flex-row justify-between mx-auto xl:w-4/5 w-11/12 py-16">
        <div className="w-full md:w-1/3 h-full flex flex-col justify-between mt-4 md:mt-0">
          <motion.div
            className="flex items-center justify-start"
            variants={slideFromTopLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <Image
                src={LogoBlack}
                alt="logo-black"
                width={300}
                height={200}
              />
            </div>
          </motion.div>

          <div className="space-y-1 sm:space-y-2 lg:space-y-1 xl:space-y-3 font-inter font-medium mt-4 md:mt-0">
            <motion.p
              className="text-sm lg:text-md xl:text-lg"
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              +47 929 24 053
            </motion.p>
            <motion.p
              className="text-md md:text-2xl lg:text-2xl xl:text-3xl"
              variants={slideFromBottom}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              contact@nordisksoft.com
            </motion.p>
          </div>
        </div>

        <div className="w-full md:w-2/3 flex flex-col justify-between  font-inter font-medium">
          <div className="flex flex-col md:flex-row gap-0 lg:gap-2">
            <motion.div
              className="w-full md:w-3/5 flex flex-col gap-4 sm:gap-6 lg:gap-4 xl:gap-8"
              variants={slideFromTop}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex flex-col gap-2 sm:gap-3 lg:gap-2 xl:gap-4 ml-6 lg:ml-0">
                <div className="text-2xl lg:text-2xl xl:text-[32px] text-blue font-medium">
                  {t("newsletterTitle")}
                </div>
                <div className="text-[#11111180] text-sm sm:text-base lg:text-md xl:text-lg w-full font-medium md:w-[80%] xl:w-[75%]">
                  {t("newsletterDescription")}
                </div>
              </div>
              <div className="hidden md:flex">
                <EmailInput />
              </div>
            </motion.div>

            <div className="hidden w-full md:w-2/5 md:flex flex-col items-end xl:items-center">
              <motion.div
                className="flex lg:gap-4 xl:gap-6"
                variants={slideFromRight}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
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
                    <motion.div
                      key={index}
                      variants={linkAnimation}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="text-base lg:text-xl whitespace-nowrap"
                    >
                      <Link href={link.link}>{link.text}</Link>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>

          <motion.p
            className="text-[#11111180] text-base w-full md:w-[67%] mx-auto lg:mx-0"
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {t("description")}
          </motion.p>
        </div>

        {/*for  mobile */}
        <div className="md:hidden flex w-full">
          <EmailInput />
        </div>
        <div className="md:hidden w-full px-2 flex flex-col  items-center">
          <motion.div
            className="flex w-full justify-between"
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
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
                <motion.div
                  key={index}
                  variants={linkAnimation}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-base lg:text-lg"
                >
                  <Link href={link.link}>{link.text}</Link>
                </motion.div>
              ))}
            </motion.div>
            {/* <motion.div
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
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-base lg:text-lg"
                >
                  <Link href={link.link}>{link.text}</Link>
                </motion.div>
              ))}
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
