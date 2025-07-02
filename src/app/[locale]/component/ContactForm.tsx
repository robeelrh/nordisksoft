"use client";

import type React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import toast from "react-hot-toast";

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
  const t = useTranslations("Contact.form");
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        reset();
        nameRef.current?.focus();
        toast.success("Email send successfully");
      } else {
        throw new Error(result.error || "Unknown error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error sending message. Please try again.");
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
            placeholder={t("name")}
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
            placeholder={t("email")}
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

        <div className="relative group">
          <textarea
            rows={4}
            className="peer bg-slate-700/50 border border-[#56aeff]/30 group-hover:border-[#56aeff] focus:border-[#56aeff]
      group-hover:text-white text-white placeholder-transparent
      group-hover:shadow-[0_0_8px_#56aeff] focus:shadow-[0_0_8px_#56aeff]
      rounded-lg w-full p-4 text-base focus:outline-none resize-none transition-all duration-200"
            placeholder="Message* (Tell us about your project)"
            {...register("message")}
            ref={(e) => {
              register("message").ref(e);
              messageRef.current = e;
            }}
            onKeyDown={(e) => handleKeyDown(e, "message")}
          />
          <label
            htmlFor="message"
            className="absolute left-4 top-3 text-white/60 text-base pointer-events-none 
    peer-placeholder-shown:opacity-100 peer-placeholder-shown:visible 
    peer-focus:opacity-0 peer-focus:invisible 
    transition-all duration-200"
          >
            Message*
            <span className="text-xs text-white/60">
              (Tell us about your project)
            </span>
          </label>
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
            {isSubmitting ? "Sending..." : t("submit")}
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
