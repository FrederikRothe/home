import { getPostBySlug, getPostSlugs } from '@/lib/posts'
import Image from 'next/image'
import Link from 'next/link'

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  
  return {
    title: post.meta.title,
    description: post.meta.excerpt,
  }
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ''),
  }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  return (
    <main className="container mx-auto px-4 py-12 max-w-prose">
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
          className="prose prose-gray max-w-none"
          dangerouslySetInnerHTML={{ __html: post.htmlContent }} 
        />
      </article>
    </main>
  )
}