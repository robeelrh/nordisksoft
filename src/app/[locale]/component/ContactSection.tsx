"use client"
import { motion } from "framer-motion"
import ContactForm from "./ContactForm"
import ContactNowButton from "./ContactNowButton"
import { slideFromBottom, slideFromLeft, slideFromRight } from "@/utils/SliderAnimation"
import { Plus } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="relative min-h-[60vh] overflow-hidden w-full mx-auto py-12 pb-24">
      <div className="w-4/5 mx-auto">
        <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 rounded-3xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="flex flex-col gap-8 lg:w-1/2">
              <div className="flex flex-col gap-6 text-white font-inter">
                <p className="font-semibold text-lg lg:text-xl text-white/90">{"Let's Work Together"}</p>
                <motion.p
                  className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none text-[#56aeff]"
                  variants={slideFromLeft}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  Connect Us!
                </motion.p>

                <motion.div
                  variants={slideFromBottom}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <p className="text-sm sm:text-base text-white/80 max-w-md">
                    {
                      "Let's create something amazing together! Reach out I'd love to hear about your project and ideas."
                    }
                  </p>
                </motion.div>
              </div>

              <div className="flex flex-col gap-4">
                <Feature feature="24/7 Full Time Support" />
                <Feature feature="Available Worldwide" />
              </div>

              {/* Contact Now Button */}
              <motion.div
                variants={slideFromBottom}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <ContactNowButton />
              </motion.div>
            </div>

            {/* Right Content - Contact Form */}
            <motion.div
              className="lg:w-1/2 w-full"
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface FeatureProps {
  feature: string
}

function Feature({ feature }: FeatureProps) {
  return (
    <motion.div
      className="flex items-center space-x-3"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="bg-[#56aeff] rounded-full p-1 flex-shrink-0">
        <Plus className="text-white h-4 w-4" />
      </div>
      <p className="text-base font-medium text-white">{feature}</p>
    </motion.div>
  )
}
