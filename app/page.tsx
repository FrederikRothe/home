import Hero from "@/components/Hero";
import PhaseIn from "@/components/PhaseIn";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />

      <section className="py-20 px-4 md:px-20 max-w-7xl mx-auto">
        <PhaseIn>
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 border-b border-gray-700 pb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
              I am a passionate developer with a knack for building beautiful and
              functional web applications. When I'm not coding for work, I love
              exploring new technologies and working on personal projects that
              challenge me.
            </p>
          </div>
        </PhaseIn>

        <PhaseIn delay={0.2}>
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 border-b border-gray-700 pb-4">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-card p-6 rounded-xl border border-border hover:border-gray-500 transition-colors"
                >
                  <div className="h-48 bg-gray-800 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                    Project Preview {item}
                  </div>
                  <h3 className="text-xl font-bold mb-2">Project Title {item}</h3>
                  <p className="text-gray-400">
                    A brief description of this personal project. It demonstrates
                    my skills in React, Next.js, and modern UI design.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </PhaseIn>

        <PhaseIn delay={0.4}>
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <div className="flex justify-center gap-6">
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:example@example.com"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </PhaseIn>
      </section>
    </main>
  );
}
