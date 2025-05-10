export default function Header() {
  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-md z-10 py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <a href="#top">
          <img
            src="/fr.svg"
            alt="Logo"
            className="h-16 transition-transform transform hover:scale-110"
          />
        </a>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-gray-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400 transition">
            About
          </a>
          <a href="#projects" className="hover:text-gray-400 transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-gray-400 transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-gray-400 transition">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
