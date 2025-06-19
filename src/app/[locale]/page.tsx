import FooterSection from "@/app/[locale]/component/FooterSection";
import ContactSection from "@/app/[locale]/component/ContactSection";
import FAQSection from "@/app/[locale]/component/FAQSection";
import AboutSection from "@/app/[locale]/component/AboutSection";
import ServiceSection from "@/app/[locale]/component/ServiceSection";
import HeroSection from "@/app/[locale]/component/HeroSection";
import StatsSection from "@/app/[locale]/component/StatsSection";
import CommitmentSection from "@/app/[locale]/component/CommitmentSection";
import TransformationSection from "@/app/[locale]/component/TransformationSection";
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <TransformationSection />
      <CommitmentSection />
      <ServiceSection />
      <AboutSection />
      {/* <PricingSection />*/}
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
