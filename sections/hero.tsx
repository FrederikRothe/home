'use client'
import BouncingText from '@/components/AnimationsComponents/BouncingText'
import InlineBouncingEmoji from '@/components/AnimationsComponents/InlineBouncingEmoji'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function Hero() {
    const typedRef = useRef(null)

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: [
                'enjoy making coffees.',
                'love running.',
                'worked as a Teaching Assistant at ITU.',
                'research on how to reduce online impulsive shopping.',
                'love my bike.',
                'prefer mornings over evenings.',
            ],
            typeSpeed: 75,
            backSpeed: 40,
            loop: true,
            cursorChar: '|',
            startDelay: 300,
        })

        return () => {
            typed.destroy()
        }
    }, [])
    return (
        <section
            id="home"
            className="h-screen flex items-center justify-center pt-16 relative"
        >
            <div className="container mx-auto px-4 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Hi, I'm{' '}
                    <span className="text-primary">
                        Frederik
                        <InlineBouncingEmoji>👋🏼</InlineBouncingEmoji>
                    </span>
                    <br />
                    I study Computer Science at the IT-University of Copenhagen.
                    <br />
                    Oh, and I also{' '}
                    <span ref={typedRef} className="text-primary"></span>
                </h1>
                <div className="flex gap-4 justify-center md:justify-start"></div>
            </div>
        </section>
    )
}
