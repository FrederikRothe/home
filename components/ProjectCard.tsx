import { Project } from "@/lib/projects";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      className={`relative w-full md:w-5/12 ${
        isEven ? "md:ml-auto md:text-left" : "md:mr-auto md:text-right"
      } mb-12 md:mb-24`}
    >
      {/* Connector Line to Center - Hidden on Mobile */}
      <div 
        className={`hidden md:block absolute top-6 h-0.5 bg-gray-700 w-[20%] ${
          isEven ? "-left-[20%]" : "-right-[20%]"
        }`}
      />
      
      {/* Dot on the Timeline - Hidden on Mobile */}
      <motion.div 
        initial={{ scale: 1, backgroundColor: "#374151", boxShadow: "0 0 0 rgba(59,130,246,0)" }}
        whileInView={{ 
          backgroundColor: "#3b82f6",
          scale: 2, 
          boxShadow: [
            "0 0 10px rgba(59,130,246,0.4)",
            "0 0 20px rgba(59,130,246,0.8)",
            "0 0 10px rgba(59,130,246,0.4)"
          ]
        }}
        viewport={{ once: true, margin: "0px 0px -50% 0px" }}
        transition={{ 
          backgroundColor: { duration: 0.3 },
          scale: { duration: 0.5, ease: "easeOut" },
          boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className={`hidden md:block absolute top-[19px] w-3 h-3 bg-gray-700 rounded-full z-10 ${
          isEven ? "-left-[20%] -translate-x-1/2" : "-right-[20%] translate-x-1/2"
        }`}
      />

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -50% 0px" }}
        variants={{
          hidden: { boxShadow: "0 0 0 rgba(0,0,0,0)" },
          visible: { boxShadow: "0 10px 30px -10px rgba(59,130,246,0.3)" }
        }}
        transition={{ duration: 0.5 }}
        className={`p-6 bg-card rounded-xl border border-border hover:border-gray-500 transition-all duration-300 hover:shadow-lg group`}
      >
        <div className="h-64 bg-gray-800 rounded-lg mb-4 overflow-hidden relative">
            {project.image ? (
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
            ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-600 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-500">
                    <span className="text-4xl font-light opacity-30">{project.title.charAt(0)}</span>
                </div>
            )}
        </div>

        <div className={`flex flex-col ${isEven ? 'items-start' : 'items-end md:items-end items-start'}`}>
            <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
            
            <p className={`text-gray-400 mb-4 leading-relaxed ${isEven ? 'text-left' : 'text-left md:text-right'}`}>
            {project.description}
            </p>

            <div className={`flex flex-wrap gap-2 mb-6 ${isEven ? 'justify-start' : 'justify-start md:justify-end'}`}>
            {project.tags.map((tag) => (
                <span 
                key={tag} 
                className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-400/10 rounded-full border border-blue-400/20"
                >
                {tag}
                </span>
            ))}
            </div>

            <div className="flex gap-4">
            {project.github && (
                <a
                href={project.github}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-colors"
                aria-label="View Source"
                >
                <Github className="w-5 h-5" />
                </a>
            )}
            {project.link && (
                <a
                href={project.link}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-colors"
                aria-label="Visit Site"
                >
                <ExternalLink className="w-5 h-5" />
                </a>
            )}
            </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
