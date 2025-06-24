"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface ContactNowButtonProps {
  onClick?: () => void
  className?: string
  text?: string
}

export default function ContactNowButton({ onClick, className = "", text = "Contact Now" }: ContactNowButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      // Default behavior - scroll to contact form or open contact modal
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <motion.button
      onClick={handleClick}
      className={`
        bg-black hover:bg-gray-200 
        text-white font-medium
        px-3 py-2
        flex items-center gap-3
        transition-all duration-200
        shadow-sm hover:shadow-md
        rounded-[40px]
        ${className}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-[#56aeff] rounded-full p-2 flex items-center justify-center">
        <ArrowRight className="w-5 h-5 text-white" />
      </div>
<span className="text-lg font-normal pr-2">{text}</span>
    </motion.button>
  )
}
