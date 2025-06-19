"use client"

import { FoodPackage } from "@/assests"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { useSearchParams } from "next/navigation"
import { fadeInUp, slideFromLeft } from "@/utils/SliderAnimation"

type TService = {
  id: number
  title: string
  description: string
}

export default function ServiceSection() {
  const t = useTranslations("Services")
  const services = t.raw("items") as TService[]
  const searchParams = useSearchParams()

  // Get search parameter
  const search = searchParams.get("search")

  // Function to map search values to service titles - wrapped in useCallback
  const getServiceBySearch = useCallback(
    (searchValue: string | null) => {
      if (!searchValue || searchValue === "all") {
        return services.find((s) => s.title === "Branding") || services[0]
      }

      const searchMap: { [key: string]: string } = {
        branding: "Branding",
        development: "Development",
        websites: "Websites",
        "design-support": "Design Support",
      }

      const targetTitle = searchMap[searchValue]
      return (
        services.find((s) => s.title === targetTitle) || services.find((s) => s.title === "Branding") || services[0]
      )
    },
    [services],
  )

  // Select service based on search parameter or default to "Branding"
  const [selectedService, setSelectedService] = useState<TService>(() => getServiceBySearch(search))

  // Update selected service when search parameter changes
  useEffect(() => {
    const newService = getServiceBySearch(search)
    setSelectedService(newService)
  }, [search, getServiceBySearch]) // Added getServiceBySearch to dependencies

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  }

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
  }

  const contentStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  return (
    <div
      id="services"
      className="flex min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] bg-black py-8 sm:py-10 md:py-12 lg:py-5 xl:py-10"
    >
      <div className=" flex flex-col w-11/12 mx-auto">
        <Image
          src="/Logo.png"
          alt="Company Logo"
          width={150}
          height={50}
          priority
        />

        <div className="flex-1 flex flex-col md:flex-row items-start md:items-center justify-center gap-6 sm:gap-8 md:gap-10">
          <motion.div
            className="w-full md:w-3/5 font-inter flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7 order-first md:order-last"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {services.map((service) => {
              const isSelected = service.id === selectedService.id
              return (
                <motion.div
                  key={service.id}
                  className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 cursor-pointer"
                  variants={serviceItemAnimation}
                  onClick={() => setSelectedService(service)}
                  whileHover={{
                    x: 10,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="flex items-start">
                    <motion.p
                      className={`font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl transition-colors duration-300 ${
                        isSelected ? "text-[#F4F4F5]" : "text-[#F4F4F580]"
                      }`}
                      animate={{
                        scale: isSelected ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.title}
                    </motion.p>
                  </div>
                  <motion.div className="border-t border-[#FFFFFF80]" />
                </motion.div>
              )
            })}
          </motion.div>

          <div className="w-full md:w-2/5 flex flex-col justify-center items-start space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 order-last md:order-first mt-6 md:mt-0">
            <motion.div
              className="w-full"
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="relative w-full max-w-xs sm:max-w-sm"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  className="w-full h-auto object-contain"
                  alt="Food Image"
                  src={FoodPackage || "/placeholder.svg"}
                  width={300}
                  height={200}
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-2 sm:space-y-3 md:space-y-4 font-inter"
              variants={contentStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={`title-${selectedService.id}`}
                  className="text-[#F4F4F580] text-base sm:text-lg md:text-xl lg:text-2xl"
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
                  className="text-[#F4F4F5] text-sm sm:text-base md:text-lg w-full lg:w-full xl:w-1/2"
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
        </div>
      </div>
    </div>
  )
}
