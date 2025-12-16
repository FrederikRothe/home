"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "I'm a Developer.",
        "I build modern web apps.",
        "I love coding.",
        "Welcome to my personal space.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
        Hi, I'm Frederik.
      </h1>
      <span
        className="text-2xl md:text-4xl text-gray-300 font-medium"
        ref={el}
      />
    </div>
  );
}
