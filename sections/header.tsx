export default function Header() {
    return (
        <header className="fixed w-full bg-background/80 backdrop-blur-md z-10 py-4">
            <nav className="container mx-auto px-4 flex justify-between items-center">
                <a href="/#top">
                    <img
                        src="/fr.svg"
                        alt="Logo"
                        className="h-16 transition-transform transform hover:scale-110"
                    />
                </a>
                <div className="hidden md:flex space-x-8">
                    <a href="/#home" className="hover:text-gray-400 transition">
                        <img src="/layers.svg" className="h-12 w-12 mt-4" />
                    </a>
                </div>
            </nav>
        </header>
    )
}
