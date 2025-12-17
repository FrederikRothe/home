"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { ChevronDown } from "lucide-react";


export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
        strings: [
                'enjoy making coffees.',
                'love running.',
                'worked as a Teaching Assistant at ITU.',
                'research on how to reduce online impulsive shopping.',
                'love my bike.',
                'prefer mornings over evenings.',
                "like system design.",
                "enjoy building pretty websites.",
                "am an AI enthusiast.",
            ],
      typeSpeed: 75,
            backSpeed: 40,
            loop: true,
            cursorChar: '|',
            startDelay: 300,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-start text-left px-4 md:px-20 max-w-7xl mx-auto relative overflow-hidden">

      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight z-10">
        Hi, I'm <span className="text-blue-400">Frederik.</span> <br />
        I study Computer Science at the
        <br /> IT-University of Copenhagen. <br />
        Oh, and I <span ref={el} className="text-blue-400" />
      </h1>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce z-10">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </div>
  );
}
