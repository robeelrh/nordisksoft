"use client"

import { motion } from "framer-motion"
import EmailInput from "./EmailInput"
import { Link } from "@/i18n/navigation"
import "@fontsource/koulen"
import { slideFromBottom, slideFromLeft, slideFromRight, slideFromTop, slideFromTopLeft } from "@/utils/SliderAnimation"

export default function FooterSection() {
  const LINKS = [
    {
      text: "Projects",
      link: "/projects",
    },
    {
      text: "Services",
      link: "/services",
    },
    {
      text: "About",
      link: "/about",
    },
    {
      text: "FAQ",
      link: "/faq",
    },
    {
      text: "Contact",
      link: "/contact",
    },
    {
      text: "Privacy Policy",
      link: "/privacy",
    },
    {
      text: "Terms of Service",
      link: "/terms",
    },
    {
      text: "Twitter",
      link: "https://twitter.com",
    },
    {
      text: "Instagram",
      link: "https://instagram.com",
    },
    {
      text: "Facebook",
      link: "https://facebook.com",
    },
    {
      text: "Dribbble",
      link: "https://dribbble.com",
    },
  ]

  const firstColumnLinks = LINKS.slice(0, LINKS.length / 2 + 2)
  const secondColumnLinks = LINKS.slice(LINKS.length / 2 + 2)

  // Animation variants
  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const linkAnimation = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const handleEmailSubmit = async (email: string) => {
    try {
      // Handle newsletter signup
      console.log("Newsletter signup:", email)
      // You can add your newsletter API call here
      alert("Thank you for subscribing!")
    } catch (error) {
      console.error("Newsletter signup error:", error)
      throw error
    }
  }

  return (
    <section className="min-h-[60vh] py-8 sm:py-10 md:py-12 bg-[#F4F4F5] w-full">
      <div className="w-full h-full flex flex-col md:flex-row gap-6 md:gap-0 max-w-none px-8 lg:px-16 xl:px-24">
        {/* Logo section - slide from left */}
        <div className="w-full md:w-1/3 flex flex-col lg:gap-20">
          <motion.div
            className="flex items-center justify-start my-auto"
            variants={slideFromTopLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-[#56aeff]"></div>
                <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-[#56aeff] -ml-[30px]"></div>
              </div>
              <span className="text-2xl lg:text-3xl xl:text-4xl font-bold text-black ml-2">NORDISK</span>
              <span className="text-lg lg:text-xl xl:text-2xl font-normal text-black">SOFT</span>
            </div>
          </motion.div>
          <div className="space-y-1 sm:space-y-2 lg:space-y-1 xl:space-y-3 font-inter font-medium mt-4 md:mt-0">
            <motion.p
              className="text-sm lg:text-md xl:text-lg"
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              (+92) 300 9999999
            </motion.p>
            <motion.p
              className="text-md md:text-2xl lg:text-2xl xl:text-3xl"
              variants={slideFromBottom}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              hello@nordisksoft.com
            </motion.p>
          </div>
        </div>

        <div className="w-full md:w-2/3 flex flex-col justify-between font-inter font-medium gap-6 md:gap-0">
          <div className="flex flex-col md:flex-row gap-6 md:gap-2 my-auto">
            {/* Newsletter section - slide from top */}
            <motion.div
              className="w-full md:w-1/2 flex flex-col gap-2 sm:gap-3 lg:gap-2 xl:gap-4"
              variants={slideFromTop}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="text-2xl lg:text-2xl xl:text-3xl text-[#56aeff]">Stay connected</div>
              <div className="text-[#11111180] text-sm sm:text-base lg:text-md xl:text-lg w-full md:w-[85%]">
                Join our newsletter and stay updated on the latest trends in digital design
              </div>
              <EmailInput placeholder="E-mail" onSubmit={handleEmailSubmit} />
            </motion.div>

            {/* Links section - slide from right */}
            <motion.div
              className="w-full md:w-1/2 flex lg:gap-4 xl:gap-6"
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="flex-1 flex flex-col gap-1 sm:gap-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {firstColumnLinks.map((link, index) => (
                  <motion.div key={index} variants={linkAnimation} className="text-sm sm:text-base">
                    <Link href={link.link}>{link.text}</Link>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                className="flex-1 flex flex-col gap-1 sm:gap-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {secondColumnLinks.map((link, index) => (
                  <motion.div
                    key={index + firstColumnLinks.length}
                    variants={linkAnimation}
                    className="text-sm sm:text-base"
                  >
                    <Link href={link.link}>{link.text}</Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom description - slide from right */}
          <motion.p
            className="text-[#11111180] text-base w-full md:w-[80%] mx-auto lg:mx-0"
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            With Nordisk Soft, your company grows seamlessly through innovative software solutions. We empower your
            business to thrive in the digital age.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
