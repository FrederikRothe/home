import Image from 'next/image'

export default function AboutCard() {
    return (
        <div className="w-full bg-background-light dark:bg-background-dark rounded-2xl shadow-lg overflow-hidden border border-secondary/20">
            <div className="flex flex-col md:flex-row w-full">
                <div className="flex-1 p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                        Master Thesis Project
                    </h2>
                    <p className="text-foreground/80 mb-4">
                        Welcome to my profile! I'm passionate about creating
                        meaningful experiences through design and technology.
                    </p>
                    <p className="text-foreground/80 mb-4">
                        I specialize in building modern web applications using
                        Next.js, React, and TypeScript. My focus is on creating
                        performant, accessible, and beautiful user interfaces.
                    </p>
                    <div className="mt-4 flex gap-4">
                        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors">
                            Contact Me
                        </button>
                        <button className="px-4 py-2 border border-secondary/50 rounded-lg hover:bg-secondary/20 transition-colors text-foreground">
                            View Portfolio
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 relative h-64 md:h-auto">
                    <Image
                        alt="Profile background"
                        className="object-cover"
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
