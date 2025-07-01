"use client";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import {
  slideFromBottom,
  slideFromLeft,
  slideFromRight,
} from "@/utils/SliderAnimation";
import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Background } from "@/assests"; // Replace with your actual background image

export default function ContactSection() {
  const t = useTranslations("Contact");

  return (
    <section
      id="contact"
      className="relative scroll-mt-28 py-16 mb-10 md:h-[970px] lg:h-[670px] xl:h-[640px] mx-auto xl:w-4/5 w-11/12 rounded-3xl my-6 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={Background} 
          alt="Contact Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-20 w-10/12 mx-auto flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 h-full">
        <div className="flex flex-col gap-12 lg:w-1/2 h-full justify-start">
          <div className="flex flex-col gap-8 text-white font-inter">
            <p className="font-semibold text-lg lg:text-3xl text-white">
              {t("heading")}
            </p>

            <motion.p
              className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-none text-blue"
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {t("title")}
            </motion.p>

            <motion.div
              variants={slideFromBottom}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-sm sm:text-base text-white max-w-md">
                {t("description")}
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col gap-4">
            <Feature feature={t("support1")} />
            <Feature feature={t("support2")} />
          </div>
        </div>

        <motion.div
          className="lg:w-1/2 w-full h-full flex items-end"
          variants={slideFromRight}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}

interface FeatureProps {
  feature: string;
}

function Feature({ feature }: FeatureProps) {
  return (
    <motion.div
      className="flex items-center space-x-3"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="bg-blue/40 rounded-full p-1 flex-shrink-0">
        <Plus className="text-white h-4 w-4" />
      </div>
      <p className="text-base lg:text-xl font-medium font-inter text-white">
        {feature}
      </p>
    </motion.div>
  );
}
