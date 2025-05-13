import { animate } from 'animejs'
import { useEffect, useRef } from 'react'

interface InlineBouncingEmojiProps {
    children: React.ReactNode
}

export default function InlineBouncingEmoji({
    children,
}: InlineBouncingEmojiProps) {
    const emojiRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        if (emojiRef.current) {
            animate(emojiRef.current, {
                translateY: [0, -15, 0],
                rotate: [0, 10, 0, -10, 0],
                duration: 1500,
                easing: 'easeInOutQuad',
                loop: false,
            })
        }
    }, [])

    return (
        <span
            ref={emojiRef}
            className="inline-block"
            style={{ display: 'inline-block', marginLeft: 0 }}
        >
            {children}
        </span>
    )
}
