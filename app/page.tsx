import Header from '../sections/header'
import Hero from '../sections/hero'
import About from '../sections/about'
import Footer from '@/sections/footer'

export default function Home() {
    return (
        <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
            <Header />
            <Hero />
            <About />
            <Footer />
        </div>
    )
}
