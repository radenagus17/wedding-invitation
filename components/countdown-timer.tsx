"use client"

import { useEffect, useState } from "react"
import { motion, Variants } from "framer-motion"

interface CountdownTime {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({ eventDate = "2025-06-14T14:00:00" }) {
  const [time, setTime] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const calculateTime = () => {
      const event = new Date(eventDate).getTime()
      const now = new Date().getTime()
      const distance = event - now

      if (distance > 0) {
        setTime({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / 1000 / 60) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        })
      } else {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTime()
    const timer = setInterval(calculateTime, 1000)

    return () => clearInterval(timer)
  }, [eventDate])

  if (!isClient) return null

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const CountdownUnit = ({
    value,
    label,
    index,
  }: {
    value: number
    label: string
    index: number
  }) => (
    <motion.div className="flex flex-col items-center">
      <div className="bg-primary/10 border-2 border-primary/30 rounded-lg px-4 sm:px-6 py-3 sm:py-4 min-w-16 sm:min-w-24">
        <span className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-primary">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest mt-3 font-medium">{label}</p>
    </motion.div>
  )

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full">
      <p className="text-center text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 uppercase tracking-widest font-light">
        Celebration begins in
      </p>

      <div className="flex justify-center gap-3 sm:gap-6 flex-wrap">
        <CountdownUnit value={time.days} label="Days" index={0} />
        <CountdownUnit value={time.hours} label="Hours" index={1} />
        <CountdownUnit value={time.minutes} label="Minutes" index={2} />
        <CountdownUnit value={time.seconds} label="Seconds" index={3} />
      </div>
    </motion.div>
  )
}
