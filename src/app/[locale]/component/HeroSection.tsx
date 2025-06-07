import { HeroSectionBg } from "@/assests";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Navbar from "./Navbar";

export default function HeroSection() {
  const t = useTranslations("HeroSection");

  return (
    <section className="relative h-[110vh] w-full flex items-start justify-center">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        alt="Background Image"
        src={HeroSectionBg}
        fill
      />
      <div className="z-10 flex flex-col w-full h-full">
        <Navbar />
        <div className="flex-1 flex flex-col justify-center items-start lg:px-5 xl:px-10 text-white font-inter">
          <p className="font-semibold lg:text-[150px] xl:text-[230px] 2xl:text-[260px] leading-none">
            {t("headlineMain")}
          </p>
          <p className="font-semibold lg:text-[110px] xl:text-[140px] 2xl:text-[190px] leading-none lg:ml-[23%] xl:ml-[26%] 2xl:ml-[23%]">
            {t("headlineSub")}
          </p>
          <p className="lg:w-[40%] xl:w-[22%] font-normal mt-6">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
}
