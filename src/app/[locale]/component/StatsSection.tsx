"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import StatCard from "./StatCard"
import { slideFromTop } from "@/utils/SliderAnimation"

type TMetrics = {
  label: string
  title: string
  description: string
}

export default function StatsSection() {
  const t = useTranslations("StatsSection")
  const metrics = t.raw("metrics") as TMetrics[]

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex flex-col items-start justify-center gap-6 sm:gap-8 md:gap-10 font-inter">
      <div className="w-full flex items-center justify-center flex-col font-semibold text-start text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-4">
        <motion.p
          variants={slideFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          className="text-center sm:text-start w-full"
        >
          {t("headlineMain")}
        </motion.p>
        <motion.p
          variants={slideFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3 }}
          className="text-center sm:text-start w-full"
        >
          {t("headlineSub")}
        </motion.p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-10">
        {metrics.map((item, index) => (
          <div key={index} className={`${metrics.length === 4 && index === 3 ? "md:col-span-3 lg:col-span-1" : ""}`}>
            <StatCard label={item.label} title={item.title} description={item.description} />
          </div>
        ))}
      </div>
    </section>
  )
}
