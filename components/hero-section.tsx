"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GonjongRoofline, BuffaloHornAccent } from "@/lib/minangkabau-ornaments"
import CountdownTimer from "@/components/countdown-timer"

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-background px-4 py-16 sm:py-20">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-secondary/5" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-24 text-secondary opacity-20">
        <GonjongRoofline className="w-full h-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-2xl w-full"
      >
        {/* Names in serif with buffalo horn accents */}
        <div className="flex justify-center mb-4">
          <BuffaloHornAccent className="w-6 h-6 text-primary opacity-60 rotate-180" />
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6 tracking-tight text-pretty">
          Cahaya & Agus
        </h1>

        <div className="flex justify-center mb-8">
          <BuffaloHornAccent className="w-6 h-6 text-primary opacity-60" />
        </div>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 font-light tracking-wide"
        >
          February 7, 2026
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="mb-12 sm:mb-16"
        >
          <CountdownTimer eventDate="2026-02-07T05:00:00" />
        </motion.div>

        {/* Subtitle - improved readability on mobile */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-sm sm:text-base text-muted-foreground mb-12 sm:mb-16 font-light leading-relaxed px-2"
        >
          Together with their families, request the honour of your presence at their marriage
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        >
          <Button
            asChild
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-background hover:bg-accent transition-colors duration-300"
          >
            <a href="#event-details">Scroll for Details</a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-secondary hidden sm:block"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
