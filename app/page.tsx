import Hero from "@/components/Hero";
import PhaseIn from "@/components/PhaseIn";
import ProjectTimeline from "@/components/ProjectTimeline";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground overflow-x-hidden">
      <Hero />

      <section className="py-20 pb-[40vh] px-4 md:px-20 max-w-7xl mx-auto">
        <PhaseIn delay={0.2}>
          <div className="mb-20">
            <ProjectTimeline />
          </div>
        </PhaseIn>

        <PhaseIn delay={0.4}>
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <SocialLinks />
          </div>
        </PhaseIn>
      </section>
    </main>
  );
}
