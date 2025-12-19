"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scrollYProgressSpring = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
  });

  const height = useTransform(scrollYProgressSpring, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative py-20">
      {/* Central Line - Hidden on smaller screens */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-800 hidden md:block" />
      
      {/* Animated Line Progress */}
      <motion.div 
        style={{ height }}
        className="absolute left-1/2 transform -translate-x-1/2 top-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 hidden md:block origin-top"
      />

      {/* Bottom Glowing Node */}
      <motion.div
        style={{
          scale: useTransform(scrollYProgressSpring, [0.95, 1], [0.9, 1]),
          opacity: 1,
          boxShadow: useTransform(scrollYProgressSpring, [0.95, 1], [
            "0 0 0px rgba(59,130,246,0)",
            "0 0 20px rgba(59,130,246,1)"
          ])
        }}
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-4 h-4 bg-blue-500 rounded-full hidden md:block z-10"
      />

      <div className="flex flex-col">
        {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
