"use client";

import {
  EmojiBottom,
  EmojiTop,
  ImageBottom,
  ImageCenter,
  ImageTop,
  PencilCenter,
  TextBottom,
  TextTop,
} from "@/assests";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TeamShowcaseSection() {
  const floatAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  };

  return (
    <section className="md:h-[800px] lg:h-[600px] xl:h-[700px] w-11/12 xl:w-4/5 mx-auto flex items-center">
      <div className="grid lg:grid-cols-5 gap-14 items-start">
        <motion.div
          className="lg:col-span-3 space-y-6 h-full flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="text-2xl xl:text-3xl font-medium leading-tight">
            <span className="text-gray-800">
              &ldquo;Nordisk soft helps companies create stunning and
              strategically sound experiences that{" "}
            </span>

            <span className="text-[#56aeff]">engage audiences</span>
            <span className="text-gray-800">.</span>
            <br />
            <span className="text-gray-800">Our </span>
            <span className="text-[#56aeff]">experts</span>
            <span className="text-gray-800">
              {" "}
              work closely with you to ensure that every
            </span>
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
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            animate={floatAnimation}
            viewport={{ once: true }}
            className="flex"
          >
            <Image
              src={TextTop}
              alt="text-top"
              className="h-36 xl:h-44 2xl:h-48"
            />

            <div className="relative">
              <Image
                src={ImageTop}
                alt="image-top"
                className="h-36 xl:h-44 2xl:h-48 leading-none"
              />
              <Image
                src={EmojiTop}
                alt="emoji-top"
                className="absolute -top-12 -left-18 "
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            animate={{
              y: [0, -6, 0],
              transition: {
                duration: 3.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
            }}
            viewport={{ once: true }}
            className="flex"
          >
            <Image
              src={PencilCenter}
              alt="pencil-center"
              className="h-36 xl:h-44 2xl:h-48"
            />
            <Image src={ImageCenter} alt="image-center" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            animate={{
              y: [0, -10, 0],
              transition: {
                duration: 4.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
            }}
            viewport={{ once: true }}
            className="flex"
          >
            <div className="relative">
              <Image
                src={ImageBottom}
                alt="image-bottom"
                className="h-36 xl:h-44 2xl:h-48"
              />
              <Image
                src={EmojiBottom}
                alt="emoji-bottom"
                className="absolute -top-12 -right-18"
              />
            </div>
            <Image
              src={TextBottom}
              alt="text-bottom"
              className="h-36 xl:h-44 2xl:h-48"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
