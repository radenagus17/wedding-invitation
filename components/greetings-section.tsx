"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { database } from "@/lib/firebase"
import { ref, push, onValue, query, orderByChild, limitToLast } from "firebase/database"
import { MatriarchalSymbol } from "@/lib/minangkabau-ornaments"

interface Greeting {
  id: string
  name: string
  message: string
  createdAt: number
}

const MAX_DISPLAY_MESSAGES = 10

export default function GreetingsSection() {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [greetings, setGreetings] = useState<Greeting[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    try {
      const greetingsRef = ref(database, "greetings")
      const greetingsQuery = query(greetingsRef, orderByChild("createdAt"), limitToLast(MAX_DISPLAY_MESSAGES))

      const unsubscribe = onValue(
        greetingsQuery,
        (snapshot) => {
          const data = snapshot.val()
          if (data) {
            const greetingsArray: Greeting[] = Object.entries(data).map(([key, value]: [string, any]) => ({
              id: key,
              name: value.name || "",
              message: value.message || "",
              createdAt: value.createdAt || 0,
            }))
            greetingsArray.sort((a, b) => b.createdAt - a.createdAt)
            setGreetings(greetingsArray)
          } else {
            setGreetings([])
          }
          setIsLoading(false)
        },
        (error) => {
          console.error("[v0] Firebase listener error:", error)
          setError("Failed to load greetings. Please try again later.")
          setIsLoading(false)
        },
      )

      return () => unsubscribe()
    } catch (err) {
      console.error("[v0] Firebase setup error:", err)
      setError("Failed to connect to greetings service.")
      setIsLoading(false)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!name.trim() || !message.trim()) {
      setError("Please fill in both name and message.")
      return
    }

    if (name.trim().length > 100) {
      setError("Name is too long (max 100 characters).")
      return
    }

    if (message.trim().length > 500) {
      setError("Message is too long (max 500 characters).")
      return
    }

    setIsSubmitting(true)

    try {
      const greetingsRef = ref(database, "greetings")
      await push(greetingsRef, {
        name: name.trim(),
        message: message.trim(),
        createdAt: Date.now(),
      })

      setName("")
      setMessage("")
    } catch (err) {
      console.error("[v0] Submit error:", err)
      setError("Failed to send wishes. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section ref={sectionRef} className="w-full py-16 sm:py-20 md:py-32 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.div variants={itemVariants} className="ornament-divider mb-10 sm:mb-12" />

          <motion.h2
            variants={itemVariants}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-8 sm:mb-10 text-center text-pretty"
          >
            Send Your Wishes
          </motion.h2>

          <div className="flex justify-center mb-8 sm:mb-12">
            <MatriarchalSymbol className="w-14 h-14 text-primary opacity-50" />
          </div>

          {/* Form */}
          <motion.form variants={itemVariants} onSubmit={handleSubmit} className="mb-12 sm:mb-16 space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={100}
                className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={500}
                rows={4}
                className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                disabled={isSubmitting}
              ></textarea>
            </div>

            {error && <p className="text-xs text-red-600 dark:text-red-400">{error}</p>}

            <Button
              type="submit"
              disabled={isSubmitting || !name.trim() || !message.trim()}
              className="w-full px-6 py-3 bg-primary text-background hover:bg-accent transition-colors duration-300 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Wishes"}
            </Button>
          </motion.form>

          <motion.div variants={itemVariants} className="space-y-4">
            {isLoading ? (
              <p className="text-center text-muted-foreground py-8">Loading greetings...</p>
            ) : greetings.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">Be the first to send your wishes!</p>
            ) : (
              <>
                {greetings.map((greeting) => (
                  <motion.div
                    key={greeting.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-l-4 border-primary rounded-lg p-4 sm:p-6 bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <p className="font-semibold text-foreground mb-2 text-sm sm:text-base">{greeting.name}</p>
                    <p className="text-muted-foreground mb-3 text-sm sm:text-base">{greeting.message}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(greeting.createdAt).toLocaleDateString(undefined, {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </motion.div>
                ))}
                {greetings.length >= MAX_DISPLAY_MESSAGES && (
                  <p className="text-xs text-center text-muted-foreground pt-4">
                    Showing {MAX_DISPLAY_MESSAGES} most recent wishes
                  </p>
                )}
              </>
            )}
          </motion.div>

          <motion.div variants={itemVariants} className="ornament-divider mt-12 sm:mt-16" />
        </motion.div>
      </div>
    </section>
  )
}
