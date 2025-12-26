"use client"

import { motion, Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { MatriarchalSymbol } from "@/lib/minangkabau-ornaments"

export default function EventDetailsSection() {
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
    <section id="event-details" ref={ref} className="w-full py-16 sm:py-20 md:py-32 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.div variants={itemVariants} className="ornament-divider mb-10 sm:mb-12" />

          <motion.h2
            variants={itemVariants}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-8 sm:mb-10 text-center text-pretty"
          >
            Celebration Details
          </motion.h2>

          <div className="flex justify-center mb-8 sm:mb-12">
            <MatriarchalSymbol className="w-14 h-14 text-primary opacity-50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Akad/Ceremony */}
            <motion.div variants={itemVariants}>
              <Card className="border-2 border-primary/20 bg-background p-6 sm:p-8 hover:border-primary/40 transition-colors duration-300">
                <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-6">Akad Nikah & Ceremony</h3>
                <div className="space-y-5 sm:space-y-6">
                  <div className="border-l-2 border-secondary pl-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1.5 font-medium">Date</p>
                    <p className="text-base sm:text-lg text-foreground">Saturday, June 14, 2025</p>
                  </div>
                  <div className="border-l-2 border-secondary pl-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1.5 font-medium">Time</p>
                    <p className="text-base sm:text-lg text-foreground">2:00 PM - 4:00 PM</p>
                  </div>
                  <div className="border-l-2 border-secondary pl-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1.5 font-medium">
                      Dress Code
                    </p>
                    <p className="text-base sm:text-lg text-foreground">Traditional Formal</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Reception */}
            <motion.div variants={itemVariants}>
              <Card className="border-2 border-primary/20 bg-background p-6 sm:p-8 hover:border-primary/40 transition-colors duration-300">
                <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-6">Reception</h3>
                <div className="space-y-5 sm:space-y-6">
                  <div className="border-l-2 border-secondary pl-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1.5 font-medium">Date</p>
                    <p className="text-base sm:text-lg text-foreground">Sunday, June 15, 2025</p>
                  </div>
                  <div className="border-l-2 border-secondary pl-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1.5 font-medium">Time</p>
                    <p className="text-base sm:text-lg text-foreground">6:00 PM - 11:00 PM</p>
                  </div>
                  <div className="border-l-2 border-secondary pl-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1.5 font-medium">
                      Dress Code
                    </p>
                    <p className="text-base sm:text-lg text-foreground">Cocktail Attire</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="ornament-divider mt-12 sm:mt-16" />
        </motion.div>
      </div>
    </section>
  )
}
