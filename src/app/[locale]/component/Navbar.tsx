"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const t = useTranslations("Navigation")
  const navbarFields = [t("reem"), t("about"), t("services"), t("contact"), t("menu")]
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <div className="h-[10vh] w-full flex items-center px-4 sm:px-5 lg:px-5 xl:px-10 relative">
        {/* Logo - always visible on the left */}
        <Link
          key={0}
          className="font-koulen text-3xl sm:text-4xl text-white absolute left-4 sm:left-5 lg:left-5 xl:left-10"
          href={"/"}
        >
          {navbarFields[0]}
        </Link>

        {/* Navigation links - centered with exact spacing */}
        <div className="hidden md:flex md:justify-center md:items-center md:w-full">
          <div className="flex justify-between items-center w-[40%]">
            {navbarFields.slice(1, -1).map((field, index) => (
              <Link
                key={index + 1}
                className="font-koulen text-base sm:text-lg md:text-xl text-white uppercase"
                href={`#${field.toLowerCase()}`}
              >
                {field}
              </Link>
            ))}
          </div>
        </div>

        {/* Menu button - always visible on the right */}
        <div
          className="flex gap-2 items-center cursor-pointer absolute right-4 sm:right-5 lg:right-5 xl:right-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="flex flex-col gap-1">
            <div
              className={`w-6 h-[2px] bg-white transition-transform ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <div className={`w-6 h-[2px] bg-white transition-transform ${isMenuOpen ? "-rotate-45" : ""}`} />
          </div>
          <p className="font-koulen text-3xl sm:text-4xl text-white">{navbarFields[navbarFields.length - 1]}</p>
        </div>
      </div>

      {/* Mobile dropdown menu */}
{isMenuOpen && (
  <div className="md:hidden absolute top-[10vh] right-4 w-[60%] bg-white py-4 z-50 rounded-md shadow-md">
    <div className="flex flex-col items-start gap-2 px-4">
      {navbarFields.slice(1, -1).map((field, index) => (
        <Link
          key={index}
          href={`#${field.toLowerCase()}`}
          onClick={() => setIsMenuOpen(false)}
          className="font-koulen text-sm text-black uppercase border-b border-black w-full pb-1"
        >
          {field}
        </Link>
      ))}
    </div>
  </div>
)}


    </>
  )
}
