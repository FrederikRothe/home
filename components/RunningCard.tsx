export default function RunningCard() {
    return (
        <div className="w-full bg-background-light dark:bg-background-dark rounded-2xl shadow-lg overflow-hidden border border-secondary/30 dark:border-primary/20 dark:border-opacity-30 dark:shadow-blue-900/10 transition-all duration-300 hover:shadow-primary/30 dark:hover:shadow-primary/30 hover:shadow-xl group">
            <div className="flex flex-col md:flex-row-reverse w-full">
                <div className="flex-1 p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                        Running Journey
                    </h2>
                    <p className="text-foreground/80 mb-4">
                        Take a peek into my running training, if the milage is
                        low I'm probably injured...
                    </p>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className=" p-3 rounded-lg text-center">
                            <p className="text-primary text-xl font-bold">
                                625+
                            </p>
                            <p className="text-foreground/70 text-sm">
                                Total Runs
                            </p>
                        </div>
                        <div className=" p-3 rounded-lg text-center">
                            <p className="text-primary text-xl font-bold">
                                5000+ km
                            </p>
                            <p className="text-foreground/70 text-sm">
                                Distance
                            </p>
                        </div>
                        <div className="p-3 rounded-lg text-center">
                            <p className="text-primary text-xl font-bold">
                                450+ hrs
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
                <div className="md:w-1/2 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-primary/5 flex items-center justify-center p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/30 transition-all duration-500"></div>
                    <div className="relative w-full h-64 z-10">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <svg
                                className="w-32 h-32 text-primary/80 dark:text-primary/60 transition-transform duration-500 group-hover:scale-110 group-hover:text-primary"
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
