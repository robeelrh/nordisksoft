"use client"

import { useTranslations } from "next-intl"
import PlanCard from "./PlanCard"

interface IPricingPlans {
  isMonthly: boolean
}
type Plans = {
  monthly: PlanDetails[]
  yearly: PlanDetails[]
}
type PlanDetails = {
  id: number
  name: string
  price: string
  description: string
  button: string
  features: string[]
}

export default function PricingPlans({ isMonthly }: IPricingPlans) {
  const t = useTranslations("Pricing")

  const plans = t.raw("plans") as Plans
  let planDetails: PlanDetails[] = []
  if (isMonthly) {
    planDetails = plans.monthly
  } else {
    planDetails = plans.yearly
  }
  return (
    <section className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] mx-0 sm:mx-1 lg:mx-2 xl:mx-5 bg-[#F4F4F5] flex items-center justify-center py-6 sm:py-8">
      {planDetails.length === 0 ? (
        <div className="text-red-500 text-center text-base sm:text-lg lg:text-lg xl:text-xl">No Plans Yet</div>
      ) : (
        <div className="w-full px-4 sm:px-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6 xl:gap-9">
          {planDetails.map((plan, index) => (
            <PlanCard key={index} {...plan} index={index} />
          ))}
        </div>
      )}
    </section>
  )
}
