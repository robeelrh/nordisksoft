"use client";

import {
  TextCard1,
  TextCard2,
  TextCard3,
  VideoCard1,
  VideoCard2,
} from "@/assests";
import Image, { StaticImageData } from "next/image";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import { useRef } from "react";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  rating: number;
  score: string;
  testimonial: string;
  image: StaticImageData | string;
  type: "image" | "text" | "video";
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
      "Incredible partnership! Nordisk Soft transformed our digital presence completely.",
    image: TextCard3,
    type: "text",
  },
];

const slideFromBottom = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function TestimonialsSection() {
  return (
    <section className=" scroll-mt-28 py-16 mx-auto w-11/12 xl:w-4/5 h-[620px] bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 m-4 rounded-3xl">
      <div className="flex flex-col gap-12">
        <div className="w-10/12 mx-auto flex flex-col gap-12">
          <p className="text-white font-semibold text-lg lg:text-3xl">
            /Testimonials
          </p>
          <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-[#56aeff] leading-tight">
            Success stories from our clients
          </h2>
        </div>
        <motion.div
          variants={slideFromBottom}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <Swiper
            spaceBetween={24}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            mousewheel={{ forceToAxis: true }}
            modules={[Autoplay, Pagination, Mousewheel]}
            className="w-full px-6"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide
                key={testimonial.id}
                className="!w-[300px]  md:!w-[560px] flex-shrink-0"
              >
                <div
                  className={`h-[300px] md:h-[280px] ${
                    testimonial.type === "text"
                      ? "bg-slate-700/50 p-6"
                      : "bg-slate-600/30 overflow-hidden"
                  } rounded-2xl backdrop-blur-sm border border-white/10`}
                >
                  {testimonial.type === "image" ? (
                    <ImageCard testimonial={testimonial} />
                  ) : testimonial.type === "video" ? (
                    <VideoCard testimonial={testimonial} />
                  ) : (
                    <TextCard testimonial={testimonial} />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

function ImageCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="relative h-full group">
      <Image
        src={testimonial.image}
        alt={testimonial.name}
        fill
        className="object-cover rounded-2xl"
        style={{ filter: "brightness(0.5)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <Stars rating={testimonial.rating} />
        <span className="text-white/80 text-sm font-medium">
          {testimonial.score}
        </span>
      </div>
      <div className="absolute bottom-4 left-4">
        <h3 className="text-white font-semibold text-lg">{testimonial.name}</h3>
        <p className="text-white/70 text-sm">{testimonial.title}</p>
      </div>
    </div>
  );
}

function VideoCard({ testimonial }: { testimonial: Testimonial }) {
  const swiper = useSwiper();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div className="relative h-full group rounded-2xl overflow-hidden">
      <video
        ref={videoRef}
        src={testimonial.image as string}
        className="object-cover w-full h-full rounded-2xl"
        controls
        preload="metadata"
        onPlay={() => {
          swiper?.autoplay?.stop();
        }}
        onPause={() => {
          setTimeout(() => {
            if (videoRef.current?.paused) {
              swiper?.autoplay?.start();
            }
          }, 500);
        }}
        onEnded={() => {
          swiper?.autoplay?.start();
        }}
      />
      <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
        <Stars rating={testimonial.rating} />
        <span className="text-white/80 text-sm font-medium">
          {testimonial.score}
        </span>
      </div>
    </div>
  );
}

function TextCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-4">
        <Stars rating={testimonial.rating} />
        <span className="text-white/80 text-sm font-medium">
          {testimonial.score}
        </span>
      </div>
      <p className="text-white/90 text-base leading-relaxed mb-6 flex-grow">
        {testimonial.testimonial}
      </p>
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

function Stars({ rating }: { rating: number }) {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-400 text-gray-400"
          }`}
        />
      ))}
    </>
  );
}
