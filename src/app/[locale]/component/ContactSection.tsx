import { ContactBG } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  const t = useTranslations("Contact");

  return (
    <section className="relative h-[60vh] w-full flex items-start justify-center">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        alt="Background Image"
        style={{ filter: "brightness(0.3)" }}
        src={ContactBG}
        fill
      />

      <div className=" z-10 h-full w-full flex flex-col justify-center items-start gap-10 p-10 text-white font-inter">
        <p className=" font-semibold lg:text-6xl xl:text-7xl leading-none">
          {t("title")}
        </p>
        <div className="flex justify-between">
          <div className="flex-1">
            <p className="w-2/3">{t("description")}</p>
          </div>
          <div className="flex-1">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
