"use client";

import {
  TextCard1,
  TextCard2,
  TextCard3,
  VideoCard1,
  VideoCard2,
} from "@/assests";
import { useWindowWidth } from "@/hook/useWindowWidth";
import { slideFromLeft } from "@/utils/SliderAnimation";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { forwardRef, useEffect, useRef, useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  rating: number;
  score: string;
  testimonial: string;
  image: StaticImageData | string;
  type: "image" | "text" | "video";
  // bgImage?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "David Johnson",
    title: "Creative Director",
    rating: 4,
    score: "4.5/5",
    testimonial: "",
    image: VideoCard1,
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
    image: TextCard1,
    type: "text",
  },
  {
    id: 3,
    name: "Alex",
    title: "CEO",
    rating: 5,
    score: "4.5/5",
    testimonial: "",
    image: "/videos/alex-video-3.mp4",
    type: "video",
  },
  {
    id: 4,
    name: "Michael Chen",
    title: "Tech Lead",
    rating: 5,
    score: "5.0/5",
    testimonial:
      "Outstanding service and exceptional results. The team at Nordisk Soft delivered beyond our expectations with their cutting-edge solutions and professional approach.",
    image: TextCard2,
    type: "text",
  },
  {
    id: 5,
    name: "Alexa Snow",
    title: "Director",
    rating: 5,
    score: "4.5/5",
    testimonial: "",
    image: VideoCard2,
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
    image: TextCard3,
    type: "text",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const width = useWindowWidth();

  let cardWidth = 560;
  if (width < 640) cardWidth = 560;
  else if (width < 768) cardWidth = 560;
  else if (width < 1024) cardWidth = 580;
  else if (width < 1440) cardWidth = 520;
  else if (width < 2000) cardWidth = 450;
  else if (width < 2400) cardWidth = 400;
  else cardWidth = 360;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  useEffect(() => {
    if (isHovered || playingVideoId !== null) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 1000); // Increased interval for better UX

    return () => clearInterval(interval);
  }, [isHovered, playingVideoId]);

  const handleVideoPlay = (id: number) => {
    // Pause all other videos
    Object.entries(videoRefs.current).forEach(([key, video]) => {
      if (video && parseInt(key) !== id) {
        video.pause();
      }
    });
    setPlayingVideoId(id);
  };

  const handleVideoPause = (id: number) => {
    if (playingVideoId === id) {
      setPlayingVideoId(null);
    }
  };

  return (
    <section
      id="projects"
      className="py-16 mx-auto w-11/12 xl:w-4/5 h-[620px] bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 m-4 rounded-3xl"
    >
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className="w-10/12 mx-auto flex flex-col gap-12">
          <p className="text-white font-semibold text-lg lg:text-3xl">
            /Testimonials
          </p>
          <motion.h2
            className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-[#56aeff] leading-tight"
            initial="hidden"
            whileInView="visible"
            variants={slideFromLeft}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Success stories from our clients
          </motion.h2>
        </div>

        {/* Slider */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex gap-6"
            animate={{ x: `-${currentIndex * (cardWidth + 24)}px` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`flex-shrink-0 w-140 h-70 ${
                  testimonial.type === "text"
                    ? "bg-slate-700/50 p-6"
                    : "bg-slate-600/30 overflow-hidden"
                } rounded-2xl backdrop-blur-sm border border-white/10`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {testimonial.type === "image" ? (
                  <ImageTestimonialCard testimonial={testimonial} />
                ) : testimonial.type === "video" ? (
                  <VideoTestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                    ref={(el) => {
                      videoRefs.current[testimonial.id] = el;
                    }}
                    onPlay={() => handleVideoPlay(testimonial.id)}
                    onPause={() => handleVideoPause(testimonial.id)}
                  />
                ) : (
                  <TextTestimonialCard testimonial={testimonial} />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ImageTestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="relative h-full group">
      <Image
        src={testimonial.image}
        style={{
          filter: "brightness(0.5)",
        }}
        alt={testimonial.name}
        fill
        className="object-center rounded-2xl"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />

      {/* Rating and Score */}
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < testimonial.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-400 text-gray-400"
              }`}
            />
          ))}
        </div>
        <span className="text-white/80 text-sm font-medium">
          {testimonial.score}
        </span>
      </div>

      {/* Name and Title */}
      <div className="absolute bottom-4 left-4">
        <h3 className="text-white font-semibold text-lg">{testimonial.name}</h3>
        <p className="text-white/70 text-sm">{testimonial.title}</p>
      </div>
    </div>
  );
}

interface VideoTestimonialCardProps {
  testimonial: Testimonial;
  onPlay: () => void;
  onPause: () => void;
}

const VideoTestimonialCard = forwardRef<
  HTMLVideoElement,
  VideoTestimonialCardProps
>(({ testimonial, onPlay, onPause }, ref) => {
  return (
    <div className="relative h-full group rounded-2xl overflow-hidden">
      <video
        ref={ref}
        className="object-cover w-full h-full rounded-2xl z-10 relative"
        src={testimonial.image as string}
        controls
        onPlay={onPlay}
        onPause={onPause}
        onEnded={onPause}
      />

      {/* Rating and Score - top right */}
      <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < testimonial.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-400 text-gray-400"
              }`}
            />
          ))}
        </div>
        <span className="text-white/80 text-sm font-medium">
          {testimonial.score}
        </span>
      </div>
    </div>
  );
});
VideoTestimonialCard.displayName = "VideoTestimonialCard";

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
                i < testimonial.rating
                  ? "fill-[#56aeff] text-[#56aeff]"
                  : "fill-gray-400 text-gray-400"
              }`}
            />
          ))}
        </div>
        <span className="text-white/80 text-sm font-medium">
          {testimonial.score}
        </span>
      </div>

      {/* Testimonial Text */}
      <p className="text-white/90 text-base leading-relaxed mb-6 flex-grow">
        {testimonial.testimonial}
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-md overflow-hidden bg-slate-600">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm">
            {testimonial.name}
          </h4>
          <p className="text-white/60 text-xs">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
}
