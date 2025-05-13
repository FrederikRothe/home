import ThemeToggle from '@/components/ThemeToggle'
import ThemedIcon from '@/components/ThemedIcon'

export default function Header() {
    return (
        <header className="fixed w-full bg-background/80 backdrop-blur-md z-10 py-4">
            <nav className="container mx-auto px-4 flex justify-between items-center">
                <a href="/#top">
                    <ThemedIcon
                        src="/fr.svg"
                        alt="Logo"
                        className="h-16 transition-transform transform hover:scale-110"
                        lightColor="#1A365D" // Dark blue for light mode
                        darkColor="#F8FAFC" // Off-white for dark mode
                    />
                </a>
                <div className="flex items-center space-x-6">
                    <ThemeToggle />
                    <div className="hidden md:flex space-x-8">
                        <a
                            href="/#home"
                            className="transition-transform transform hover:scale-110"
                        >
                            <ThemedIcon
                                src="/layers.svg"
                                alt="Layers icon"
                                className="h-12 w-12 mt-4"
                                lightColor="#1A365D" // Dark blue for light mode
                                darkColor="#F8FAFC" // Off-white for dark mode
                            />
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}
