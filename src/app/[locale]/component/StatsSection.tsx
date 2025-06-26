"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import StatCard from "./StatCard";
import { slideFromTop } from "@/utils/SliderAnimation";

type TMetrics = {
  label: string;
  title: string;
  description: string;
};

export default function StatsSection() {
  const t = useTranslations("StatsSection");
  const metrics = t.raw("metrics") as TMetrics[];

  return (
    <section className="h-[650px] xl:h-[700px]  py-8 lg:py-18 w-4/5 mx-auto flex flex-col items-start justify-around font-inter">
      <motion.div
        className="w-full flex items-center justify-center flex-col font-semibold gap-3 text-start text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-4"
        variants={slideFromTop}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-start md:text-center w-full text-black">
          {t.rich("headlineMain", {
            highlight: (chunks) => <span className="text-blue">{chunks}</span>,
          })}
        </p>
        <p className="text-start md:text-center w-full text-black">
          {t.rich("headlineSub", {
            highlight: (chunks) => <span className="text-blue">{chunks}</span>,
          })}
        </p>
      </motion.div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-10">
        {metrics.map((item, index) => (
          <div
            key={index}
            className={`${
              metrics.length === 4 && index === 3 ? "md:col-span-1" : ""
            }`}
          >
            <StatCard
              label={item.label}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
