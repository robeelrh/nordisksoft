"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import {
  Background,
  DevOpsImage,
  OutSourcingImage,
  UIImage,
  WebImage,
} from "@/assests";
import Image, { StaticImageData } from "next/image";
import { useIsMobile } from "@/hook/useIsMobile";

type TService = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
};

export default function ServiceSection() {
  const t = useTranslations("Services");
  const partialServices = t.raw("items") as Omit<TService, "image">[];

  const staticImages = [DevOpsImage, WebImage, UIImage, OutSourcingImage];
  const services: TService[] = partialServices.map((service, index) => ({
    ...service,
    image: staticImages[index],
  }));

  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const isMobile = useIsMobile();
  const [activeService, setActiveService] = useState<number | null>(null);

  const getServiceBySearch = useCallback(
    (searchValue: string | null) => {
      if (!searchValue || searchValue === "all") {
        return services.find((s) => s.title === "Branding") || services[0];
      }

      const searchMap: { [key: string]: string } = {
        branding: "Branding",
        development: "Development",
        websites: "Websites",
        "design-support": "Design Support",
      };

      const targetTitle = searchMap[searchValue];
      return (
        services.find((s) => s.title === targetTitle) ||
        services.find((s) => s.title === "Branding") ||
        services[0]
      );
    },
    [services]
  );

  useEffect(() => {
    getServiceBySearch(search);
  }, [search, getServiceBySearch]);

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      id="services"
      className="relative scroll-mt-28 font-inter flex h-[500px] md:h-[600px] 2xl:h-[800px] py-16 2xl:py-40  mx-auto xl:w-4/5 w-11/12 rounded-3xl overflow-hidden mb-14"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={Background}
          alt="background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="flex flex-col gap-9 xl:gap-14 w-full px-5 md:px-0 md:w-10/12 mx-auto z-20 ">
        <p className="text-white text-3xl font-semibold">/{t("title")}</p>

        <motion.div
          className="flex-1 flex flex-col justify-between  ml-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={fadeInRight}
              transition={{ delay: 0.3 * index, duration: 0.4 }}
              className="relative group space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6 cursor-pointer overflow-hidden"
              onMouseEnter={() => !isMobile && setActiveService(service.id)}
              onMouseLeave={() => !isMobile && setActiveService(null)}
              onClick={() =>
                isMobile &&
                setActiveService((prev) =>
                  prev === service.id ? null : service.id
                )
              }
            >
              <motion.div
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-0 
    opacity-0 pointer-events-none transition-opacity duration-500 
    ${activeService === service.id ? "opacity-80" : "group-hover:opacity-80"}`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={90}
                  height={100}
                  className="rounded-lg"
                />
              </motion.div>

              <div className="relative z-10 flex items-start justify-between">
                <motion.p
                  className={`font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl transition-colors duration-300 text-white`}
                  animate={{
                    x: activeService === service.id ? 100 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {service.title}
                </motion.p>

                <p
                  className={`hidden sm:block font-semibold text-lg md:text-xl lg:text-2xl transition-colors duration-300 ${
                    activeService === service.id
                      ? "text-blue-400"
                      : "text-white"
                  }`}
                >
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
