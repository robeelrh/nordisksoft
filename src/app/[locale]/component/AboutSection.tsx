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
import Image from "next/image";

export default function TeamShowcaseSection() {
  return (
    <section
      id="about"
      className="md:h-[950px] lg:h-[750px] xl:h-[840px] w-11/12 xl:w-4/5 mx-auto flex items-center"
    >
      <div className="grid lg:grid-cols-5 gap-14 items-start">
        <motion.div
          className="lg:col-span-3 space-y-6 h-full flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="text-2xl xl:text-3xl font-semibold font-inter leading-tight">
            <span className="text-gray-800">
              &ldquo;Nordisk soft helps companies create stunning and
              strategically sound experiences that{" "}
            </span>

            <span className="text-[#56aeff]">engage audiences</span>
            <span className="text-gray-800">.</span>
            <span className="text-gray-800">Our </span>
            <span className="text-[#56aeff]">experts</span>
            <span className="text-gray-800">
              work closely with you to ensure that every detail is aligned with
            </span>
            <span className="text-[#56aeff]"> your goals</span>
            <span className="text-gray-800">&ldquo;</span>
          </div>

          <motion.p
            className="text-lg text-[#666666] leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            From concept to launch, we craft digital solutions that not only
            look exceptional but also drive results, building connections that
            last.
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
                className="h-52 lg:h-36 xl:h-44 2xl:h-48 "
              />
            </motion.div>

            <motion.div
              className="relative"
              variants={slideFromTop}
              transition={{ duration: 0.8, ease: "easeOut" }}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
            >
              <Image
                src={ImageTop}
                alt="image-top"
                className="h-52 lg:h-36 xl:h-44 2xl:h-48"
              />

              <div className="absolute -top-10  -left-10 lg:-left-12 xl:-left-18">
                <div className="relative bg-black text-white rounded-full px-6  py-1 inline-flex items-center justify-center rotate-[-35deg] z-20">
                  <div
                    className="absolute -bottom-7  left-16 transform -translate-x-1/2 w-0 h-0 
              border-l-20 border-r-20 border-b-32 border-l-transparent 
              border-r-transparent border-b-black rotate-[-190deg]"
                  />
                  <Image
                    src={SmileGIF}
                    alt="emoji-bottom"
                    className="w-16 h-16 lg:w-14 lg:h-14 xl:w-18 xl:h-18" // adjust size as needed
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex"
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
              className="bg-[#49a1ff] rounded-full flex items-center justify-center"
            >
              <Image
                src={PencilGIF}
                alt="pencil-center"
                className="h-30 xl:h-40  w-60 lg:w-44 xl:w-60"
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
                className="h-40 lg:h-32 xl:h-44 2xl:h-48 w-56 lg:w-44 xl:w-60"
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

              <div className="absolute -top-6 lg:-top-10 xl:-top-12 -right-14 lg:-right-12 xl:-right-18">
                <div className="relative bg-black text-white rounded-full px-5 xl:px-7 py-1 inline-flex items-center justify-center rotate-[26deg] z-20">
                  <div
                    className="absolute -bottom-6 left-10 lg:left-12 transform -translate-x-1/2 w-0 h-0 
              border-l-20 border-r-20 border-b-32 border-l-transparent 
              border-r-transparent border-b-black rotate-[190deg]"
                  />
                  <Image
                    src={VictoryGIF}
                    alt="emoji-bottom"
                    className="w-16 h-16 lg:w-14 lg:h-14 xl:w-18 xl:h-18" // adjust size as needed
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
