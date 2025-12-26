"use client"

import { useState } from "react"
import { motion, Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { TraditionalFlowerMotif } from "@/lib/minangkabau-ornaments"

export default function GallerySection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    { id: 1, src: "/couple-engagement.png", alt: "Engagement photo 1" },
    { id: 2, src: "/couple-together-smiling.jpg", alt: "Couple together" },
    { id: 3, src: "/engagement-shoot-nature.jpg", alt: "Engagement photo 2" },
    { id: 4, src: "/couple-holding-hands.png", alt: "Couple holding hands" },
    { id: 5, src: "/romantic-sunset-couple.jpg", alt: "Sunset photo" },
    { id: 6, src: "/couple-dancing-wedding.jpg", alt: "Dancing photo" },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <section ref={ref} className="w-full py-16 sm:py-20 md:py-32 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.div variants={itemVariants} className="ornament-divider mb-10 sm:mb-12" />

          <motion.h2
            variants={itemVariants}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-8 sm:mb-10 text-center text-pretty"
          >
            Gallery
          </motion.h2>

          <div className="flex justify-center mb-8 sm:mb-12">
            <TraditionalFlowerMotif className="w-12 h-12 text-primary opacity-40" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {images.map((image) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                className="cursor-pointer group overflow-hidden rounded-lg border-2 border-primary/20 bg-background hover:border-primary/50 transition-colors duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative h-64 sm:h-72 overflow-hidden bg-muted">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="ornament-divider mt-12 sm:mt-16" />
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Gallery"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="max-h-screen max-w-full rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-2xl hover:opacity-70 transition-opacity"
            aria-label="Close gallery"
          >
            ✕
          </button>
        </motion.div>
      )}
    </section>
  )
}
