"use client"

import { motion, Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { TraditionalFlowerMotif } from "@/lib/minangkabau-ornaments"

export default function GivingSection() {
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
    <section ref={ref} className="w-full py-16 sm:py-20 md:py-32 px-4 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.div variants={itemVariants} className="ornament-divider mb-10 sm:mb-12" />

          <motion.h2
            variants={itemVariants}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-8 sm:mb-10 text-center text-pretty"
          >
            For Those Who Wish to Give
          </motion.h2>

          <div className="flex justify-center mb-8 sm:mb-12">
            <TraditionalFlowerMotif className="w-12 h-12 text-primary opacity-40" />
          </div>

          <motion.p
            variants={itemVariants}
            className="text-center text-muted-foreground mb-12 sm:mb-16 text-base sm:text-lg leading-relaxed"
          >
            Your presence is the greatest gift. However, if you wish to help us start this new chapter, bank transfers
            are gratefully accepted.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Bank Transfer */}
            <motion.div variants={itemVariants}>
              <Card className="border-2 border-primary/20 bg-background p-6 sm:p-8 hover:border-primary/40 transition-colors duration-300">
                <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-6">Bank Transfer</h3>
                <div className="space-y-5 sm:space-y-6 mb-8">
                  <div className="border-l-2 border-secondary pl-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1.5 font-medium">
                      Account Name
                    </p>
                    <p className="text-base sm:text-lg text-foreground font-medium">Sarah Michael</p>
                  </div>
                  <div className="border-l-2 border-secondary pl-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1.5 font-medium">
                      Bank Name
                    </p>
                    <p className="text-base sm:text-lg text-foreground font-medium">First National Bank</p>
                  </div>
                  <div className="border-l-2 border-secondary pl-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1.5 font-medium">
                      Account Number
                    </p>
                    <p className="text-base sm:text-lg text-foreground font-mono">1234-5678-9012</p>
                  </div>
                  <div className="border-l-2 border-secondary pl-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1.5 font-medium">
                      Routing Number
                    </p>
                    <p className="text-base sm:text-lg text-foreground font-mono">987654321</p>
                  </div>
                </div>
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText("1234-5678-9012")
                  }}
                  className="w-full px-6 py-2.5 bg-primary text-background hover:bg-accent transition-colors duration-300"
                >
                  Copy Account Number
                </Button>
              </Card>
            </motion.div>

            {/* QR Code */}
            <motion.div variants={itemVariants}>
              <Card className="border-2 border-primary/20 bg-background p-6 sm:p-8 hover:border-primary/40 transition-colors duration-300 flex flex-col items-center justify-center">
                <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-8">Or Scan QR Code</h3>
                <div className="bg-muted p-6 rounded-lg mb-8 border border-primary/20">
                  <img src="/qr-code.png" alt="Payment QR Code" className="w-40 sm:w-48 h-40 sm:h-48" />
                </div>
                <p className="text-center text-muted-foreground text-xs sm:text-sm">
                  Scan this QR code to make your transfer quickly and securely
                </p>
              </Card>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="ornament-divider mt-12 sm:mt-16" />
        </motion.div>
      </div>
    </section>
  )
}
