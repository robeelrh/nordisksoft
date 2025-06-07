import { AliceWilson } from "@/assests";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutSection() {
  const t = useTranslations("About");
  return (
    <section id="about" className="h-[80vh] w-11/12 flex items-center mx-auto">
      <div className="flex-1/5 h-3/5">
        <Image
          className="w-4/5 h-full object-cover "
          alt="ALice Wilson Image"
          style={{ filter: "brightness(0.6)" }}
          src={AliceWilson}
        />
      </div>
      <div className="flex-3/5 font-inter font-medium flex flex-col gap-7">
        <p className="lg:text-3xl xl:text-4xl w-11/12 font-medium lg:leading-tight xl:leading-snug">
          {t("quote")}
        </p>
        <p className="w-3/5 text-[#11111180]">{t("description")}</p>
        <div className="border-t border-[#11111180]" />
        <div className="space-y-2">
          <p className="text-xl">{t("person.name")}</p>
          <p className="text-[#11111180]">{t("person.title")}</p>
        </div>
      </div>
    </section>
  );
}
