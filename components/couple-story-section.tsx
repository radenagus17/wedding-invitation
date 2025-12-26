"use client"

import { motion, Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { TraditionalFlowerMotif } from "@/lib/minangkabau-ornaments"

export default function CoupleStorySection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      <div className="max-w-3xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.div variants={itemVariants} className="ornament-divider mb-10 sm:mb-12" />

          <motion.h2
            variants={itemVariants}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-10 sm:mb-12 text-pretty text-center"
          >
            Our Story
          </motion.h2>

          <div className="flex justify-center mb-8 sm:mb-10">
            <TraditionalFlowerMotif className="w-12 h-12 text-primary opacity-40" />
          </div>

          <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              We met on a rainy afternoon in a small café in Brooklyn. Sarah was reading her favorite book, and Michael
              asked for book recommendations. That simple conversation led to countless coffee dates, late-night talks,
              and a love that has grown deeper every day.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Three years later, Michael got down on one knee under the same café's awning—the place where everything
              began. With tears of joy, Sarah said yes. Now, we're thrilled to celebrate this beautiful chapter of our
              lives with all of you.
            </p>
          </motion.div>

          {/* Timeline - responsive layout */}
          <div className="space-y-6 sm:space-y-8">
            {[
              { year: "2021", event: "We meet at our favorite café" },
              { year: "2024", event: "Michael proposes at the same café where it all started" },
              { year: "2025", event: "We say 'I do' with our beloved ones" },
            ].map((item, idx) => (
              <motion.div key={idx} variants={itemVariants} className="flex gap-4 sm:gap-6">
                <div className="shrink-0 pt-1">
                  <p className="font-serif text-xl sm:text-2xl text-primary font-semibold min-w-fit">{item.year}</p>
                </div>
                <div className="grow pt-1 border-l-2 border-primary/30 pl-4 sm:pl-6">
                  <p className="text-muted-foreground text-sm sm:text-base">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="ornament-divider mt-12 sm:mt-16" />
        </motion.div>
      </div>
    </section>
  )
}
