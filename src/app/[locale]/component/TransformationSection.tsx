"use client"
import { TransformationArrow, TransformationBg, TransformationBlackText, TransformationWhiteText } from "@/assests"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import Image from "next/image"
import { slideFromBack } from "@/utils/SliderAnimation"

export default function TransformationSectionOption1() {
  const t = useTranslations("TransformationSection")

  return (
    <section className="relative h-[120vh] w-full flex flex-col">
      {/* Black background box - responsive positioning */}
<div className="absolute top-0 left-[45%] w-[10%] h-[35%] sm:left-[45%] sm:w-[10%] sm:h-[30%] md:left-[20%] md:w-[60%] md:h-[50%] lg:left-1/4 lg:w-1/2 lg:h-3/5 bg-black z-0" />

      {/* Overlaid White Text on Top of Image + Black Box */}
      <div className="absolute top-[5%] left-[10%] w-[80%] sm:top-[7%] sm:left-[15%] sm:w-[70%] md:top-[10%] md:left-[20%] md:w-[60%] lg:top-13.5 xl:top-5.5 2xl:top-0 lg:left-1/4 lg:w-1/2 flex justify-center z-20">
        <motion.div
          className="relative w-full h-auto"
          variants={slideFromBack}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <Image
            src={TransformationWhiteText || "/placeholder.svg"}
            alt="Text Image"
            className="w-full h-auto object-contain"
            width={1000}
            height={212}
          />
        </motion.div>
      </div>

      {/* Black Text Behind */}
      <div className="absolute top-[4%] left-[5%] w-[90%] sm:top-[6%] sm:left-[10%] sm:w-[80%] md:top-[9%] md:left-[15%] md:w-[70%] lg:top-[13.26%] lg:left-[7%] lg:w-[86%] flex justify-center z-10">
        <motion.div
          className="relative w-full h-auto"
          variants={slideFromBack}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <Image
            src={TransformationBlackText || "/placeholder.svg"}
            alt="Text Image"
            className="w-full h-auto object-contain"
            width={1000}
            height={212}
          />
        </motion.div>
      </div>

      {/* Top half image */}
      <div className="flex-3/5 flex items-center justify-center relative z-10">
        <Image
          className="w-1/3 h-1/3 object-contain"
          alt="Background Image"
          style={{ filter: "brightness(0.3)" }}
          src={TransformationBg || "/placeholder.svg"}
          fill
        />
      </div>

      {/* Bottom half - responsive layout */}
      <div className="flex-2/5 flex flex-col sm:flex-row w-full z-10 h-1/2">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className={`relative ${
              i === 1 ? "w-full sm:w-[50%]" : "w-full sm:w-[25%]"
            } border border-[#1111114D] p-4 sm:p-6 md:p-8 text-center flex flex-col items-center justify-between ${
              i !== 0 ? "border-t-0 sm:border-t sm:border-l-0" : ""
            }`}
          >
            {i === 1 && (
              <>
                <div className="flex-1 flex items-center justify-center flex-col gap-8 sm:gap-12 md:gap-16">
                  <h3 className="text-base sm:text-lg md:text-xl font-normal w-full sm:w-3/4 md:w-2/3 text-[#11111180]">
                    {t("subtext")}
                  </h3>
<Image
  src="/Logo_black.png"
  alt="Company Logo"
  width={150}
  height={60}
  className="h-auto w-auto"
/>
                </div>
                <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 bg-black rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center">
                  <Image src={TransformationArrow || "/placeholder.svg"} alt="Arrow Icon" width={16} height={16} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
