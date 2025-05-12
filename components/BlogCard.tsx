'use client'

import { Card, CardHeader, CardFooter, Image } from '@heroui/react'
import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'

export default function BlogCard({ meta }: { meta: PostMeta }) {
    return (
        <Link href={`/blogs/${meta.slug}`}>
            <Card isFooterBlurred className="w-full h-[300px] col-span-12">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <time className="text-tiny text-white/70 uppercase font-bold">
                        {new Date(meta.date).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                        })}
                        
                    </time>
                    <h4 className="text-white font-medium text-xl">
                        {meta.title}
                    </h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt={meta.title}
                    className="z-0 w-full h-full object-cover"
                    src={meta.coverImage}
                />
                <CardFooter className="absolute bg-black/30 backdrop-blur-md bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex flex-col">
                        <p className="text-tiny text-white/90">
                            {meta.excerpt}
                        </p>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}
