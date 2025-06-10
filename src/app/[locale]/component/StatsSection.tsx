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
    <section className="h-[70vh] w-full flex flex-col items-start justify-center gap-10 font-inter lg:p-5 xl:p-10">
      <div className="flex-1 w-full flex items-center justify-center flex-col font-semibold text-start text-4xl">
        <motion.p
          variants={slideFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
        >
          {t("headlineMain")}
        </motion.p>
        <motion.p
          variants={slideFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3 }}
        >
          {t("headlineSub")}
        </motion.p>
      </div>
      <div className="w-full flex gap-10">
        {metrics.map((item, index) => (
          <StatCard
            key={index}
            label={item.label}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
