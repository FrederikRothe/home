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
      {/* <About /> */}

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} How to reach me.</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a
              href="https://www.linkedin.com/in/frederik-rothe/"
              className="hover:text-gray-400 transition"
            >
              <img src="/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
