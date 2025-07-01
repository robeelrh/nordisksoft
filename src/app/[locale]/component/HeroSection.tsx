"use client";
import { motion } from "framer-motion";
import Navigation from "./Navbar";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const backgroundContent = "/videos/hero-section-video.mp4";
  const t = useTranslations("HeroSection");

  const slideFromBottom = {
    hidden: { opacity: 0, y: 400 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="relative min-h-[70vh] md:min-h-screen flex flex-col overflow-hidden">
      <Navigation />
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src={backgroundContent}
          autoPlay
          muted
          loop
          preload="auto"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <motion.div
        className="z-10 flex-1/3 flex flex-col items-center justify-center text-center px-6 lg:px-8 max-w-5xl mx-auto pt-24 md:pt-24 xl:pt-20"
        initial="hidden"
        whileInView="visible"
        variants={slideFromBottom}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-2xl md:text-3xl lg:text-5xl  font-bold leading-tight font-inter text-white">
          {t.rich("headline", {
            highlight: (chunks) => <span className="text-blue">{chunks}</span>,
          })}
        </p>
        <p className="text-2xl md:text-3xl xl:text-5xl font-bold leading-tight font-inter text-white">
          {t.rich("subheadline", {
            highlight: (chunks) => <span className="text-blue">{chunks}</span>,
          })}
        </p>
      </motion.div>
      <div className="z-10 flex-1"></div>
    </section>
  );
}
