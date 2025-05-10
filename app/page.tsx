"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import Header from "./sections/header";
import Hero from "./sections/hero";
import About from "./sections/about";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Hero />
      {/* Main Content */}
      <main>
        <About />
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
