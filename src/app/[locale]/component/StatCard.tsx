"use client";
import { motion } from "framer-motion";

interface StatCardProps {
  label: string;
  title: string;
  description: string;
}

export default function StatCard({ label, title, description }: StatCardProps) {
  const slideFromBack = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      z: -100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      z: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <div className="w-full flex flex-col gap-3 sm:gap-4 font-inter">
      <motion.p
        className="font-semibold text-4xl sm:text-5xl text-blue"
        variants={slideFromBack}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        {label}
      </motion.p>
      <div className="w-full h-[1px] bg-gray" />
      <div className="flex flex-col gap-2 sm:gap-3">
        <p className="font-semibold text-base sm:text-lg lg:text-xl">{title}</p>
        <p className="text-[#11111180] text-sm sm:text-base md:text-md lg:text-lg font-medium">
          {description}
        </p>
      </div>
    </div>
  );
}
