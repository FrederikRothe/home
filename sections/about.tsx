export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <p className="text-lg mb-4">
              Hello! I'm a passionate developer with expertise in building
              modern web applications. I enjoy solving complex problems and
              creating intuitive user experiences.
            </p>
            <p className="text-lg mb-4">
              With a strong foundation in [Your Skills/Background], I strive to
              create elegant solutions that balance functionality and
              aesthetics.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me [Your Hobbies/Interests].
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gray-300 dark:bg-gray-700">
              {/* Replace with your photo */}
              {/* <Image src="/your-photo.jpg" alt="Your Name" width={256} height={256} className="rounded-full" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
