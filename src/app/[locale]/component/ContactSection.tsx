"use client";
import { ContactBG } from "@/assests";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactForm from "./ContactForm";
import {
  slideFromBottom,
  slideFromLeft,
  slideFromRight,
} from "@/utils/SliderAnimation";

export default function ContactSection() {
  const t = useTranslations("Contact");

  return (
    <section
      id="contact"
      className="relative min-h-[60vh] w-full flex items-start justify-center overflow-hidden"
    >
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        alt="Background Image"
        src={ContactBG || "/placeholder.svg"}
        fill
      />
      <div className="z-10 h-full w-full flex flex-col justify-center items-start gap-6 sm:gap-8 md:gap-10 p-4 sm:p-6 md:p-8 lg:p-10 text-white font-inter">
        <motion.p
          className="mt-20 font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none"
          variants={slideFromLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {t("title")}
        </motion.p>

        <div className="flex flex-col md:flex-row justify-between w-full gap-6 md:gap-4">
          {/* Description - slide from bottom */}
          <motion.div
            className="w-full md:flex-1"
            variants={slideFromBottom}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="w-full md:w-4/5 lg:w-2/3 text-sm sm:text-base">
              {t("description")}
            </p>
          </motion.div>

          {/* Contact Form - slide from right */}
          <motion.div
            className="w-full md:flex-1"
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
