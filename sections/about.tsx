import { getPostBySlug } from '@/lib/posts'
import AboutSection from '@/components/AboutSection'

export default async function About() {
    // Get the specific post you want to highlight
    const featuredPost = await getPostBySlug('my-first-post')

    return (
        <AboutSection featuredPost={featuredPost} />
    )
}
