"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ContactNowButtonProps {
  onClick?: () => void;
  className?: string;
  text?: string;
}

export default function ContactNowButton({
  onClick,
  className = "",
  text = "Contact Now",
}: ContactNowButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default behavior - scroll to contact form or open contact modal
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`
        bg-[#302f2f] hover:bg-gray-800  cursor-pointer
        text-white font-medium
        px-3 py-2
        flex items-center gap-3
        transition-all duration-200
        shadow-sm hover:shadow-md
        rounded-[40px]
        ${className}
      `}
      whileTap={{ scale: 0.98 }}
      animate="default"
      whileHover="hover"
      variants={{
        default: { scale: 1 },
        hover: { scale: 1.02 },
      }}
    >
      <motion.div
        className="bg-blue rounded-full p-3 flex items-center justify-center"
        variants={{
          default: { x: 0 },
          hover: { x: "calc(100% + 100px)" },
        }}
        transition={{
          type: "tween",
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <ArrowRight className="w-5 h-5 text-white" />
      </motion.div>
      <motion.span
        className="text-xl font-medium p-2"
        animate={{ x: 0 }}
        whileHover={{ x: -40 }}
        transition={{
          type: "tween",
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {text}
      </motion.span>
    </motion.button>
  );
}
