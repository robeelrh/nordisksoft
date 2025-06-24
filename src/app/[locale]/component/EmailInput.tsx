"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface EmailInputProps {
  placeholder?: string
  onSubmit?: (email: string) => void
  className?: string
}

export default function EmailInput({ placeholder = "Enter your email", onSubmit, className = "" }: EmailInputProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsSubmitting(true)

    try {
      if (onSubmit) {
        await onSubmit(email)
      } else {
        // Default behavior - simulate newsletter signup
        console.log("Newsletter signup:", email)
        alert("Thank you for subscribing to our newsletter!")
      }
      setEmail("")
    } catch (error) {
      console.error("Error submitting email:", error)
      alert("Error subscribing. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={`flex items-center gap-2 bg-white rounded-lg p-1 shadow-sm border border-gray-200 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        className="flex-1 px-3 py-2 text-sm bg-transparent border-none outline-none placeholder-gray-500 text-gray-900"
        required
        disabled={isSubmitting}
      />
      <motion.button
        type="submit"
        disabled={isSubmitting || !email.trim()}
        className="bg-[#56aeff] hover:bg-[#4a9ae8] disabled:bg-gray-300 text-white p-2 rounded-md transition-colors duration-200 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isSubmitting ? (
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <ArrowRight className="w-4 h-4" />
        )}
      </motion.button>
    </motion.form>
  )
}
