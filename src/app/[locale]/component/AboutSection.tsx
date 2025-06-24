"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function TeamShowcaseSection() {
  const floatAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  return (
    <section className="relative min-h-[80vh] overflow-hidden w-full mx-auto py-16">
      <div className="w-4/5 mx-auto">
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left Content - Takes 3 columns */}
          <motion.div
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="text-2xl lg:text-3xl xl:text-3xl font-normal leading-tight">
              <span className="text-gray-800">
  &ldquo;Nordisk soft helps companies create stunning and strategically sound experiences that{" "}
</span>

              <span className="text-[#56aeff]">engage audiences</span>
              <span className="text-gray-800">.</span>
              <br />
              <span className="text-gray-800">Our </span>
              <span className="text-[#56aeff]">experts</span>
              <span className="text-gray-800"> work closely with you to ensure that every</span>
            </div>

            <motion.p
              className="text-lg text-[#666666] leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              From concept to launch, we craft digital solutions that not only look exceptional but also drive results,
              building connections that last.
            </motion.p>
          </motion.div>

          {/* Right Content - Takes 2 columns */}
          <div className="lg:col-span-2 relative h-[500px]">
            {/* Top Orange Card with Profile */}
            <motion.div
              className="absolute top-0 left-0"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              animate={floatAnimation}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Orange oval background */}
                <div className="bg-[#F2A742] rounded-full w-80 h-40 flex items-center justify-center px-8">
                  <p className="text-black font-medium text-base leading-relaxed text-center">
                    A strong team of over 500 individuals supports our clients.
                  </p>
                </div>

                {/* Speech bubble with smile emoji */}
                <div className="absolute -top-2 left-20">
                  <div className="bg-black rounded-full w-16 h-12 flex items-center justify-center relative">
                    <span className="text-2xl">😊</span>
                    {/* Speech bubble tail */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-black"></div>
                  </div>
                </div>

                {/* Profile Image */}
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-24 h-24 rounded-full overflow-hidden border-4 border-white">
                  <Image
                    src="/guy.png"
                    alt="Team member"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Middle Blue Section with Group Photo */}
            <motion.div
              className="absolute top-60 left-0"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              animate={{
                y: [0, -6, 0],
                transition: {
                  duration: 3.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
              viewport={{ once: true }}
            >
              <div className="relative flex items-center">
                {/* Blue oval with pencil */}
                <div className="bg-[#56aeff] rounded-full w-48 h-32 flex items-center justify-center relative z-10">
                  <span className="text-4xl">✏️</span>
                </div>

                {/* Group Photo */}
                <div className="relative -ml-12 rounded-3xl overflow-hidden">
                  <Image
                    src="/group_photo.png"
                    alt="Team working together"
                    width={280}
                    height={180}
                    className="object-cover w-70 h-45"
                  />

                  {/* Victory Hand Emoji Badge */}
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <span className="text-2xl">✌️</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Yellow Card with Lady Photo */}
            <motion.div
              className="absolute bottom-0 left-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 4.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
              viewport={{ once: true }}
            >
              <div className="relative flex items-center">
                {/* Lady Photo - Circular */}
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white relative z-10 shadow-lg">
                  <Image
                    src="/lady.png"
                    alt="Team member working"
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Yellow oval background */}
                <div className="bg-[#E0FE22] rounded-full w-80 h-36 flex items-center justify-center px-8 -ml-20 relative">
                  <p className="text-black font-medium text-base leading-relaxed text-center ml-20">
                    A strong team of over 500 individuals supports our clients.
                  </p>

                  {/* Victory Hand Emoji Badge */}
                  <div className="absolute -top-4 left-16 w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl">✌️</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
