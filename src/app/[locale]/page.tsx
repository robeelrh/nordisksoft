import FooterSection from "@/app/[locale]/component/FooterSection";
import ContactSection from "@/app/[locale]/component/ContactSection";
import FAQSection from "@/app/[locale]/component/FAQSection";
import PricingSection from "@/app/[locale]/component/PricingSection";
import AboutSection from "./component/AboutSection";
import ServiceSection from "./component/ServiceSection";
import HeroSection from "./component/HeroSection";
import StatsSection from "./component/StatsSection";
import CommitmentSection from "./component/CommitmentSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <CommitmentSection />
      <ServiceSection />
      <AboutSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
