'use client'

import { useRef, useEffect, useState, ReactNode } from 'react'

interface ScrollFadeInProps {
  children: ReactNode
  className?: string
  threshold?: number
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  duration?: number
  once?: boolean
}

export default function ScrollFadeIn({
  children,
  className = '',
  threshold = 0.1,
  delay = 0,
  direction = 'up',
  distance = 50,
  duration = 800,
  once = true
}: ScrollFadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const current = domRef.current
    if (!current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If we only want to animate once and we've already animated, do nothing
          if (once && hasAnimated) return
          
          // Update state when the element enters the viewport
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (once) setHasAnimated(true)
          } else if (!once) {
            setIsVisible(false)
          }
        })
      },
      { threshold }
    )

    observer.observe(current)
    return () => {
      if (current) observer.unobserve(current)
    }
  }, [threshold, once, hasAnimated])

  // Calculate the transform value based on the direction
  let transform = 'translate3d(0, 0, 0)'
  if (!isVisible) {
    switch (direction) {
      case 'up':
        transform = `translate3d(0, ${distance}px, 0)`
        break
      case 'down':
        transform = `translate3d(0, -${distance}px, 0)`
        break
      case 'left':
        transform = `translate3d(${distance}px, 0, 0)`
        break
      case 'right':
        transform = `translate3d(-${distance}px, 0, 0)`
        break
      case 'none':
        transform = 'translate3d(0, 0, 0)'
        break
    }
  }

  // Create the CSS styles for the animation
  const animationStyle = {
    opacity: isVisible ? 1 : 0,
    transform,
    transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
    willChange: 'opacity, transform' // Optimization for the browser
  }

  return (
    <div 
      ref={domRef} 
      className={className}
      style={animationStyle}
    >
      {children}
    </div>
  )
}