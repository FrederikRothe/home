import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/sections/header'
import Footer from '@/components/sections/footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import AnimationWrapper from '@/components/AnimationsComponents/AnimationWrapper'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Frederik Rothe',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
            >
                <ThemeProvider>
                    {/* Animation layer at the bottom */}
                    <AnimationWrapper />

                    {/* Content layers with higher z-index */}
                    <div className="relative z-10 flex-1 flex flex-col">
                        <Header />
                        <main className="flex-1">{children}</main>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
