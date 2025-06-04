import { useTranslations } from "next-intl";
interface IPlanCard {
  index: number;
  name: string;
  price: string;
  description: string;
  button: string;
  features: string[];
}

export default function PlanCard({
  index,
  name,
  price,
  description,
  button,
  features,
}: IPlanCard) {
  const t = useTranslations("Pricing");
  const priceText = price.split(" ");
  return (
    <div
      className={`lg:p-8 xl:p-14 flex flex-col lg:gap-3 xl:gap-6 ${
        index % 2 !== 0 ? "bg-white" : "bg-transparent"
      } my-auto font-medium`}
    >
      <p className="text-base">{name}</p>
      <div className="flex items-start space-x-1">
        <p className="text-3xl">{priceText[0]}</p>
        <span className="text-sm text-[#11111180] ">{priceText[1]}</span>
      </div>
      <p className="text-[#11111180] lg:w-full xl:w-2/3">{description}</p>
      <button
        className={`${
          index % 2 !== 0 ? "bg-red-500 text-white" : "bg-white text-black"
        } cursor-pointer w-full rounded-full text-black lg:py-3 xl:py-5 lg:text-lg xl:text-xl`}
      >
        {button}
      </button>
      <p>{t("whatsIncluded")}</p>
      <div className="space-y-1">
        {features.map((feature, index) => (
          <p key={index} className="text-[#11111180]">
            {feature}
          </p>
        ))}
      </div>
    </div>
  );
}
