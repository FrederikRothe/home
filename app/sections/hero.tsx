"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import CoffeeBean from "../components/javabean";

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "enjoy morning coffees.",
        "love running.",
        "worked as a TA at ITU.",
        "research impulsive purchase reduction.",
      ],
      typeSpeed: 75,
      backSpeed: 75,
      loop: true,
      cursorChar: "|",
      startDelay: 300,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center pt-16"
    >
      <div className="container mx-auto px-4 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-blue-500">Frederik</span> 👋🏼
          <br />
          <br />
          I study Computer Science at the IT-University of Copenhagen.
          <br />
          Oh, and I also <span ref={typedRef} className="text-blue-500"></span>
        </h1>
        <div className="flex gap-4 justify-center md:justify-start"></div>
      </div>
      <CoffeeBean />
    </section>
  );
}
