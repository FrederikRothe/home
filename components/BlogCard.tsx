import Image from 'next/image'
import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'

export default function BlogCard({ meta }: { meta: PostMeta }) {
    return (
        <Link
            href={`/blogs/${meta.slug}`}
            className="group block max-w-sm border border-gray-100 rounded-lg hover:border-gray-200 transition-all hover:translate-y-[-2px]"
        >
            <div className="aspect-video overflow-hidden rounded-t-lg relative">
                <Image
                    src={meta.coverImage}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 300px, 100vw"
                    className="object-cover transition-all duration-300 group-hover:scale-105"
                />
            </div>
            <div className="p-5 border-t border-gray-50">
                <time className="text-xs text-gray-400 mb-2 block">
                    {new Date(meta.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                </time>
                <h2 className="font-medium text-lg tracking-tight mb-2">{meta.title}</h2>
                <p className="text-sm text-gray-500">{meta.excerpt}</p>
            </div>
        </Link>
    )
}
