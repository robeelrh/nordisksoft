"use client";

import { FoodPackage } from "@/assests";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { fadeInUp, slideFromLeft } from "@/utils/SliderAnimation";

type TService = {
  id: number;
  title: string;
  description: string;
};

export default function ServiceSection() {
  const t = useTranslations("Services");
  const services = t.raw("items") as TService[];

  // Select "Branding" by default
  const defaultService =
    services.find((s) => s.title === "Branding") || services[0];
  const [selectedService, setSelectedService] =
    useState<TService>(defaultService);

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const serviceItemAnimation = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const contentStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <div
      id="services"
      className="h-[70vh] bg-black flex items-center lg:py-5 xl:py-10"
    >
      <div className="w-11/12 mx-auto flex flex-col h-full justify-center">
        <p className="font-koulen text-4xl text-white">REEM</p>
        <div className="flex flex-1 items-center h-full gap-10">
          {/* Left pane */}
          <div className="flex-1/4 flex flex-col justify-center items-start space-y-7 w-2/5 h-full">
            {/* Image - slide from left */}
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  className="w-2/3 h-1/3 object-cover"
                  alt="Food Image"
                  src={FoodPackage}
                />
              </motion.div>
            </motion.div>

            {/* Title and description - slide from bottom */}
            <motion.div
              className="space-y-4 font-inter"
              variants={contentStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={`title-${selectedService.id}`}
                  className="text-[#F4F4F580]"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {selectedService.title}
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${selectedService.id}`}
                  className="text-[#F4F4F5] xl:w-1/2 lg:w-full"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {selectedService.description}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right pane - Service list */}
          <motion.div
            className="flex-3/4 font-inter flex flex-col gap-7 justify-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {services.map((service, index) => {
              const isSelected = service.id === selectedService.id;
              return (
                <motion.div
                  key={service.id}
                  className="space-y-5 cursor-pointer"
                  variants={serviceItemAnimation}
                  onClick={() => setSelectedService(service)}
                  whileHover={{
                    x: 10,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="flex items-start space-x-1">
                    <motion.p
                      className={`font-semibold lg:text-4xl xl:text-5xl transition-colors duration-300 ${
                        isSelected ? "text-[#F4F4F5]" : "text-[#F4F4F580]"
                      }`}
                      animate={{
                        scale: isSelected ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.title}
                    </motion.p>
                    <span className="text-xm font-medium text-white">{`{${
                      index + 1
                    }}`}</span>
                  </div>
                  <motion.div
                    className="border-t border-[#FFFFFF80]"
                    // animate={{
                    //   scaleX: isSelected ? 1.1 : 1,
                    //   opacity: isSelected ? 1 : 0.5,
                    // }}
                    // transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
