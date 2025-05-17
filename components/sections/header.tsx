'use client'

import ThemeToggle from '@/components/ThemeToggle'
import ThemedIcon from '@/components/ThemedIcon'
import { useEffect, useState } from 'react'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Check if page has been scrolled more than 20px
            const scrolled = window.scrollY > 20
            setIsScrolled(scrolled)
        }

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll)

        // Call once on mount to set initial state
        handleScroll()

        // Clean up event listener
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed w-full bg-background/80 backdrop-blur-md z-10 transition-all duration-300 ease-in-out ${
                isScrolled
                    ? 'py-2 border-b border-secondary/20 dark:border-primary/20 shadow-sm'
                    : 'py-4 border-b border-secondary/20 dark:border-primary/20 shadow-sm'
            }`}
        >
            <nav className="container mx-auto px-4 flex justify-between items-center">
                <a href="/#top">
                    <ThemedIcon
                        src="/fr.svg"
                        alt="Logo"
                        className={`transition-all duration-300 transform hover:scale-110 ${
                            isScrolled ? 'h-12' : 'h-16'
                        }`}
                        lightColor="#1A365D" // Dark blue for light mode
                        darkColor="#F8FAFC" // Off-white for dark mode
                    />
                </a>
                <div className="flex items-center space-x-6">
                    <div
                        className={`transition-all duration-300 ${
                            isScrolled ? 'scale-90' : ''
                        }`}
                    >
                        <ThemeToggle />
                    </div>
                    {/* <div className="hidden md:flex space-x-8">
                        <a
                            href="/#home"
                            className="transition-transform transform hover:scale-110"
                        >
                            <ThemedIcon
                                src="/layers.svg"
                                alt="Layers icon"
                                className={`transition-all duration-300 ${
                                    isScrolled
                                        ? 'h-10 w-10 mt-2'
                                        : 'h-12 w-12 mt-4'
                                }`}
                                lightColor="#1A365D" // Dark blue for light mode
                                darkColor="#F8FAFC" // Off-white for dark mode
                            />
                        </a>
                    </div> */}
                </div>
            </nav>
        </header>
    )
}
