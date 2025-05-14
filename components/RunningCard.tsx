export default function RunningCard() {
    return (
        <div className="w-full bg-background-light dark:bg-background-dark rounded-2xl shadow-lg overflow-hidden border border-secondary/20">
            <div className="flex flex-col md:flex-row-reverse w-full">
                <div className="flex-1 p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                        My Running Journey
                    </h2>
                    <p className="text-foreground/80 mb-4">
                        Besides coding, I'm passionate about running. It helps
                        me clear my mind and stay focused. I regularly
                        participate in local running events.
                    </p>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="bg-background p-3 rounded-lg text-center">
                            <p className="text-primary text-xl font-bold">
                                120+
                            </p>
                            <p className="text-foreground/70 text-sm">
                                Total Runs
                            </p>
                        </div>
                        <div className="bg-background p-3 rounded-lg text-center">
                            <p className="text-primary text-xl font-bold">
                                500km
                            </p>
                            <p className="text-foreground/70 text-sm">
                                Distance
                            </p>
                        </div>
                        <div className="bg-background p-3 rounded-lg text-center">
                            <p className="text-primary text-xl font-bold">
                                50hrs
                            </p>
                            <p className="text-foreground/70 text-sm">
                                Run Time
                            </p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <a
                            href="/running"
                            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors inline-block"
                        >
                            View Running Stats
                        </a>
                    </div>
                </div>
                <div className="md:w-1/2 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center p-6">
                    <div className="relative w-full h-64">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <svg
                                className="w-32 h-32 text-primary/80"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
