"use client";

import type React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    trigger,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = async (
    e: React.KeyboardEvent,
    field: keyof ContactFormData
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const valid = await trigger(field);
      if (!valid) return;

      if (field === "name") {
        emailRef.current?.focus();
      } else if (field === "email") {
        messageRef.current?.focus();
      }
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log("Form submitted:", data);
      reset();
      nameRef.current?.focus();
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <div className="w-full ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col  space-y-4 w-full"
      >
        <div className="group relative">
          <input
            type="text"
            placeholder="Name*"
            className="peer bg-slate-700/50 border border-[#56aeff]/30 group-hover:border-[#56aeff] focus:border-[#56aeff] 
               group-hover:text-white text-white group-hover:placeholder-white/80 placeholder-white/50
               group-hover:shadow-[0_0_8px_#56aeff] focus:shadow-[0_0_8px_#56aeff]
               rounded-lg w-full p-4 text-base focus:outline-none transition-all duration-200"
            {...register("name")}
            ref={(e) => {
              register("name").ref(e);
              nameRef.current = e;
            }}
            onKeyDown={(e) => handleKeyDown(e, "name")}
          />
          {errors.name && (
            <p className="text-red-400 text-xs sm:text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="group relative">
          <input
            type="email"
            placeholder="Email*"
            className="peer bg-slate-700/50 border border-[#56aeff]/30 group-hover:border-[#56aeff] focus:border-[#56aeff] 
               group-hover:text-white text-white group-hover:placeholder-white/80 placeholder-white/50
               group-hover:shadow-[0_0_8px_#56aeff] focus:shadow-[0_0_8px_#56aeff]
               rounded-lg w-full p-4 text-base focus:outline-none transition-all duration-200"
            {...register("email")}
            ref={(e) => {
              register("email").ref(e);
              emailRef.current = e;
            }}
            onKeyDown={(e) => handleKeyDown(e, "email")}
          />
          {errors.email && (
            <p className="text-red-400 text-xs sm:text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="group relative">
          <textarea
            rows={4}
            placeholder="Message* (Tell us about your project)"
            className="peer bg-slate-700/50 border border-[#56aeff]/30 group-hover:border-[#56aeff] focus:border-[#56aeff] 
               group-hover:text-white text-white group-hover:placeholder-white/80 placeholder-white/50
               group-hover:shadow-[0_0_8px_#56aeff] focus:shadow-[0_0_8px_#56aeff]
               rounded-lg w-full p-4 text-base focus:outline-none resize-none transition-all duration-200"
            {...register("message")}
            ref={(e) => {
              register("message").ref(e);
              messageRef.current = e;
            }}
            onKeyDown={(e) => handleKeyDown(e, "message")}
          />
          {errors.message && (
            <p className="text-red-400 text-xs sm:text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="group bg-[#56aeff] hover:bg-[#4a9ae8] disabled:bg-[#56aeff]/50 text-white py-4 px-6 rounded-lg transition-all duration-200 font-medium text-base disabled:cursor-not-allowed disabled:opacity-50 w-full relative overflow-hidden"
        >
          <span className="flex items-center justify-center gap-2 relative z-10">
            {isSubmitting ? "Sending..." : "Submit"}
            {!isSubmitting && (
              <svg
                className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            )}
          </span>

          {/* Shine effect */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
        </button>
      </form>
    </div>
  );
}
