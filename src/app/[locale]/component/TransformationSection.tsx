"use client";
import {
  LogoBlack,
  TransformationArrow,
  TransformationBg,
  TransformationBlackText,
  TransformationWhiteText,
} from "@/assests";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideFromBack } from "@/utils/SliderAnimation";

export default function TransformationSectionOption1() {
  const t = useTranslations("TransformationSection");

  return (
    <section className="relative h-[100vh] w-full flex flex-col">
      <div className="absolute top-[5%] left-[10%] w-[80%] sm:top-[7%] sm:left-[15%] sm:w-[70%] md:top-[15%] xl:top-[10%] md:left-[30%] md:w-[40%] flex justify-center z-20">
        <motion.div
          className="relative w-full h-auto"
          variants={slideFromBack}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            src={TransformationWhiteText}
            alt="Text Image"
            className="w-full h-auto object-contain"
            width={1000}
            height={212}
          />
        </motion.div>
      </div>

      <div className="absolute top-[4%] left-[5%] w-[90%] sm:top-[6%] sm:left-[10%] sm:w-[80%] md:top-[15%] xl:top-[10%] md:left-[10%] md:w-[80%] flex justify-center z-10">
        <motion.div
          className="relative w-full h-auto"
          variants={slideFromBack}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            src={TransformationBlackText}
            alt="Text Image"
            className="w-full h-auto object-contain"
            width={1000}
            height={212}
          />
        </motion.div>
      </div>

      <div className="flex-3/5 w-2/5  mx-auto z-10 h-[70vh]">
        <Image
          className="w-full h-full object-fill"
          alt="Background Image"
          src={TransformationBg}
        />
      </div>

      {/* Bottom half - responsive layout */}
      <div className="flex-2/5 flex flex-col sm:flex-row w-full z-10 h-1/2">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className={`relative ${
              i === 1 ? "w-full sm:w-[40%]" : "w-full sm:w-[30%]"
            } border border-[#1111114D] p-4 sm:p-6 md:p-8 text-center flex flex-col items-center justify-between `}
          >
            {i === 1 && (
              <>
                <div className="flex-1 flex items-center justify-center flex-col gap-8 sm:gap-12 md:gap-16">
                  <h3 className=" text-base sm:text-lg md:text-xl font-normal  w-full sm:w-3/4 md:w-2/3 text-[#11111180]">
                    {t("subtext")}
                  </h3>

                  <Image src={LogoBlack} alt="Company Logo" width={220} />
                </div>

                <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2">
                  <a
                    href="#services"
                    className="scroll-smooth block w-fit cursor-pointer group"
                  >
                    <div className="relative">
                      <div
                        className="
        bg-black rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
        flex items-center justify-center
        transition-all duration-300
        group-hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]
        group-hover:scale-110
      "
                      >
                        <Image
                          src={TransformationArrow || "/placeholder.svg"}
                          alt="Arrow Icon"
                          width={16}
                          height={16}
                          className="transition-transform duration-300 group-hover:scale-125"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
