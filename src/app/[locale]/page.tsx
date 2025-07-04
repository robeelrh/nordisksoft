import FooterSection from "@/app/[locale]/component/FooterSection";
import ContactSection from "@/app/[locale]/component/ContactSection";
import FAQSection from "@/app/[locale]/component/FAQSection";
import AboutSection from "@/app/[locale]/component/AboutSection";
import ServiceSection from "@/app/[locale]/component/ServiceSection";
import HeroSection from "@/app/[locale]/component/HeroSection";
import StatsSection from "@/app/[locale]/component/StatsSection";
import CommitmentSection from "@/app/[locale]/component/CommitmentSection";
import TestimonialsSection from "@/app/[locale]/component/TestimonialsSection";
import ProjectSection from "./component/ProjectSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      {/* <TransformationSection /> */}
      <ProjectSection />
      <CommitmentSection />
      <ServiceSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
