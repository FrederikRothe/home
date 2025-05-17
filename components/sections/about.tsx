// This is a client component
'use client'

import AboutCard from '@/components/AboutCard'
import RunningCard from '@/components/RunningCard'
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
            id="about"
            className="min-h-screen flex items-center justify-center py-16 relative"
        >
            <div className="container mx-auto px-4">
                <ScrollFadeIn
                    direction="down"
                    distance={30}
                    duration={1000}
                    className="mb-12 text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        My projects
                        <span ref={typedRef} className="text-primary"></span>
                    </h1>
                </ScrollFadeIn>

                <div className="w-full mb-16">
                    <ScrollFadeIn direction="up" distance={30} duration={1000}>
                        <AboutCard />
                    </ScrollFadeIn>
                </div>

                {/* Running card section */}
                <div className="w-full">
                    <ScrollFadeIn direction="up" distance={30} duration={1200}>
                        <RunningCard />
                    </ScrollFadeIn>
                </div>
            </div>
        </section>
    )
}
