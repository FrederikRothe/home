// This is a client component
'use client'

import ScrollFadeIn from '@/components/ScrollFadeIn'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

// Define props interface
interface AboutProps {
    featuredPostData?: {
        meta: {
            title: string
            date: string
            excerpt: string
            coverImage?: string
            slug: string
        }
        htmlContent: string
    }
}

// Client component for the About section
export default function About({ featuredPostData }: AboutProps) {
    const typedRef = useRef(null)

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ['...', '...'],
            typeSpeed: 150,
            backSpeed: 75,
            loop: true,
            cursorChar: '|',
            startDelay: 500,
        })

        return () => {
            typed.destroy()
        }
    }, [])

    return (
        <section
            id="other"
            className="h-screen flex items-center justify-center pt-16 relative"
        >
            <div className="container mx-auto px-4 text-center md:text-left">
                <ScrollFadeIn
                    direction="down"
                    distance={30}
                    duration={1000}
                    className="mb-12"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        About Me
                        <span ref={typedRef} className="text-primary"></span>
                    </h1>
                </ScrollFadeIn>

                <div className="max-w-4xl mx-auto"></div>
            </div>
        </section>
    )
}
