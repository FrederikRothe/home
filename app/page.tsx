import Image from "next/image";
import Typed from "typed.js";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Header/Navigation */}
      <header className="fixed w-full bg-background/80 backdrop-blur-md z-10 py-4">
        <nav className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="text-6xl font-bold">
            F
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

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="h-screen flex items-center justify-center pt-16"
        >
          <div className="container mx-auto px-4 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-blue-500">Frederik</span>
            </h1>
            <h2 className="text-3xl md:text-3xl mb-6">
              I'm a Computer Science student at IT-University of Copenhagen.
              <br />
              Oh, and I also
            </h2>
            <div className="flex gap-4 justify-center md:justify-start"></div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <p className="text-lg mb-4">
                  Hello! I'm a passionate developer with expertise in building
                  modern web applications. I enjoy solving complex problems and
                  creating intuitive user experiences.
                </p>
                <p className="text-lg mb-4">
                  With a strong foundation in [Your Skills/Background], I strive
                  to create elegant solutions that balance functionality and
                  aesthetics.
                </p>
                <p className="text-lg">
                  When I'm not coding, you can find me [Your Hobbies/Interests].
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-64 h-64 rounded-full bg-gray-300 dark:bg-gray-700">
                  {/* Replace with your photo */}
                  {/* <Image src="/your-photo.jpg" alt="Your Name" width={256} height={256} className="rounded-full" /> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              My Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition hover:shadow-xl">
                <div className="h-48 bg-gray-300 dark:bg-gray-700"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project One</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A brief description of your project and what technologies
                    you used.
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="text-blue-500 hover:underline">
                      View Project
                    </a>
                    <a href="#" className="text-blue-500 hover:underline">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition hover:shadow-xl">
                <div className="h-48 bg-gray-300 dark:bg-gray-700"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project Two</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A brief description of your project and what technologies
                    you used.
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="text-blue-500 hover:underline">
                      View Project
                    </a>
                    <a href="#" className="text-blue-500 hover:underline">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition hover:shadow-xl">
                <div className="h-48 bg-gray-300 dark:bg-gray-700"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project Three</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A brief description of your project and what technologies
                    you used.
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="text-blue-500 hover:underline">
                      View Project
                    </a>
                    <a href="#" className="text-blue-500 hover:underline">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* Skill Item */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="font-bold mb-2">Frontend</h3>
                <p>HTML, CSS, JavaScript, React</p>
              </div>

              {/* Skill Item */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="font-bold mb-2">Backend</h3>
                <p>Node.js, Express, Python</p>
              </div>

              {/* Skill Item */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="font-bold mb-2">Tools</h3>
                <p>Git, GitHub, VS Code</p>
              </div>

              {/* Skill Item */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="font-bold mb-2">Design</h3>
                <p>Figma, Tailwind CSS</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="hover:text-gray-400 transition">
              GitHub
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
