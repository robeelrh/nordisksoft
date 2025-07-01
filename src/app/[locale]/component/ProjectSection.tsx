// === ProjectSection.tsx ===

"use client";
import {
  DevOpsProject1,
  DevOpsProject2,
  UiUxProject1,
  UiUxProject2,
} from "@/assests";
import { slideFromBottom, slideFromTop } from "@/utils/SliderAnimation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

export default function ProjectSection() {
  const t = useTranslations("ProjectSection");

  const slideFromLeft = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 200 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section
      id="projects"
      className="scroll-mt-20 w-4/5 mx-auto min-h-[900px] lg:min-h-[600px] lg:h-[650px] xl:h-[740px] 2xl:h-[820px] flex flex-col justify-between  py-12 font-inter"
    >
      <div className="w-full flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 ">
        <motion.h2
          className="font-semibold text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-center"
          initial="hidden"
          whileInView="visible"
          variants={slideFromLeft}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: true }}
        >
          {t.rich("headline", {
            highlight: (chunks) => <span className="text-blue">{chunks}</span>,
          })}
        </motion.h2>
        <motion.p
          className="text-[#666666] font-medium text-sm sm:text-base md:text-lg w-full sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2 text-center"
          initial="hidden"
          whileInView="visible"
          variants={slideFromRight}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: true }}
        >
          {t("subheadline")}
        </motion.p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-center ">
        <motion.div
          className="flex-[1_1_300px] max-w-[500px] w-full "
          initial="hidden"
          whileInView="visible"
          variants={slideFromLeft}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: true }}
        >
          <BigCard text={t("devOpsProject")} image={DevOpsProject2} />
        </motion.div>

        <div className="flex flex-col gap-6 flex-[1_1_300px] max-w-[500px] w-full ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideFromTop}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SmallCard text={t("ui/uxProject")} image={UiUxProject1} />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideFromBottom}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SmallCard text={t("devOpsProject")} image={DevOpsProject1} />
          </motion.div>
        </div>

        <motion.div
          className="flex-[1_1_300px] max-w-[500px] w-full "
          initial="hidden"
          whileInView="visible"
          variants={slideFromRight}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <BigCard text={t("ui/uxProject")} image={UiUxProject2} />
        </motion.div>
      </div>
    </section>
  );
}

interface IBigCard {
  text: string;
  image: StaticImageData | string;
}

function BigCard({ text, image }: IBigCard) {
  return (
    <div className="relative w-full aspect-[464/484] overflow-hidden rounded-xl shadow-md">
      <Image
        src={image}
        alt={text}
        fill
        className="object-cover"
        style={{ filter: "brightness(0.5)" }}
        sizes="100%"
      />
      <div className="absolute bottom-0 left-0 text-white p-4 text-xl md:text-2xl font-semibold z-10">
        {text}
      </div>
    </div>
  );
}

interface ISmallCard {
  text: string;
  image: StaticImageData | string;
}

function SmallCard({ text, image }: ISmallCard) {
  return (
    <div className="relative w-full aspect-[464/230] overflow-hidden rounded-xl shadow-md">
      <Image
        src={image}
        alt={text}
        fill
        className="object-cover"
        style={{ filter: "brightness(0.5)" }}
        sizes="100%"
      />
      <div className="absolute bottom-0 left-0 text-white p-4 text-xl md:text-2xl font-semibold z-10">
        {text}
      </div>
    </div>
  );
}
