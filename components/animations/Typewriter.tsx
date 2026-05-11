'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface TypewriterProps {
  text: string
  delay?: number
  className?: string
}

export function Typewriter({ text, delay = 0, className = '' }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true)
      setIsTyping(true)
    }, delay * 1000)

    return () => clearTimeout(startTimeout)
  }, [delay])

  useEffect(() => {
    if (!started) return

    let i = 0
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
        setIsTyping(false)
      }
    }, 50) // typing speed

    return () => clearInterval(typingInterval)
  }, [text, started])

  return (
    <span className={`inline-flex items-center ${className}`}>
      {displayedText}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          repeat: Infinity,
          duration: 0.8,
          ease: 'linear',
        }}
        className={`inline-block w-[0.5em] h-[1em] bg-current ml-1 ${isTyping ? 'opacity-100' : ''}`}
      />
    </span>
  )
}
