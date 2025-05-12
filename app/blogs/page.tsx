// app/blog/page.tsx
import { getAllPosts } from '@/lib/posts'
import BlogCard from '@/components/BlogCard'

export const metadata = {
    title: 'Blog',
    description: 'All my articles and notes',
}

export default async function BlogIndex() {
    const posts = (await getAllPosts()).map((p) => p.meta)

    return (
        <main className="container mx-auto px-4 py-12 ">
            <h1 className="text-3xl font-semibold mb-8">Blog</h1>

            <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((meta) => (
                    <BlogCard key={meta.slug} meta={meta} />
                ))}
            </section>
        </main>
    )
}
