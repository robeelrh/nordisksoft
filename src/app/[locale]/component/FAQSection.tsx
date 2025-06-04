import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FAQSection() {
  const t = useTranslations("FAQ");
  const FAQS = t.raw("questions") as string[];

  return (
    <section className="h-[60vh] w-full flex items-center lg:px-6 xl:px-10 font-inter">
      <div className="w-2/5">
        <p className="font-semibold lg:text-7xl xl:text-8xl">{t("title")}</p>
        <p className="text-[#11111180] mt-2 w-2/3">{t("description")}</p>
      </div>
      <div className="w-3/5 lg:space-y-2 xl:space-y-4">
        {FAQS.map((question, index) => (
          <div
            className="border-b border-black flex justify-between items-center lg:py-3 xl:py-4"
            key={index}
          >
            <p>{question}</p>
            <Plus className="text-red-500 cursor-pointer" size={15} />
          </div>
        ))}
      </div>
    </section>
  );
}
