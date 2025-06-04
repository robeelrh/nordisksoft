"use client";

import { useTranslations } from "next-intl";
import React, { useState } from "react";
import PricingPlans from "./PricingPlans";

export default function PricingSection() {
  const t = useTranslations("Pricing");
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="font-inter lg:space-y-8 xl:space-y-12">
      <div className="flex flex-col items-center lg:gap-8 xl:gap-12">
        <p className="font-semibold lg:text-6xl xl:text-7xl leading-none">{t("title")}</p>
        <p className="text-[#11111180] lg:w-1/2 xl:w-1/4 text-center lg:text-md xl:text-lg">
          {t("description")}
        </p>
        <div className="flex items-center space-x-4">
          <span
            className={` font-medium ${
              !isMonthly ? "text-black" : "text-gray-400"
            }`}
          >
            {t("billingToggle.annual")}
          </span>
          <button
            onClick={() => setIsMonthly(!isMonthly)}
            className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors duration-300 ${
              isMonthly ? "bg-red-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                isMonthly ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
          <span
            className={` font-medium ${
              isMonthly ? "text-black" : "text-gray-400"
            }`}
          >
            {t("billingToggle.monthly")}
          </span>
        </div>
      </div>
      <PricingPlans isMonthly={isMonthly} />
    </div>
  );
}
