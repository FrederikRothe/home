import Hero from '../sections/hero'
import About from '../sections/about'
import Other from '@/sections/other'
import { getPostBySlug } from '@/lib/posts'

export default async function Home() {
    // Fetch data server-side
    const featuredPost = await getPostBySlug('my-first-post')

    return (
        <div className="font-[family-name:var(--font-geist-sans)]">
            <Hero />
            <About featuredPostData={featuredPost} />
            <Other />
        </div>
    )
}
