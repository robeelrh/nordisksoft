import { useTranslations } from "next-intl";

export default function CommitmentSection() {
  const t = useTranslations("CommitmentSection");

  return (
    <section className="h-[50vh] w-full flex flex-col items-center justify-center lg:gap-5 xl:gap-8 lg:p-5 xl:p-10 font-inter">
      <p className="font-semibold text-7xl">{t("headline")}</p>
      <p className="text-[#11111180] font-medium text-lg lg:w-2/3 xl:w-1/3 text-center">
        {t("description")}
      </p>
    </section>
  );
}
