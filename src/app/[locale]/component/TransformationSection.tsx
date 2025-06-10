import {
  TransformationArrow,
  TransformationBg,
  TransformationBlackText,
  TransformationWhiteText,
} from "@/assests";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function TransformationSection() {
  const t = useTranslations("TransformationSection");

  return (
    <section className="relative h-[120vh] w-full flex flex-col ">
      <div className="absolute top-0 left-1/4 w-1/2 h-3/5 bg-black z-0" />

      {/* Overlaid Text on Top of Image + Black Box */}
      <div className="absolute lg:top-13.5 xl:top-5.5 2xl:top-0 lg:left-1/4 lg:w-1/2 flex justify-center  z-20">
        <div className="relative w-full h-auto">
          <Image
            src={TransformationWhiteText}
            alt="Text Image"
            className="w-full h-auto object-contain"
            width={1000} // or your image's natural width
            height={212} // maintain aspect ratio
          />
        </div>
      </div>

      <div className="absolute lg:top-[13.26%] lg:left-[7%] lg:w-[86%] flex justify-center  z-10">
        <div className="relative w-full h-auto">
          <Image
            src={TransformationBlackText}
            alt="Text Image"
            className="w-full h-auto object-contain"
            width={1000} // or your image's natural width
            height={212} // maintain aspect ratio
          />
        </div>
      </div>

      {/* Top half image */}
      <div className="flex-3/5 flex items-center justify-center relative z-10">
        <Image
          className="w-1/3 h-1/3 object-contain"
          alt="Background Image"
          style={{ filter: "brightness(0.3)" }}
          src={TransformationBg}
          fill
        />
      </div>

      {/* Bottom half */}
      <div className="flex-2/5 flex w-full z-10 h-1/2">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className={`relative ${
              i === 1 ? "w-[50%]" : "w-[25%]"
            } border border-[#1111114D] p-8 text-center flex flex-col items-center justify-between`}
          >
            {i === 1 && (
              <>
                <div className="flex-1 flex items-center justify-center flex-col gap-16">
                  <h3 className="text-xl font-normal w-2/3 text[#11111180]">
                    {t("subtext")}
                  </h3>
                  <p className="font-koulen text-4xl font-medium text-black">
                    REEM
                  </p>
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black rounded-full w-16 h-16 flex items-center justify-center">
                  <Image
                    src={TransformationArrow}
                    alt="Arrow Icon"
                    width={16}
                    height={16}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
