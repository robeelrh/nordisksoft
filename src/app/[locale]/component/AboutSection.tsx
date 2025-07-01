"use client";

import {
  ImageBottom,
  ImageCenter,
  ImageTop,
  PencilGIF,
  TextBottom,
  TextTop,
  SmileGIF,
  VictoryGIF,
} from "@/assests";
import {
  slideFromBottom,
  slideFromLeft,
  slideFromRight,
  slideFromTop,
} from "@/utils/SliderAnimation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function TeamShowcaseSection() {
  const t = useTranslations("About");

  return (
    <section
      id="about"
      className="scroll-mt-28 h-[1150px] md:h-[950px] lg:h-[750px] xl:h-[840px] w-11/12 xl:w-4/5 mx-auto flex items-center"
    >
      <div className="grid lg:grid-cols-5 gap-20 md:gap-14 items-start">
        <motion.div
          className="lg:col-span-3 space-y-6 h-full flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="text-2xl xl:text-3xl font-semibold font-inter leading-tight text-gray-800">
            {t.rich("quote", {
              highlight: (chunks) => (
                <span className="text-blue">{chunks}</span>
              ),
            })}
          </div>

          <motion.p
            className="text-lg text-[#666666] leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t("description")}.
          </motion.p>
          <div className="h-[1px] bg-gray" />
        </motion.div>

        <div className="lg:col-span-2 h-full flex flex-col items-center lg:items-end">
          <motion.div
            className="flex"
            animate={{
              y: [0, -12, 0],
              transition: {
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
            }}
          >
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              transition={{ delay: 0.3, duration: 0.6 }}
              whileInView={"visible"}
              viewport={{ once: true }}
            >
              <Image
                src={TextTop}
                alt="text-top"
                className="h-52 lg:h-36 xl:h-44 2xl:h-48 leading-none"
              />
            </motion.div>

            <motion.div
              className="relative leading-none"
              variants={slideFromTop}
              transition={{ duration: 0.8, ease: "easeOut" }}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
            >
              <Image
                src={ImageTop}
                alt="image-top"
                className="h-52 lg:h-36 xl:h-44 2xl:h-48 leading-none"
              />

              <div className="absolute top-0 md:-top-6 -left-10 lg:-left-12 xl:-left-14">
                <div className="relative bg-black text-white rounded-full px-6  py-1 inline-flex items-center justify-center rotate-[-35deg] z-20">
                  <div
                    className="absolute -bottom-7  left-14 xl:left-16 transform -translate-x-1/2 w-0 h-0 
              border-l-20 border-r-20 border-b-32 border-l-transparent 
              border-r-transparent border-b-black rotate-[-190deg]"
                  />
                  <Image
                    src={SmileGIF}
                    alt="emoji-bottom"
                    className="w-12 h-10  md:w-14 md:h-12 lg:w-12 lg:h-10 xl:w-16 xl:h-12" // adjust size as needed
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex leading-none"
            animate={{
              y: [0, -6, 0],
              transition: {
                duration: 3.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
            }}
          >
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              transition={{ delay: 0.3, duration: 0.6 }}
              whileInView={"visible"}
              viewport={{ once: true }}
              className="bg-[#49a1ff] rounded-full flex items-center justify-center leading-none"
            >
              <Image
                src={PencilGIF}
                alt="pencil-center"
                className="h-14 xl:h-24 w-60 lg:w-36 xl:w-52"
              />
            </motion.div>
            <motion.div
              variants={slideFromRight}
              initial="hidden"
              transition={{ delay: 0.3, duration: 0.6 }}
              whileInView={"visible"}
              viewport={{ once: true }}
            >
              <Image
                src={ImageCenter}
                alt="image-center"
                className="h-36 lg:h-30 xl:h-36 2xl:h-40 w-64 lg:w-52 xl:w-72"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex"
            animate={{
              y: [0, -10, 0],
              transition: {
                duration: 4.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
            }}
          >
            <motion.div
              className="relative"
              variants={slideFromLeft}
              transition={{ delay: 0.3, duration: 0.6 }}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
            >
              <Image
                src={ImageBottom}
                alt="image-bottom"
                className="h-52 lg:h-36 xl:h-44 2xl:h-48"
              />

              <div className="absolute -top-6 xl:-top-8 -right-14 lg:-right-12 xl:-right-16">
                <div className="relative bg-black text-white rounded-full px-5 xl:px-7 py-1 inline-flex items-center justify-center rotate-[26deg] z-20">
                  <div
                    className="absolute -bottom-6 left-10 lg:left-10 xl:left-12 transform -translate-x-1/2 w-0 h-0 
              border-l-20 border-r-20 border-b-32 border-l-transparent 
              border-r-transparent border-b-black rotate-[190deg]"
                  />
                  <Image
                    src={VictoryGIF}
                    alt="emoji-bottom"
                    className="w-16 h-14 lg:w-12 lg:h-10 xl:w-16 xl:h-14" // adjust size as needed
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={slideFromBottom}
              transition={{ duration: 0.8, ease: "easeOut" }}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
            >
              <Image
                src={TextBottom}
                alt="text-bottom"
                className="h-52 lg:h-36 xl:h-44 2xl:h-48  "
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
