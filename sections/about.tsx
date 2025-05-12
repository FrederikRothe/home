import BouncingText from '@/components/Animations/BouncingText'
import BlogCard from '@/components/BlogCard'
import { getAllPosts } from '@/lib/posts'

export default async function About() {
    const posts = (await getAllPosts()).map((p) => p.meta)

    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div>
                {posts.map((post) => (
                    <BlogCard key={post.slug} meta={post} />
                ))}
            </div>
        </section>
    )
}
