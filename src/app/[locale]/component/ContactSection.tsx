"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import {
  slideFromBottom,
  slideFromLeft,
  slideFromRight,
} from "@/utils/SliderAnimation";
import { Plus } from "lucide-react";

export default function ContactSection() {
  const t = useTranslations("Contact");
  const features = t.raw("features") as string[];

  return (
    <section
      id="contact"
      className="relative min-h-[60vh]  flex items-start justify-between overflow-hidden w-4/5 mx-auto"
    >
      {/* <Image
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        alt="Background Image"
        src={ContactBG || "/placeholder.svg"}
        fill
      /> */}
      <div className="flex flex-col gap-12 flex-2/5">
        <div className=" h-full  flex flex-col justify-center items-start gap-6 text-black font-inter">
          <p className="font-semibold text-lg lg:text-2xl">
            {t("headlineTop")}
          </p>
          <motion.p
            className=" font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none text-blue"
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {t("headlineMain")}
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
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {features.map((feature, index) => (
            <Feature feature={feature} key={index} />
          ))}
        </div>
      </div>
      <motion.div
        className="w-full md:flex-3/5"
        variants={slideFromRight}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <ContactForm />
      </motion.div>
    </section>
  );
}

interface FeatureProps {
  feature: string;
}
function Feature({ feature }: FeatureProps) {
  return (
    <div className="flex items-center space-x-2">
      <div className="bg-blue rounded-full p-1  ">
        <Plus className="text-white cursor-pointer h-4 w-4 sm:h-5 sm:w-5" />
      </div>
      <p className="text-xl">{feature}</p>
    </div>
  );
}
