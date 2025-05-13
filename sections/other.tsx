'use client'
import ScrollFadeIn from '@/components/ScrollFadeIn'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function Other() {
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
                        Other Projects
                        <span ref={typedRef} className="text-primary"></span>
                    </h1>
                </ScrollFadeIn>
                <ScrollFadeIn
                    direction="down"
                    distance={30}
                    duration={1000}
                    className="mb-12"
                >
                    <p className="text-lg mb-8">
                        Here are some of my other projects that I have worked
                        on.
                    </p>
                </ScrollFadeIn>
            </div>
        </section>
    )
}
