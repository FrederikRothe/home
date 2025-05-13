'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface ThemedIconProps {
    src: string
    alt: string
    className?: string
    lightColor?: string
    darkColor?: string
}

export default function ThemedIcon({
    src,
    alt,
    className = '',
    lightColor = '#1A365D', // Dark blue for light mode
    darkColor = '#F8FAFC', // Off-white for dark mode
}: ThemedIconProps) {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [svgContent, setSvgContent] = useState<string | null>(null)

    // Only render after component is mounted to avoid hydration mismatch
    useEffect(() => {
        setMounted(true)

        // Fetch the SVG content
        fetch(src)
            .then((response) => response.text())
            .then((text) => {
                setSvgContent(text)
            })
            .catch((error) => {
                console.error('Error loading SVG:', error)
            })
    }, [src])

    if (!mounted || !svgContent) {
        return <div className={`${className}`}></div> // Placeholder
    }

    // Determine which color to use based on the theme
    const fillColor = theme === 'light' ? lightColor : darkColor

    // Replace the fill attribute in the SVG
    const coloredSvg = svgContent.replace(
        /fill="[^"]*"/g,
        `fill="${fillColor}"`
    )

    // Create a data URL from the modified SVG
    const svgDataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
        coloredSvg
    )}`

    return (
        <img
            src={svgDataUrl}
            alt={alt}
            className={`${className} transition-all duration-300`}
        />
    )
}
