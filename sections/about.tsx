import InlineBouncingEmoji from '@/components/Animations/InlineBouncingEmoji'
import BlogCard from '@/components/BlogCard'
import { getPostBySlug } from '@/lib/posts'

export default async function About() {
    // Get the specific post you want to highlight
    const featuredPost = await getPostBySlug('my-first-post')

    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">
                    About me.
                </h2>

                <div className="max-w-4xl mx-auto">
                    <div className="mb-12">
                        <p className="text-lg mb-8">
                            I'm a passionate developer focused on creating
                            clean, user-friendly web experiences. Check out my
                            featured article below about how I built this
                            portfolio.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">
                            Featured Post
                        </h3>
                        <div className="max-w-sm mx-auto">
                            {/* Pass serializable props to the client component */}
                            <BlogCard
                                meta={{
                                    slug: featuredPost.meta.slug,
                                    title: featuredPost.meta.title,
                                    date: featuredPost.meta.date,
                                    coverImage: featuredPost.meta.coverImage,
                                    excerpt: featuredPost.meta.excerpt,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
