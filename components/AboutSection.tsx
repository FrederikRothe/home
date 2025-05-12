'use client'

import BlogCard from '@/components/BlogCard'
import ScrollFadeIn from './ScrollFadeIn'
import type { PostMeta } from '@/lib/posts'

interface AboutSectionProps {
  featuredPost: {
    meta: PostMeta
  }
}

export default function AboutSection({ featuredPost }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="py-20 bg-background-light dark:bg-background-dark"
    >
      <div className="container mx-auto px-4">
        <ScrollFadeIn
          direction="down"
          distance={30}
          duration={1000}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center">
            About me.
          </h2>
        </ScrollFadeIn>

        <div className="max-w-4xl mx-auto">
          <ScrollFadeIn
            direction="up"
            distance={40}
            duration={800}
            delay={200}
            className="mb-12"
          >
            <div>
              <p className="text-lg mb-8">
                I'm a passionate developer focused on creating
                clean, user-friendly web experiences. Check out my
                featured article below about how I built this
                portfolio.
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn
            direction="up"
            distance={40}
            duration={1000}
            delay={400}
            className="mb-8"
          >
            <h3 className="text-xl font-semibold mb-4">
              Featured Post
            </h3>
            <div className="max-w-sm mx-auto">
              <BlogCard meta={featuredPost.meta} />
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  )
}