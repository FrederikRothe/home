'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import ThemedIcon from './ThemedIcon'

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Only show the toggle after component is mounted to avoid hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="h-10 w-10"></div> // Placeholder with same dimensions to avoid layout shift
    }

    const isDark = theme === 'dark'

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="h-10 w-10 rounded-full flex items-center justify-center transition-colors bg-primary/10 dark:bg-primary/20 hover:bg-primary/20 dark:hover:bg-primary/30 mt-4"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {isDark ? (
                // Sun icon for dark mode (clicking switches to light)
                <ThemedIcon
                    src="/sun.svg"
                    alt="Sun icon"
                    className="w-5 h-5"
                    lightColor="#1A365D"  // Dark blue for light mode
                    darkColor="#F8FAFC"   // Off-white for dark mode
                />
            ) : (
                // Moon icon for light mode (clicking switches to dark)
                <ThemedIcon
                    src="/moon.svg"
                    alt="Moon icon"
                    className="w-5 h-5"
                    lightColor="#1A365D"  // Dark blue for light mode
                    darkColor="#F8FAFC"   // Off-white for dark mode
                />
            )}
        </button>
    )
}
