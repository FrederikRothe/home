import { animate } from 'animejs'
import { useEffect } from 'react'

interface AnimationProps {
    children: React.ReactNode
}

export default function BouncingText({ children }: AnimationProps) {
    useEffect(() => {
        animate('span.animated-text', {
            // Property keyframes
            y: [
                { to: '-2.75rem', ease: 'outExpo', duration: 600 },
                { to: 0, ease: 'outBounce', duration: 800, delay: 100 },
            ],
            delay: (_, i) => i * 50, // Function based value
            ease: 'inOutCirc',
            loopDelay: 1000,
            loop: false,
        })
    }, [])

    return (
        <div className="flex items-center justify-center">
            <span className="text-6xl font-bold text-blue-500 animated-text">
                {children}
            </span>
        </div>
    )
}
