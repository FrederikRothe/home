'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

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
            className="h-10 w-10 rounded-full flex items-center justify-center transition-colors bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 mt-4"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {isDark ? (
                // Sun icon for dark mode (clicking switches to light)
                <img src="/sun.svg" alt="Moon icon" className="w-5 h-5" />
            ) : (
                // Moon icon for light mode (clicking switches to dark)
                <img src="/moon.svg" alt="Sun icon" className="w-5 h-5" />
            )}
        </button>
    )
}
