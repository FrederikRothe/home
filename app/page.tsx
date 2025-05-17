import Hero from '../components/sections/hero'
import About from '../components/sections/about'
import Other from '@/components/sections/other'
import { getPostBySlug } from '@/lib/posts'
import Footer from '@/components/sections/footer'

export default async function Home() {
    // Fetch data server-side
    const featuredPost = await getPostBySlug('my-first-post')

    return (
        <div className="font-[family-name:var(--font-geist-sans)]">
            <Hero />
            <About featuredPostData={featuredPost} />
            {
                // <Other />
            }
            <Footer />
        </div>
    )
}
