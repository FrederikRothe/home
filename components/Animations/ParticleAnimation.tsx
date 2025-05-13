'use client'

import { useRef, useEffect, useState, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useTheme } from 'next-themes'

// Generate random positions for particles
function generateParticles(count: number) {
    const positions = new Float32Array(count * 3)
    const initialPositions = new Float32Array(count * 3) // Store initial positions for animation reference
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    for (let i = 0; i < count; i++) {
        // Spread particles across the screen with some depth
        const x = (Math.random() - 0.5) * 2 // -1 to 1
        const y = (Math.random() - 0.5) * 2 // -1 to 1
        const z = (Math.random() - 0.5) * 0.5 // Keep z range smaller

        // Store both in positions and initialPositions
        positions[i * 3] = x
        positions[i * 3 + 1] = y
        positions[i * 3 + 2] = z

        initialPositions[i * 3] = x
        initialPositions[i * 3 + 1] = y
        initialPositions[i * 3 + 2] = z

        // Randomize colors slightly within a blue palette
        colors[i * 3] = 0.2 + Math.random() * 0.2 // R
        colors[i * 3 + 1] = 0.5 + Math.random() * 0.5 // G
        colors[i * 3 + 2] = 0.8 + Math.random() * 0.2 // B

        // Random sizes with bias towards smaller particles
        sizes[i] = Math.random() * 1.5 + 0.1
    }

    return { positions, initialPositions, colors, sizes }
}

function ParticleField({ scrollY }: { scrollY: number }) {
    const { theme, resolvedTheme } = useTheme()
    // Use resolvedTheme for more accurate detection including system preference
    const isDark = resolvedTheme === 'dark'

    // References for animations
    const pointsRef = useRef<THREE.Points>(null)
    const materialRef = useRef<THREE.PointsMaterial>(null)
    const { viewport } = useThree()

    // Create particles with memoization to avoid recreating on each render
    const count = 1500 // Reduced count for better performance
    const { positions, initialPositions, colors, sizes } = useMemo(
        () => generateParticles(count),
        []
    )

    // Create buffers as refs to minimize GC
    const positionBuffer = useRef(new Float32Array(count * 3))

    // Last scroll position for smoother animation
    const lastScrollY = useRef(scrollY)

    // Throttle the animation for better performance
    const frameCount = useRef(0)

    // Animation on each frame
    useFrame(({ clock }) => {
        if (!pointsRef.current) return

        // Only update every 2nd frame for better performance
        frameCount.current = (frameCount.current + 1) % 2
        if (frameCount.current !== 0) return

        const time = clock.getElapsedTime() * 0.15 // Slowed down slightly

        // Smooth out the scroll effect with lerping
        lastScrollY.current =
            lastScrollY.current + (scrollY - lastScrollY.current) * 0.1
        const scrollFactor = lastScrollY.current * 0.0004

        // Apply movement to particles
        const positions = pointsRef.current.geometry.attributes.position
            .array as Float32Array
        const buffer = positionBuffer.current

        for (let i = 0; i < count; i++) {
            const i3 = i * 3

            // Get initial positions
            const initX = initialPositions[i3]
            const initY = initialPositions[i3 + 1]
            const initZ = initialPositions[i3 + 2]

            // Use noise-like function for more organic movement
            const noiseX =
                Math.sin(initX * 2 + time) * Math.cos(initY + time * 0.5)
            const noiseY =
                Math.cos(initY * 2 + time) * Math.sin(initZ + time * 0.7)
            const noiseZ =
                Math.sin(initZ * 3 + time) * Math.cos(initX + time * 0.3)

            // Apply scroll effect and noise
            buffer[i3] = initX + noiseX * 0.05 + Math.sin(scrollFactor) * 0.02
            buffer[i3 + 1] = initY + noiseY * 0.05 - scrollFactor * 0.2
            buffer[i3 + 2] = initZ + noiseZ * 0.05
        }

        // Copy the buffer to the actual positions
        for (let i = 0; i < buffer.length; i++) {
            positions[i] = buffer[i]
        }

        pointsRef.current.geometry.attributes.position.needsUpdate = true
    })

    // Get color based on theme
    const particleColor = isDark ? '#60A5FA' : '#5152F5'

    // Update material when theme changes
    useEffect(() => {
        if (materialRef.current) {
            // materialRef.current.color = new THREE.Color(particleColor)
            // Add a slight size difference for each theme
            materialRef.current.size = isDark ? 0.018 : 0.015
        }
    }, [isDark, particleColor])

    return (
        <Points
            ref={pointsRef}
            positions={positions}
            stride={3}
            frustumCulled={false}
        >
            <PointMaterial
                ref={materialRef}
                transparent
                /* vertexColors */
                color={particleColor}
                size={0.015}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                toneMapped={false}
            />
        </Points>
    )
}

export default function ParticleAnimation() {
    const [scrollY, setScrollY] = useState(0)

    // Throttle scroll events for better performance
    useEffect(() => {
        let ticking = false

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrollY(window.scrollY)
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div
            className="w-full h-full opacity-60"
            style={{ pointerEvents: 'none' }}
        >
            <Canvas
                camera={{ position: [0, 0, 1], fov: 30 }}
                dpr={[1, 1.5]} // Limit pixel ratio for performance
                gl={{
                    antialias: false,
                    alpha: true,
                    powerPreference: 'high-performance',
                }}
                performance={{ min: 0.5 }} // Allow performance to scale down if needed
                style={{ pointerEvents: 'none' }}
            >
                <ParticleField scrollY={scrollY} />
            </Canvas>
        </div>
    )
}
