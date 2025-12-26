"use client"

import { motion, Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { BuffaloHornAccent } from "@/lib/minangkabau-ornaments"

export default function FooterSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
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
    <section ref={ref} className="w-full py-12 sm:py-16 md:py-20 px-4 bg-background border-t-2 border-primary/20">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <div className="flex justify-center gap-4 mb-6">
            <BuffaloHornAccent className="w-6 h-6 text-primary opacity-60 rotate-180" />
            <BuffaloHornAccent className="w-6 h-6 text-primary opacity-60" />
          </div>

          <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4">
            With gratitude and love
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-6 sm:mb-8 text-pretty"
          >
            Cahaya & Agus
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xs sm:text-sm text-muted-foreground mb-8">
            February 7, 2026
          </motion.p>

          <motion.p variants={itemVariants} className="text-xs text-muted-foreground italic">
            Celebrating love, family, and tradition
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
