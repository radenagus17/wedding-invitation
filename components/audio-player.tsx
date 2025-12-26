"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, Volume1 } from "lucide-react"
import { motion } from "framer-motion"

interface AudioPlayerProps {
  audioUrl?: string
  autoPlay?: boolean
}

export default function AudioPlayer({ audioUrl = "/romantic-song.mp3", autoPlay = true }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isReady, setIsReady] = useState(false)

  // Handle autoplay on mount
  useEffect(() => {
    if (!audioRef.current) return

    const handleCanPlay = () => {
      setIsReady(true)
      if (autoPlay) {
        // Attempt autoplay with very low volume first
        audioRef.current!.volume = 0.3
        audioRef.current!.play().catch(() => {
          // Autoplay blocked by browser - user must interact first
          console.log("[v0] Autoplay blocked by browser policy")
        })
        setIsPlaying(true)
      }
    }

    audioRef.current.addEventListener("canplay", handleCanPlay)
    return () => audioRef.current?.removeEventListener("canplay", handleCanPlay)
  }, [autoPlay])

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.volume = 0.3
      audioRef.current.play().catch(() => {
        console.log("[v0] Play action blocked")
      })
      setIsPlaying(true)
    }
  }

  return (
    <>
      <audio ref={audioRef} src={audioUrl} loop />
      <motion.button
        onClick={togglePlay}
        disabled={!isReady}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-neutral-beige hover:bg-neutral-sage text-accent-gold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        title={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Volume2 size={20} className="text-accent-gold" />
        ) : (
          <Volume1 size={20} className="text-accent-gold" />
        )}
      </motion.button>
    </>
  )
}
