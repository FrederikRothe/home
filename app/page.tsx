import Hero from '../sections/hero'
import About from '../sections/about'
import Other from '@/sections/other'
import Footer from '@/sections/footer'

export default function Home() {
    return (
        <div className="font-[family-name:var(--font-geist-sans)]">
            <Hero />
            <About />
            <Other />
            <Footer />
        </div>
    )
}
