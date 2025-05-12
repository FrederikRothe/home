import Hero from '../sections/hero'
import About from '../sections/about'
import Footer from '@/sections/footer'
import Other from '@/sections/other'

export default function Home() {
    return (
        <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
            <Hero />
            <About />
            <Other />
            <Footer />
        </div>
    )
}
