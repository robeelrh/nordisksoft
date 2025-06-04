import FooterSection from "@/app/[locale]/component/FooterSection";
import ContactSection from "@/app/[locale]/component/ContactSection";
import FAQSection from "./component/FAQSection";
import PricingSection from "./component/PricingSection";

export default function HomePage() {
  return (
    <>
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
