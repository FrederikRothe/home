import Image from 'next/image'
import Link from 'next/link'

export default function AboutCard() {
    return (
        <div className="w-full bg-background-light dark:bg-background-dark rounded-2xl shadow-lg overflow-hidden border border-secondary/30 dark:border-primary/20 dark:border-opacity-30 dark:shadow-blue-900/10 transition-all duration-300 hover:shadow-primary/30 dark:hover:shadow-primary/30 hover:shadow-xl group">
            <div className="flex flex-col md:flex-row w-full">
                <div className="flex-1 p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                        Less Extension
                    </h2>
                    <p className="text-foreground/80 mb-4">
                        As a part of my MSc. thesis project my thesis partner
                        and I have developed a browser extension that is
                        designed to help users manage their impulsive buying
                        behaviour online. We've gathered the interventions
                        strategy leveraging modern LLMs and Sentence
                        Transformers to catagorize advice.
                    </p>
                    <div className="mt-4 flex gap-4">
                        <Link
                            href="https://lessextension.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors">
                                See More
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="md:w-1/2 relative h-64 md:h-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/20 transition-all duration-500 z-10"></div>
                    <Image
                        alt="Profile background"
                        className="object-cover transition-transform duration-500"
                        src="/preview.jpg"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}
