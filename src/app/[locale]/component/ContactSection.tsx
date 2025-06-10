"use client";
import { ContactBG } from "@/assests";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactForm from "./ContactForm";
import { slideFromBottom, slideFromLeft, slideFromRight } from "@/utils/SliderAnimation";

export default function ContactSection() {
  const t = useTranslations("Contact");

  return (
    <section
      id="contact"
      className="relative h-[60vh] w-full flex items-start justify-center overflow-hidden" // Added overflow-hidden
    >
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        alt="Background Image"
        src={ContactBG}
        fill
      />
      <div className="z-10 h-full w-full flex flex-col justify-center items-start gap-10 p-10 text-white font-inter">
        {/* Title - slide from left */}
        <motion.p
          className="font-semibold lg:text-6xl xl:text-7xl leading-none"
          variants={slideFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {t("title")}
        </motion.p>

        <div className="flex justify-between w-full">
          {/* Description - slide from bottom */}
          <motion.div
            className="flex-1"
            variants={slideFromBottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="w-2/3">{t("description")}</p>
          </motion.div>

          {/* Contact Form - slide from right */}
          <motion.div
            className="flex-1"
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
