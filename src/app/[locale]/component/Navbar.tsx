"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { useSearchParams, usePathname } from "next/navigation"

export default function Navbar() {
  const t = useTranslations("Navigation")
  const navbarFields = [t("reem"), t("about"), t("services"), t("contact"), t("menu")]
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)

  const searchParams = useSearchParams()
  // Removed unused router import
  const pathname = usePathname()

  const serviceOptions = [
    { label: "Branding", searchValue: "branding" },
    { label: "Development", searchValue: "development" },
    { label: "Websites", searchValue: "websites" },
    { label: "Design Support", searchValue: "design-support" },
  ]

  // Get current search value or set default
  const currentSearch = searchParams.get("search") || "all"

  // Simplified and more reliable service search handler
  const handleServiceSearch = (searchValue: string) => {
    console.log("Searching for:", searchValue) // Debug log

    // Close dropdowns immediately
    setIsServicesOpen(false)
    setIsMenuOpen(false)

    // Update URL with search parameter
    const params = new URLSearchParams(searchParams.toString())
    params.set("search", searchValue)
    const newUrl = `${pathname}?${params.toString()}`

    // Update URL
    window.history.pushState(null, "", newUrl)

    // Scroll to services section
    setTimeout(() => {
      const servicesElement = document.getElementById("services")
      if (servicesElement) {
        const navbarHeight = window.innerWidth < 640 ? 80 : window.innerWidth < 768 ? 120 : 90
        const elementPosition = servicesElement.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - navbarHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }, 200)

    // Dispatch event for services section
    window.dispatchEvent(
      new CustomEvent("searchChanged", {
        detail: { search: searchValue },
      }),
    )
  }

  // Close services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false)
        setIsServicesOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <nav className="h-[80px] sm:h-[120px] md:h-[90px] lg:h-[90px] xl:h-[70px] w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12 fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-sm border-b border-white/10 z-50">
        {/* Logo */}
        <Link className="hover:opacity-80 transition-opacity duration-200 z-10" href={"/"}>
          <Image
            src="/Logo.png"
            alt="Company Logo"
            width={220}
            height={200}
            className="w-auto h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] xl:h-[200px]"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
          {/* About Link */}
          <Link
            className="font-koulen text-base xl:text-lg text-white uppercase hover:text-white/80 transition-colors duration-200 relative group"
            href={`#${navbarFields[1].toLowerCase()}`}
          >
            {navbarFields[1]}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
          </Link>

          {/* Services Dropdown - Desktop */}
          <div className="relative" ref={servicesRef}>
            <button
              className="font-koulen text-base xl:text-lg text-white uppercase hover:text-white/80 transition-colors duration-200 flex items-center gap-1 relative group"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              {navbarFields[2]}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
              />
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
            </button>

            {/* Desktop Services Dropdown Menu */}
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-white/20 py-2 z-50">
                {/* Show All Services Option */}
                <button
                  onClick={() => handleServiceSearch("all")}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 border-b border-gray-100 ${
                    currentSearch === "all"
                      ? "bg-black/10 text-black font-semibold"
                      : "text-gray-800 hover:bg-black/5 hover:text-black"
                  }`}
                >
                  All Services
                </button>

                {serviceOptions.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => handleServiceSearch(service.searchValue)}
                    className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                      index === serviceOptions.length - 1 ? "" : "border-b border-gray-100"
                    } ${
                      currentSearch === service.searchValue
                        ? "bg-black/10 text-black font-semibold"
                        : "text-gray-800 hover:bg-black/5 hover:text-black"
                    }`}
                  >
                    {service.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Contact Link */}
          <Link
            className="font-koulen text-base xl:text-lg text-white uppercase hover:text-white/80 transition-colors duration-200 relative group"
            href={`#${navbarFields[3].toLowerCase()}`}
          >
            {navbarFields[3]}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white hover:text-white/80 transition-colors duration-200 z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-[90px] sm:top-[130px] md:top-[100px] left-4 right-4 max-w-sm mx-auto bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/20 py-4 z-50">
          <div className="flex flex-col">
            {/* About Link */}
            <Link
              href={`#${navbarFields[1].toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="font-koulen text-base text-gray-800 uppercase px-6 py-3 hover:bg-black/5 transition-colors duration-200 border-b border-gray-100"
            >
              {navbarFields[1]}
            </Link>

            {/* Services Link */}
            <button
              onClick={() => handleServiceSearch("all")}
              className="font-koulen text-base text-gray-800 uppercase px-6 py-3 hover:bg-black/5 transition-colors duration-200 border-b border-gray-100 w-full text-left"
            >
              {navbarFields[2]}
            </button>

            {/* Contact Link */}
            <Link
              href={`#${navbarFields[3].toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="font-koulen text-base text-gray-800 uppercase px-6 py-3 hover:bg-black/5 transition-colors duration-200"
            >
              {navbarFields[3]}
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
