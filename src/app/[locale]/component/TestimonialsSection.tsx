"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

interface Testimonial {
  id: number
  name: string
  title: string
  rating: number
  score: string
  testimonial: string
  image: string
  type: "image" | "text"
  bgImage?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "David Johnson",
    title: "Creative Director",
    rating: 4,
    score: "4.5/5",
    testimonial: "",
    image: "/placeholder.svg?height=50&width=50",
    bgImage: "/cards_1.png",
    type: "image",
  },
  {
    id: 2,
    name: "Banny",
    title: "General Manager",
    rating: 5,
    score: "4.5/5",
    testimonial:
      "Working with Nordisk Soft has been a transformative experience for our business. Their innovative solutions and attentive support have significantly boosted our operational efficiency.",
    image: "/placeholder.svg?height=50&width=50",
    type: "text",
  },
  {
    id: 3,
    name: "Alexa Snow",
    title: "Director",
    rating: 5,
    score: "4.5/5",
    testimonial: "",
    image: "/placeholder.svg?height=50&width=50",
    bgImage: "/cards_2.jpg",
    type: "image",
  },
  {
    id: 4,
    name: "Michael Chen",
    title: "Tech Lead",
    rating: 5,
    score: "5.0/5",
    testimonial:
      "Outstanding service and exceptional results. The team at Nordisk Soft delivered beyond our expectations with their cutting-edge solutions and professional approach.",
    image: "/placeholder.svg?height=50&width=50",
    type: "text",
  },
  {
    id: 5,
    name: "Sarah Williams",
    title: "Product Manager",
    rating: 4,
    score: "4.8/5",
    testimonial: "",
    image: "/placeholder.svg?height=50&width=50",
    bgImage: "/assets/cards1.png",
    type: "image",
  },
  {
    id: 6,
    name: "James Rodriguez",
    title: "CEO",
    rating: 5,
    score: "5.0/5",
    testimonial:
      "Incredible partnership! Nordisk Soft transformed our digital presence completely. Their expertise in modern technologies and dedication to quality is unmatched.",
    image: "/placeholder.svg?height=50&width=50",
    type: "text",
  },
  {
    id: 7,
    name: "Emma Thompson",
    title: "Marketing Director",
    rating: 4,
    score: "4.7/5",
    testimonial: "",
    image: "/placeholder.svg?height=50&width=50",
bgImage: "/assests/cards_1.png",
    type: "image",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section className="relative min-h-[60vh] overflow-hidden w-full mx-auto py-12 pb-24">
      <div className="w-4/5 mx-auto">
        <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 rounded-3xl p-8 lg:p-12">
          {/* Header */}
          <div className="mb-8">
            <p className="text-white/70 text-lg mb-4">/Testimonials</p>
            <motion.h2
              className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-[#56aeff] leading-tight"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Success stories from our clients
            </motion.h2>
          </div>

          {/* Horizontal Scrolling Testimonials */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: `-${currentIndex * 320}px`, // Adjust based on card width + gap
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className={`
                    flex-shrink-0 w-150 h-60
                    ${testimonial.type === "text" ? "bg-slate-700/50 p-6" : "bg-slate-600/30 overflow-hidden"} 
                    rounded-2xl backdrop-blur-sm border border-white/10
                  `}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {testimonial.type === "image" ? (
                    <ImageTestimonialCard testimonial={testimonial} />
                  ) : (
                    <TextTestimonialCard testimonial={testimonial} />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
         
        </div>
      </div>
    </section>
  )
}

function ImageTestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="relative h-full group">
      <Image
        src={testimonial.bgImage || "/placeholder.svg?height=400&width=320"}
        alt={testimonial.name}
        fill
        className="object-cover rounded-2xl"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />

      {/* Rating and Score */}
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-400 text-gray-400"
              }`}
            />
          ))}
        </div>
        <span className="text-white/80 text-sm font-medium">{testimonial.score}</span>
      </div>

      {/* Name and Title */}
      <div className="absolute bottom-4 left-4">
        <h3 className="text-white font-semibold text-lg">{testimonial.name}</h3>
        <p className="text-white/70 text-sm">{testimonial.title}</p>
      </div>
    </div>
  )
}

function TextTestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex flex-col h-full">
      {/* Rating and Score */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < testimonial.rating ? "fill-[#56aeff] text-[#56aeff]" : "fill-gray-400 text-gray-400"
              }`}
            />
          ))}
        </div>
        <span className="text-white/80 text-sm font-medium">{testimonial.score}</span>
      </div>

      {/* Testimonial Text */}
      <p className="text-white/90 text-base leading-relaxed mb-6 flex-grow">{testimonial.testimonial}</p>

      {/* Author Info */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-600">
          <Image
            src={testimonial.image || "/placeholder.svg?height=40&width=40"}
            alt={testimonial.name}
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
          <p className="text-white/60 text-xs">{testimonial.title}</p>
        </div>
      </div>
    </div>
  )
}
