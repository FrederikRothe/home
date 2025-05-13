import { getPostBySlug, getPostSlugs } from '@/lib/posts'
import Image from 'next/image'
import Link from 'next/link'
import '../blog-styles.css'

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ''),
  }))
}

// Configure the page as statically generated
export const dynamic = 'force-static'

// Generate metadata for the page
export async function generateMetadata({ params }: any) {
  const { slug } = params
  const post = await getPostBySlug(slug)
  
  return {
    title: post.meta.title,
    description: post.meta.excerpt,
  }
}

// Main blog post component with basic type format 
// Adding a simpler type annotation resolves the issue when using --turbo flag
export default async function BlogPost({ params }: any) {
  const { slug } = params
  const post = await getPostBySlug(slug)

  return (
    <main className="container mx-auto px-4 py-12 max-w-prose font-[family-name:var(--font-geist-sans)]">
      <Link href="/blogs" className="text-sm text-gray-500 hover:text-gray-700 mb-8 inline-flex items-center">
        ← Back to all posts
      </Link>

      <article className="mt-8">
        <header className="mb-8">
          <time className="text-sm text-gray-500 block mb-2">
            {new Date(post.meta.date).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <h1 className="text-3xl font-bold mb-4">{post.meta.title}</h1>
          <p className="text-xl text-gray-600">{post.meta.excerpt}</p>
        </header>

        {post.meta.coverImage && (
          <div className="mb-8 relative aspect-video">
            <Image
              src={post.meta.coverImage}
              alt=""
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        )}

        <div
          className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-primary prose-img:rounded-lg max-w-none blog-content"
          dangerouslySetInnerHTML={{ __html: post.htmlContent }}
        />
      </article>
    </main>
  )
}