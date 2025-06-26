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
        bg-[#302f2f] hover:bg-gray-700 cursor-pointer
        text-white font-medium
        px-3 py-2
        flex items-center gap-3
        transition-all duration-200
        shadow-sm hover:shadow-md
        rounded-[40px]
        overflow-hidden
        relative
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
        className="absolute left-0 h-full bg-blue rounded-full"
        variants={{
          default: { width: 0, opacity: 0 },
          hover: {
            width: ["0%", "100%", "0%"],
            opacity: [0, 0.3, 0],
            left: ["0%", "0%", "100%"],
            transition: {
              width: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
              opacity: { duration: 0.4 },
              left: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
            },
          },
        }}
      />

      <motion.div
        className="bg-blue rounded-full p-3 flex items-center justify-center z-10"
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
        className="text-xl font-medium p-2 z-10"
        variants={{
          default: { opacity: 1, x: 0 },
          hover: {
            opacity: [1, 0.5, 0],
            x: -40,
            transition: {
              opacity: {
                duration: 0.3,
                times: [0, 0.5, 1],
                ease: "easeOut",
              },
              x: {
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              },
            },
          },
        }}
      >
        {text}
      </motion.span>
    </motion.button>
  );
}
