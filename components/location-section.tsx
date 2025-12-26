"use client"

import { motion, Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { TraditionalFlowerMotif } from "@/lib/minangkabau-ornaments"

export default function LocationSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section ref={ref} className="w-full py-16 sm:py-20 md:py-32 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.div variants={itemVariants} className="ornament-divider mb-10 sm:mb-12" />

          <motion.h2
            variants={itemVariants}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-8 sm:mb-10 text-center text-pretty"
          >
            Location
          </motion.h2>

          <div className="flex justify-center mb-8 sm:mb-10">
            <TraditionalFlowerMotif className="w-12 h-12 text-primary opacity-40" />
          </div>

          <motion.div variants={itemVariants} className="mb-8 sm:mb-10">
            <div className="w-full h-64 sm:h-80 bg-muted rounded-lg overflow-hidden border-2 border-primary/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.0054!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDC8DQyJzQ2LjAiTiA3NMK8MDAnMzIuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-4 text-pretty">The Grand Ballroom</h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">123 Fifth Avenue, New York, NY 10003</p>
            <Button
              asChild
              className="px-6 py-2.5 bg-primary text-background hover:bg-accent transition-colors duration-300"
            >
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                Open in Google Maps
              </a>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="ornament-divider mt-12 sm:mt-16" />
        </motion.div>
      </div>
    </section>
  )
}
