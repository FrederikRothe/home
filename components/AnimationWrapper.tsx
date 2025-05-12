'use client'

import dynamic from 'next/dynamic'

// Dynamic import for the particle animation to avoid SSR issues with three.js
const ParticleAnimation = dynamic(
  () => import('./ParticleAnimation'),
  { ssr: false }
)

export default function AnimationWrapper() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      pointerEvents: 'none',
      zIndex: 0
    }}>
      <ParticleAnimation />
    </div>
  )
}