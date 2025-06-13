"use client"

import type React from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRef } from "react"

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string(),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const {
    register,
    trigger,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const handleKeyDown = async (e: React.KeyboardEvent, field: keyof ContactFormData) => {
    if (e.key === "Enter") {
      e.preventDefault()
      const valid = await trigger(field)
      if (!valid) return

      if (field === "name") {
        emailRef.current?.focus()
      } else if (field === "email") {
        messageRef.current?.focus()
      } else if (field === "message") {
        reset()
        nameRef.current?.focus()
      }
    }
  }

  return (
    <form className="flex flex-col space-y-6 sm:space-y-8 w-full z-10 text-white/40">
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
  )
}
