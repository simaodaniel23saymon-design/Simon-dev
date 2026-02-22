export default function Projects() {
  const projects = [
    {
      title: "Web3 Dashboard",
      description: "Dashboard for monitoring crypto tokens and wallet activity.",
      github: "#",
      live: "#",
    },
    {
      title: "Business Landing Page",
      description: "Modern landing page built with Next.js and Tailwind.",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="space-y-12">
      <h2 className="text-3xl font-bold text-center">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300 space-y-4"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>

            <p className="text-gray-400">
              {project.description}
            </p>

            <div className="flex gap-4 pt-2">
              <a
                href={project.github}
                target="_blank"
                className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-400 transition"
              >
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}