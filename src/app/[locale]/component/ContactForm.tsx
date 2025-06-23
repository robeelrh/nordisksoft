"use client"

import type React from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRef, useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  service: z.string().min(1, "Please select a service"),
  customService: z.string().optional(),
  message: z.string(),
})

type ContactFormData = z.infer<typeof contactSchema>

const serviceOptions = [
  { value: "branding", label: "Branding" },
  { value: "development", label: "Development" },
  { value: "websites", label: "Websites" },
  { value: "design-support", label: "Design Support" },
  { value: "customize", label: "Customize" },
]

export default function ContactForm() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedService, setSelectedService] = useState("")
  const [showCustomInput, setShowCustomInput] = useState(false)

  const {
    register,
    trigger,
    reset,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const serviceRef = useRef<HTMLDivElement>(null)
  const customServiceRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  // Add ref for the dropdown container to detect clicks outside
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    // Add event listener when dropdown is open
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isDropdownOpen])

  // Close dropdown when pressing Escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isDropdownOpen) {
        setIsDropdownOpen(false)
        serviceRef.current?.focus() // Return focus to the service selector
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("keydown", handleEscapeKey)
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [isDropdownOpen])

  const handleKeyDown = async (e: React.KeyboardEvent, field: keyof ContactFormData) => {
    if (e.key === "Enter") {
      e.preventDefault()
      const valid = await trigger(field)
      if (!valid) return

      if (field === "name") {
        emailRef.current?.focus()
      } else if (field === "email") {
        serviceRef.current?.focus()
      } else if (field === "service" || field === "customService") {
        messageRef.current?.focus()
      }
    }
  }

  const handleServiceSelect = (value: string, label: string) => {
    setSelectedService(label)
    setValue("service", value)
    setIsDropdownOpen(false)

    if (value === "customize") {
      setShowCustomInput(true)
      setTimeout(() => customServiceRef.current?.focus(), 100)
    } else {
      setShowCustomInput(false)
      setValue("customService", "")
    }
  }

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Handle form submission here
      console.log("Form submitted:", data)

      // You can add your API call here
      // await submitContactForm(data)

      // Reset form after successful submission
      reset()
      setSelectedService("")
      setShowCustomInput(false)
      setIsDropdownOpen(false) // Close dropdown on form reset
      nameRef.current?.focus()

      // Show success message (you can implement this)
      alert("Message sent successfully!")
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Error sending message. Please try again.")
    }
  }

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-6 sm:space-y-8 w-full z-10 text-white/40"
      >
        <div>
          <input
            type="text"
            placeholder="Name*"
            className="bg-transparent border-b border-white/40 w-full py-2 sm:py-3 text-base sm:text-base focus:outline-none focus:border-white/60 placeholder-white/40 transition-colors duration-200"
            {...register("name")}
            ref={(e) => {
              register("name").ref(e)
              nameRef.current = e
            }}
            onKeyDown={(e) => handleKeyDown(e, "name")}
          />
          {errors.name && <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <input
            type="email"
            placeholder="E-mail*"
            className="bg-transparent border-b border-white/40 w-full py-2 sm:py-3 text-base sm:text-base focus:outline-none focus:border-white/60 placeholder-white/40 transition-colors duration-200"
            {...register("email")}
            ref={(e) => {
              register("email").ref(e)
              emailRef.current = e
            }}
            onKeyDown={(e) => handleKeyDown(e, "email")}
          />
          {errors.email && <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Service dropdown with click outside detection */}
        <div className="relative" ref={dropdownRef}>
          <div
            ref={serviceRef}
            className="bg-transparent border-b border-white/40 w-full py-2 sm:py-3 text-base sm:text-base focus:outline-none focus:border-white/60 cursor-pointer transition-colors duration-200 flex justify-between items-center"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                setIsDropdownOpen(!isDropdownOpen)
              }
            }}
          >
            <span className={selectedService ? "text-white/80" : "text-white/40"}>
              {selectedService || "Select Service*"}
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
            />
          </div>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 bg-black/90 border border-white/20 rounded-md mt-1 z-50">
              {serviceOptions.map((option) => (
                <div
                  key={option.value}
                  className="px-4 py-3 hover:bg-white/10 cursor-pointer transition-colors duration-200 text-white/80"
                  onClick={() => handleServiceSelect(option.value, option.label)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}

          <input type="hidden" {...register("service")} />
          {errors.service && <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.service.message}</p>}
        </div>

        {showCustomInput && (
          <div>
            <input
              type="text"
              placeholder="Please specify your custom service*"
              className="bg-transparent border-b border-white/40 w-full py-2 sm:py-3 text-base sm:text-base focus:outline-none focus:border-white/60 placeholder-white/40 transition-colors duration-200"
              {...register("customService")}
              ref={(e) => {
                register("customService").ref(e)
                customServiceRef.current = e
              }}
              onKeyDown={(e) => handleKeyDown(e, "customService")}
            />
            {errors.customService && (
              <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.customService.message}</p>
            )}
          </div>
        )}

        <div>
          <textarea
            rows={3}
            placeholder="Message (Tell us about your project)"
            className="bg-transparent border-b border-white/40 w-full py-2 sm:py-3 text-base sm:text-base focus:outline-none focus:border-white/60 placeholder-white/40 resize-none transition-colors duration-200"
            {...register("message")}
            ref={(e) => {
              register("message").ref(e)
              messageRef.current = e
            }}
            onKeyDown={(e) => handleKeyDown(e, "message")}
          />
          {errors.message && <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.message.message}</p>}
        </div>
      </form>

      {/* Button outside the form but still submits the form */}
      <div className="mt-6 sm:mt-8">
        <button
          type="submit"
          form="contact-form"
          disabled={isSubmitting}
          onClick={handleSubmit(onSubmit)}
          className="bg-white/10 hover:bg-white/20 disabled:bg-white/5 border border-white/20 text-white/80 py-3 sm:py-4 px-6 sm:px-8 rounded-md transition-all duration-200 font-medium text-base sm:text-lg disabled:cursor-not-allowed disabled:opacity-50 text-center"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </div>
  )
}
