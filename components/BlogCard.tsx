import Image from 'next/image'
import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'

export default function BlogCard({ meta }: { meta: PostMeta }) {
    return (
        <Link
            href={`/blog/${meta.slug}`}
            className="group block max-w-sm rounded-2xl shadow hover:shadow-lg transition"
        >
            <div className="aspect-video overflow-hidden rounded-t-2xl">
                <Image
                    src={meta.coverImage}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 300px, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform"
                />
            </div>
            <div className="p-4">
                <h2 className="font-semibold text-lg">{meta.title}</h2>
                <p className="text-sm text-gray-600 mt-1">{meta.excerpt}</p>
                <time className="block mt-2 text-xs text-gray-400">
                    {new Date(meta.date).toLocaleDateString()}
                </time>
            </div>
        </Link>
    )
}
