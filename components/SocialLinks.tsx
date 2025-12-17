"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-6">
      {[
        { Icon: Github, href: "https://github.com/FrederikRothe" },
        { Icon: Linkedin, href: "https://www.linkedin.com/in/frederik-rothe/" }
      ].map(({ Icon, href }, index) => (
        <motion.a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ boxShadow: "0 0 0 rgba(59,130,246,0)" }}
          whileInView={{ 
            boxShadow: [
              "0 0 10px rgba(59,130,246,0.4)",
              "0 0 20px rgba(59,130,246,0.8)",
              "0 0 10px rgba(59,130,246,0.4)"
            ]
          }}
          viewport={{ once: true, margin: "0px 0px -50% 0px" }}
          transition={{ 
            boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }
          }}
          className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
        >
          <Icon className="w-6 h-6" />
        </motion.a>
      ))}
    </div>
  );
}
