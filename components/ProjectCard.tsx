import Image from 'next/image'
import Link from 'next/link'
import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/projects'

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const { title, description, tags, link, image } = project

    return (
        <Card className="group overflow-hidden border-border/50 bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 dark:hover:shadow-primary/10">
            <div className="flex flex-col md:flex-row h-full">
                <div className="flex-1 flex flex-col p-2">
                    <CardHeader>
                        <div className="flex justify-between items-start">
                             <div className="space-y-1">
                                <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                                    {title}
                                </CardTitle>
                                {tags && tags.length > 0 && (
                                    <div className="flex gap-2 flex-wrap">
                                        {tags.map((tag) => (
                                            <span 
                                                key={tag}
                                                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <CardDescription className="text-base mt-4 line-clamp-3">
                            {description}
                        </CardDescription>
                    </CardHeader>
                    <CardFooter className="mt-auto pt-0 pb-6 px-6">
                        <Link
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto"
                        >
                            <Button className="w-full sm:w-auto gap-2 group/btn">
                                See Project
                                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                            </Button>
                        </Link>
                    </CardFooter>
                </div>
                
                {/* Image Section */}
                <div className="md:w-[45%] relative h-64 md:h-auto overflow-hidden min-h-[250px]">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 md:hidden" />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none mix-blend-overlay" />
                    <Image
                        alt={`${title} Preview`}
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        src={image}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                </div>
            </div>
        </Card>
    )
}
