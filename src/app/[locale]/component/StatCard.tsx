"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

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
      y: -30,
      x: -50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      z: 0,
      x: 0,
      y: 0,
    },
  };

  // Split label into number and suffix
  const parseLabel = (text: string) => {
    const match = text.match(/^([\d.,]+)(.*)$/);
    return match ? [match[1], match[2]] : [text, ""];
  };

  const [numberPart, suffixPart] = parseLabel(label);

  const { ref, inView } = useInView({ triggerOnce: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className="w-full flex flex-col gap-3 sm:gap-4 font-inter"
      variants={slideFromBack}
      transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <p className="font-semibold text-4xl sm:text-5xl text-blue">
        {startCount && (
          <CountUp
            end={parseFloat(numberPart.replace(/,/g, ""))}
            duration={6}
            separator=","
            decimals={numberPart.includes(".") ? 1 : 0}
          />
        )}
        {suffixPart}
      </p>
      <div className="w-full h-[1px] bg-gray" />
      <div className="flex flex-col gap-2 sm:gap-3">
        <p className="font-semibold text-base sm:text-lg lg:text-xl">{title}</p>
        <p className="text-[#11111180] text-sm sm:text-base md:text-md lg:text-lg font-medium">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
