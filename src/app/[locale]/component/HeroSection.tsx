"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Menu, X } from "lucide-react"

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <section className="relative min-h-[70vh] md:min-h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/main.jpg?height=800&width=1200"
          alt="Tech background with network connections"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex">
                <div className="w-0 h-0 border-l-[10px] md:border-l-[12px] border-l-transparent border-r-[10px] md:border-r-[12px] border-r-transparent border-b-[16px] md:border-b-[20px] border-b-[#56aeff]"></div>
                <div className="w-0 h-0 border-l-[10px] md:border-l-[12px] border-l-transparent border-r-[10px] md:border-r-[12px] border-r-transparent border-b-[16px] md:border-b-[20px] border-b-[#56aeff] -ml-[15px] md:-ml-[18px]"></div>
              </div>
              <span className="text-lg md:text-xl lg:text-2xl font-bold text-white ml-2">NORDISK</span>
              <span className="text-xs md:text-sm lg:text-base font-normal text-white">SOFT</span>
            </motion.div>

            {/* Desktop Navigation Items */}
            <motion.div
              className="hidden md:flex items-center space-x-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-[#56aeff] transition-colors duration-200 text-base font-medium"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>

            {/* Desktop Hire Us Button */}
            <motion.button
              className="hidden md:flex bg-[#56aeff] hover:bg-[#4a9ae8] text-white px-6 py-3 rounded-lg items-center gap-2 transition-all duration-200 font-medium"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Us
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-white p-2"
              onClick={toggleMobileMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md border-t border-white/10"
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
                  <motion.button
                    className="w-full bg-[#56aeff] hover:bg-[#4a9ae8] text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 font-medium mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Hire Us
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center text-center px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.h1
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-white">Building Innovative </span>
          <span className="text-[#56aeff]">Software Solutions</span>
          <span className="text-[#56aeff]">,</span>
          <br />
          <span className="text-white">Empowering Your Future</span>
        </motion.h1>
      </div>
    </section>
  )
}
