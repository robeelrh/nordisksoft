"use client"

import { useTranslations } from "next-intl"
interface IPlanCard {
  index: number
  name: string
  price: string
  description: string
  button: string
  features: string[]
}

export default function PlanCard({ index, name, price, description, button, features }: IPlanCard) {
  const t = useTranslations("Pricing")
  const priceText = price.split(" ")
  return (
    <div
      className={`p-4 sm:p-6 md:p-8 lg:p-8 xl:p-14 flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-3 xl:gap-6 ${
        index % 2 !== 0 ? "bg-white" : "bg-transparent"
      } my-auto font-medium h-full`}
    >
      <p className="text-base">{name}</p>
      <div className="flex items-start space-x-1">
        <p className="text-2xl sm:text-3xl">{priceText[0]}</p>
        <span className="text-xs sm:text-sm text-[#11111180]">{priceText[1]}</span>
      </div>
      <p className="text-[#11111180] w-full lg:w-full xl:w-2/3 text-sm sm:text-base">{description}</p>
      <button
        className={`${
          index % 2 !== 0 ? "bg-red-500 text-white" : "bg-white text-black"
        } cursor-pointer w-full rounded-full text-black py-2 sm:py-3 lg:py-3 xl:py-5 text-sm sm:text-base lg:text-lg xl:text-xl`}
      >
        {button}
      </button>
      <p className="text-sm sm:text-base">{t("whatsIncluded")}</p>
      <div className="space-y-1 sm:space-y-2">
        {features.map((feature, index) => (
          <p key={index} className="text-[#11111180] text-xs sm:text-sm">
            {feature}
          </p>
        ))}
      </div>
    </div>
  )
}
