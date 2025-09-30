"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { LogoWhite } from "@/assests";
import { slideFromTop } from "@/utils/SliderAnimation";
import { useRouter } from "@/i18n/navigation";
import LanguageSelect from "./LanguageSelect";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = useTranslations("Navigation");
  const router = useRouter();

  const navItems = [
    { name: t("projects"), href: "#projects" },
    { name: t("services"), href: "#services" },
    { name: t("about"), href: "#about" },
    { name: t("faq"), href: "#faq" },
    { name: t("contact"), href: "#contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray backdrop-blur-sm">
      <div className="lg:max-w-full xl:max-w-4/5  mx-auto px-6 lg:px-8">
        <motion.div
          className="flex items-center justify-between h-16 md:h-20"
          initial="hidden"
          whileInView="visible"
          variants={slideFromTop}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src={LogoWhite} alt="logo-white" width={200} height={100} />
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-[#56aeff] transition-colors duration-200 text-lg scroll-smooth block w-fit "
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Language Selector + Hire Us */}
          <div className="flex gap-4 items-center">
            <div className="hidden lg:flex space-y-2">
              {/* <Select
                key={currentLocale}
                defaultValue={currentLocale}
                onValueChange={(val) => {
                  // 🛠 Strip the current locale from the path before pushing
                  const segments = pathname.split("/");
                  if (
                    routing.locales.includes(
                      segments[1] as (typeof routing.locales)[number]
                    )
                  ) {
                    segments.splice(1, 1);
                  }
                  const cleanPath = segments.join("/") || "/";

                  router.push(cleanPath, { locale: val });
                  router.refresh();
                }}
              >
                <SelectTrigger className="border border-[#56aeff] text-white lg:px-4 lg:py-5 xl:px-5 xl:py-6 rounded-lg items-center font-inter gap-2 text-xl font-semibold">
                  <SelectValue className="text-xl" />
                </SelectTrigger>
                <SelectContent align="end" className="w-[200px]">
                  {languages.map((lang) => (
                    <SelectItem key={lang.value} value={lang.value}>
                      <span className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select> */}

              <LanguageSelect />
            </div>

            <button
              className="hidden cursor-pointer lg:flex bg-[#56aeff] hover:bg-[#4a9ae8] text-white lg:px-6 lg:py-2  xl:px-7 xl:py-3 rounded-lg items-center  font-inter gap-2 transition-all duration-200 text-xl font-semibold"
              onClick={() => router.push("#contact")}
            >
              {t("hireUs")}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </motion.div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 bg-gray  backdrop-blur-lg border-t "
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block text-white hover:text-[#56aeff] transition-colors duration-200 text-lg font-medium py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}

                <motion.div className=" space-y-2">
                  <LanguageSelect />
                </motion.div>

                <motion.button
                  className="w-full bg-[#56aeff] cursor-pointer  hover:bg-[#4a9ae8] text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 font-medium mt-4  font-inter"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    router.push("#contact");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {t("hireUs")}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
