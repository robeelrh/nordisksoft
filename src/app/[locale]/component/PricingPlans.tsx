import { useTranslations } from "next-intl";
import PlanCard from "./PlanCard";

interface IPricingPlans {
  isMonthly: boolean;
}
type Plans = {
  monthly: PlanDetails[];
  yearly: PlanDetails[];
};
type PlanDetails = {
  id: number;
  name: string;
  price: string;
  description: string;
  button: string;
  features: string[];
};

export default function PricingPlans({ isMonthly }: IPricingPlans) {
  const t = useTranslations("Pricing");

  const plans = t.raw("plans") as Plans;
  let planDetails: PlanDetails[] = [];
  if (isMonthly) {
    planDetails = plans.monthly;
  } else {
    planDetails = plans.yearly;
  }
  console.log("plans are ", planDetails);
  return (
    <section className="h-[70vh] lg:mx-2 xl:mx-5 bg-[#F4F4F5] flex items-center justify-center">
      {planDetails.length === 0 ? (
        <div className="text-red-500 text-center lg:text-lg xl:text-xl">No Plans Yet</div>
      ) : (
        <div className="h-full mx-auto flex lg:gap-6 xl:gap-9">
          {planDetails.map((plan, index) => (
            <PlanCard key={index} {...plan} index={index} />
          ))}
        </div>
      )}
    </section>
  );
}
