"use client";

import { useTranslations } from "next-intl";

export default function CommitmentSection() {
  const t = useTranslations("CommitmentSection");

  return (
    <section className="w-full min-h-[60vh] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 font-inter">
      <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
        {t.rich("headline", {
          highlight: (chunks) => <span className="text-blue">{chunks}</span>,
        })}
      </h2>
      <p className="text-[#666666] font-medium text-sm sm:text-base md:text-lg w-full sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3 text-center">
        {t("description")}
      </p>
    </section>
  );
}
