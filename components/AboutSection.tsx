'use client'

import ScrollFadeIn from './ScrollFadeIn'
import type { PostMeta } from '@/lib/posts'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

interface AboutSectionProps {
    featuredPost: {
        meta: PostMeta
    }
}

export default function AboutSection({ featuredPost }: AboutSectionProps) {
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

                <div className="max-w-4xl mx-auto">
                    <ScrollFadeIn
                        direction="up"
                        distance={40}
                        duration={800}
                        delay={200}
                        className="mb-12"
                    >
                        <div>
                            <p className="text-lg mb-8">
                                I'm a passionate developer focused on creating
                                clean, user-friendly web experiences. Check out
                                my featured article below about how I built this
                                portfolio.
                            </p>
                        </div>
                    </ScrollFadeIn>

                    <ScrollFadeIn
                        direction="up"
                        distance={40}
                        duration={1000}
                        delay={400}
                        className="mb-8"
                    >
                        <h3 className="text-xl font-semibold mb-4">
                            Featured Post
                        </h3>
                        <div className="max-w-md mx-auto">
                            Insert Card Here.
                        </div>
                    </ScrollFadeIn>
                </div>
            </div>
        </section>
    )
}
